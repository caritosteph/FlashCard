import { combineReducers } from 'redux'
import decks from './decks'
import deck from './deck'

const reducers = combineReducers({
  decks,
  deck
})

export default reducers
