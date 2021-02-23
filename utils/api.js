import AsyncStorage from '@react-native-async-storage/async-storage'
import { initialDecks } from './_Data'
import { DECKS_STORAGE_KEY } from './helpers'

export const getData = () => {
  return initialDecks
}

export const getDecks = async () => {
  try {
    const storeResult = await AsyncStorage.getItem(DECKS_STORAGE_KEY)

    if (storeResult === null) {
      AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(initialDecks))
    }

    return storeResult === null ? initialDecks : JSON.parse(storeResult)
  } catch (err) {
    console.log(err)
  }
}

export const getDeck = async (id) => {
  try {
    const storeResult = await AsyncStorage.getItem(DECKS_STORAGE_KEY)
    return JSON.parse(storeResult)[id]
  } catch (err) {
    console.log(err)
  }
}

export const addCardToStorage = async (id, card) => {
  try {
    const deck = await getDeck(id)
    await AsyncStorage.mergeItem(
      DECKS_STORAGE_KEY,
      JSON.stringify({
        [id]: {
          questions: [...deck.questions].concat(card),
        },
      })
    )
  } catch (err) {
    console.log(err)
  }
}

export const addDeckToStorage = async (title) => {
  try {
    await AsyncStorage.mergeItem(
      DECKS_STORAGE_KEY,
      JSON.stringify({
        [title]: {
          title,
          questions: [],
        },
      })
    )
  } catch (err) {
    console.log(err)
  }
}
