export const GET_DATA = 'GET_DATA'
export const SAVE_QUESTION = 'SAVE_QUESTION'
export const DELETE_DECK = 'DELETE_DECK'
export const SAVE_DECK = 'SAVE_DECK'

export function receiveData (data) {
  return {
    type: GET_DATA,
    data
  }
}

export function saveQuestion (deckTitle, question) {
  return {
    type: SAVE_QUESTION,
    deckTitle,
    question
  }
}

export function deleteDeck (deckTitle) {
  return {
    type: DELETE_DECK,
    deckTitle
  }
}

export function saveDeck (deckTitle) {
  return {
    type: SAVE_DECK,
    deckTitle
  }
}