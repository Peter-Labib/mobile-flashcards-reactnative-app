import * as actionType from './actionType'
import { getDecks, addCardToStorage, addDeckToStorage } from '../../utils/api'

export const receiveDecks = (decks) => {
  return {
    type: actionType.RECEIVE_DECKS,
    decks,
  }
}

export const createDeck = (title) => {
  return {
    type: actionType.CREATE_DECK,
    title,
  }
}

export const createCard = (id, card) => {
  console.log(id)
  return {
    type: actionType.CREATE_CARD,
    id,
    card,
  }
}

export const getInitialData = () => (dispatch) => {
  return getDecks().then((decks) => {
    dispatch(receiveDecks(decks))
  })
}

export const createCardHandler = (id, card) => (dispatch) => {
  return addCardToStorage(id, card)
    .then(() => dispatch(createCard(id, card)))
    .catch((e) => console.log(e))
}

export const createDeckHandler = (title) => (dispatch) => {
  return addDeckToStorage(title)
    .then(() => dispatch(createDeck(title)))
    .catch((e) => console.log(e))
}
