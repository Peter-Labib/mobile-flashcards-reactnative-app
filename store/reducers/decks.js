import * as actionType from '../actions/actionType'
import initialDecks from '../../utils/_Data'

const initialState = initialDecks

export default (state = initialState, action) => {
  switch (action.type) {
    case actionType.RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks,
      }
    case actionType.CREATE_DECK:
      return {
        ...state,
        [action.title]: {
          title: action.title,
          questions: [],
        },
      }
    case actionType.CREATE_CARD:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          questions: [...state[action.id].questions].concat(action.card),
        },
      }
    default:
      return state
  }
}
