import { DECK_DETAIL, ADD_CARD_DECK } from './constantTypes'
import { addCardToDeck } from  '../utils/api'

 export const deckDetail = (deck) => ({
   type: DECK_DETAIL,
   deck
 })

export const addCard = (card) => ({
  type: ADD_CARD_DECK,
  card
})

export const addCardDeck = (deckTitle, card) => dispatch => {
  return addCardToDeck(deckTitle, card)
  .then( card => dispatch(addCard(card)))
}
