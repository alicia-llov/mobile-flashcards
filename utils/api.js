import AsyncStorage from '@react-native-community/async-storage'
import { STORAGE_KEY, data } from './_DATA'

export const getData = async () => {
  try {
    const value = await AsyncStorage.getItem(STORAGE_KEY)
    if (value !== null) {
      return JSON.parse(value)
    } else {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data))
      return data
    }
  } catch (e) {
    console.log('err', e)
  }
}

export const handleSaveQuestion = async (deck, question) => {
  try {
    await AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({
      [deck.title]: {
        title: [deck.title],
        questions: [...deck.questions].concat(question)
      }
    }))
  } catch (e) {
    console.log('err', e)
  }
}

export const handleDeleteDeck = async (deckTitle) => {
  try {
    const value = await AsyncStorage.getItem(STORAGE_KEY)
    const formatedValue = Object.assign({}, JSON.parse(value))
    delete formatedValue[deckTitle]
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(formatedValue))
  } catch (e) {
    console.log('err', e)
  }
}

export const handleSaveDeck = async (deckTitle) => {
  try {
    await AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({
      [deckTitle]: {
        title: deckTitle,
        questions: []
      }
    }))
  } catch (e) {
    console.log('err', e)
  }
}
