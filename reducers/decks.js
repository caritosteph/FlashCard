import { ALL_DECKS, ADD_DECK } from '../actions/constantTypes'

const initialState = {
  decks: []
}

function decks(state = initialState, action) {
  const { decks, deck, card } = action

  switch (action.type) {
    case ALL_DECKS:
      return {
        ...state,
        decks: Object.keys(decks).map(item => decks[item])
      }
    case ADD_DECK:
      return {
        ...state,
        decks: [
          ...state.decks,
          deck
        ]
      }

    default:
        return state;
  }
}

export default decks
