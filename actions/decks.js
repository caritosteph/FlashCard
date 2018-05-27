import { ALL_DECKS, ADD_DECK } from './constantTypes'
import { fetchDeckList, addNewDeck } from  '../utils/api'

const allDecks = (decks) => ({
  type: ALL_DECKS,
  decks
})

const newDeck = (deck) => ({
  type: ADD_DECK,
  deck
})

export const fetchDecks = () => dispatch => {
  return fetchDeckList()
    .then( decks => dispatch(allDecks(decks)));
}

export const addDeck = (deckTitle) => dispatch => {
  return addNewDeck(deckTitle)
    .then( deck => dispatch(newDeck(deck)))
}
