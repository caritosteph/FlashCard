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
  return AsyncStorage.getItem('FLASHCARDS_STORAGE_KEY').then(
    result => result === null ? setInitialData() : JSON.parse(result)
  )
}
