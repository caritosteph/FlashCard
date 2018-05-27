import { AsyncStorage } from 'react-native'

export const FLASHCARDS_STORAGE_KEY = 'FlashCards:decks';

let initialState = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces',
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event',
      },
    ],
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer:
          'The combination of a function and the lexical environment within which that function was declared.',
      },
    ],
  },
};

function setInitialData() {
  AsyncStorage.setItem('FLASHCARDS_STORAGE_KEY', JSON.stringify(initialState))
  return initialState
}

export function fetchDeckList() {
  return AsyncStorage.getItem('FLASHCARDS_STORAGE_KEY')
   .then(results => results === null ? setInitialData() : JSON.parse(results))
}

export function getDeckDetail(deck) {
  return AsyncStorage.getItem('FLASHCARDS_STORAGE_KEY')
  .then(results => JSON.parse(results)[deck])
}

export function addNewDeck(deckTitle) {
  const newDeck = {
    [deckTitle]: {
      title: deckTitle,
      questions: []
    }
  }
  return AsyncStorage.mergeItem('FLASHCARDS_STORAGE_KEY', JSON.stringify(newDeck))
    .then( () => newDeck[deckTitle] )
}
