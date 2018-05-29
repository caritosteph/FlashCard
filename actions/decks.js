import { ALL_DECKS, ADD_DECK } from './constantTypes'
import { fetchDeckList, saveNewDeck, addCardToDeck } from  '../utils/api'

const allDecks = (decks) => ({
  type: ALL_DECKS,
  decks
})

const newDeck = (deck) => ({
  type: ADD_DECK,
  deck
})

const addCard = (decks) => {
  return {
    type: ALL_DECKS,
    decks
  }
}

export const fetchDecks = () => dispatch => {
  return fetchDeckList()
    .then( decks => dispatch(allDecks(decks)));
}

export const addDeck = (deckTitle) => dispatch => {
  return saveNewDeck(deckTitle)
    .then( deck => dispatch(newDeck(deck)))
}
