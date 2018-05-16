import { ALL_DECKS } from '../actions/constantTypes'

const initialState = {
  decks: []
}

function decks(state = initialState, action) {
  const { decks } = action

  switch (action.type) {
    case ALL_DECKS:
      return {
        ...state,
        decks: Object.keys(decks).map(item => decks[item])
      }
      break
    default:
        return state;
  }
}

export default decks
