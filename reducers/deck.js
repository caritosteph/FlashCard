import { DECK_DETAIL, ADD_CARD_DECK } from '../actions/constantTypes'

const initialState = {
  questions: []
}

function decks(state = initialState, action) {
  const { deck, card } = action

  switch (action.type) {
    case DECK_DETAIL:
      return {
        ...state,
        deck
      }
    case ADD_CARD_DECK:
      return {
        ...state,
        questions: state.questions.push(card)
      }
    default:
        return state;
  }
}

export default decks
