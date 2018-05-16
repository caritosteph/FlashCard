import { ALL_DECKS } from './constantTypes'
import { fetchDeckList } from  '../utils/api'

 const allDecks = (decks) => ({
   type: ALL_DECKS,
   decks
 })

export const fetchDecks = () => dispatch => {
    return fetchDeckList()
      .then( decks => dispatch(allDecks(decks)));
};
