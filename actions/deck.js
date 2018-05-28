import { DECK_DETAIL, ADD_CARD_DECK } from './constantTypes'
import { addCardToDeck, getDeckDetail } from  '../utils/api'

const deckDetail = (deck) => ({
 type: DECK_DETAIL,
 deck
})

const addCard = (card) => ({
  type: ADD_CARD_DECK,
  card
})

export const fetchDeckDetail = (deckTitle) => dispatch => {
  return getDeckDetail(deckTitle)
  .then( deck => dispatch(deckDetail(deck)))
}

export const addCardDeck = (deckTitle, card) => dispatch => {
  return addCardToDeck(deckTitle, card)
  .then( card => dispatch(addCard(card)))
}
