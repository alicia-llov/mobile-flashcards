import { GET_DATA, SAVE_QUESTION, DELETE_DECK, SAVE_DECK } from '../actions/index'

export default function data (state = {}, action) {
  switch (action.type) {
    case GET_DATA :
      return {
        ...state,
        ...action.data
      }
    case SAVE_QUESTION :
      const { deckTitle, question } = action
      return {
        ...state,
        [deckTitle]: {
          ...state[deckTitle],
          questions: [...state[deckTitle].questions.concat(question)]
        }
      }
    case DELETE_DECK :
      const { [action.deckTitle]: value, ...remainDecks } = state
      return remainDecks
    case SAVE_DECK :
      return {
        ...state,
        [action.deckTitle]: {
          title: action.deckTitle,
          questions: []
        }
      }

    default :
      return state
  }
}
