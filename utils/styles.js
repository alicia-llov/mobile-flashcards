import React from 'react'
import { StyleSheet, Dimensions } from 'react-native'
import { Header } from '@react-navigation/native'

const ScreenHeight = Dimensions.get('window').height
const ScreenWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  activityIndicatorWrapper: {
    backgroundColor: '#FFFFFF',
    height: '100%',
    width: '100%',
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: ScreenHeight,
    width: ScreenWidth,
    backgroundColor: '#FFFFFF'
  },
  scrollContainer: {
    display: 'flex',
    justifyContent: 'center',
    width: ScreenWidth,
    height: '100%',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },
  viewTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  deckContainer: {
    width: '80%',
    paddingHorizontal: 10,
    paddingVertical: 30,
    borderColor: '#FFD25A',
    backgroundColor: '#FFD25A',
    borderRadius: 5,
    borderWidth: 1,
    marginBottom: 10
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#412234'
  },
  cardSubtitle: {
    fontSize: 18,
    textAlign: 'center',
    color: '#412234'
  },
  actionButtonContainer: {
    marginVertical: 20
  },
  actionButton: {
    width: 200,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 5,
    borderWidth: 1,
    marginBottom: 10,
    fontSize: 23
  },
  actionButtonLight: {
    backgroundColor: '#FFD25A',
    borderColor: '#FFD25A'
  },
  actionButtonDark: {
    backgroundColor: '#412234',
    borderColor: '#412234'
  },
  actionButtonDisabled: {
    backgroundColor: '#f5f5f5',
    borderColor: '#f5f5f5'
  },
  actionButtonCorrect: {
    backgroundColor: '#94C9A9',
    borderColor: '#94C9A9'
  },
  actionButtonIncorrect: {
    backgroundColor: '#FE5F55',
    borderColor: '#FE5F55'
  },
  actionButtonDarkText: {
    color: '#000000',
    textAlign: 'center'
  },
  actionButtonLightText: {
    color: '#ffffff',
    textAlign: 'center'
  },
  actionButtonDisabledText: {
    color: 'grey',
    textAlign: 'center'
  },
  inputTitle: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  inputText: {
    borderColor: '#cacaca',
    borderWidth: 1,
    width: '90%',
    height: 50,
    fontSize: 20,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 5,
    marginTop: 20,
    marginBottom: 40
  },
  textButton: {
    color: 'red',
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: 'red',
    textAlign: 'center'
  },
  quizContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: ScreenHeight,
    width: ScreenWidth,
    backgroundColor: '#FFFFFF'
  },
  quizNumbersContainer: {
    marginVertical: 20
  },
  quizNumbers: {
    textAlign: 'left',
    fontSize: 20
  },
  quizCard: {
    flex: 1,
    width: '100%',
    alignItems: 'center'
  },
  quizContent: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },
  quizButtons: {
    flex: 1,
    marginVertical: 20
  },
  textHint: {
    textAlign: 'center',
    marginVertical: 20
  },
  questionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#412234',
    marginBottom: 25
  }
})

export default styles
