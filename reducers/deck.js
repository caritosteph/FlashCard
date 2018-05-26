import { DECK_DETAIL } from '../actions/constantTypes'

const initialState = {
  questions: []
}

function decks(state = initialState, action) {
  const { deck } = action

  switch (action.type) {
    case DECK_DETAIL:
      return {
        ...state,
        deck
      }
      break
    default:
        return state;
  }
}

export default decks
