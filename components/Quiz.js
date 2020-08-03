import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from '../utils/styles'
import Card from './Card'
import { setLocalNotification, clearLocalNotification } from '../utils/helpers'


class Quiz extends Component {
  constructor (props) {
    super(props)
    this.state = {
			correctAnswers: 0,
			incorrectAnswers: 0,
      currentIndex: 0
    }
	}
	
	handleQuizState = answer => {
	 this.setState({
			[answer]: ++this.state[answer],
			currentIndex: ++this.state.currentIndex
	 })

	}

	handleReestartQuiz = () => {
		const { currentIndex } = this.state
    this.setState({ 
      correctAnswers: 0,
			incorrectAnswers: 0,
      currentIndex: 0 })
  }

  componentDidMount () {
    clearLocalNotification()
    .then(setLocalNotification)
  }

  render () {
    const { questions } = this.props.route.params
		const { currentIndex, correctAnswers, incorrectAnswers } = this.state

		const totalQuestions = questions.length

    if (questions.length === 0) {
      return (
        <View style={styles.container}>
          <Text style={styles.cardTitle}>There are no Cards in this Deck</Text>
        </View>
      )
		}
		
		if (questions[currentIndex] === undefined) {
			return (
        <View style={styles.container}>
          <Text style={styles.questionTitle}>Your score!</Text>
					<Text style={styles.cardSubTitle}>Correct answers: {correctAnswers}</Text>
					<Text style={styles.cardSubTitle}>Incorrect answers: {incorrectAnswers}</Text>
					<View style={styles.actionButtonContainer}>
					<Text style={[styles.textHint, styles.cardSubTitle]}>What next?</Text>
          <TouchableOpacity style={[styles.actionButton, styles.actionButtonLight]} onPress={() => this.props.navigation.navigate('DeckDetail')}>
            <Text style={styles.actionButtonDarkText}>I need to study more</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.actionButton, styles.actionButtonDark]} onPress={this.handleReestartQuiz}>
            <Text style={styles.actionButtonLightText}>I'm ready to try again</Text>
          </TouchableOpacity>
        </View>
        </View>
      )
		}

    return (
      <View style={styles.quizContainer}>
        <View style={styles.quizNumbersContainer}>
          <Text styles={styles.quizNumbers}>{currentIndex + 1} / {totalQuestions}</Text>
        </View>
				<Card 
					card={questions[currentIndex]}/>
				<View style={styles.quizButtons}>
					<Text style={[styles.textHint, styles.cardSubTitle]}>Try to answer honestly</Text>
          <TouchableOpacity style={[styles.actionButton, styles.actionButtonCorrect]} onPress={() => this.handleQuizState('correctAnswers')}>
            <Text style={styles.actionButtonLightText}>CORRECT</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.actionButton, styles.actionButtonIncorrect]} onPress={() => this.handleQuizState('incorrectAnswers')}>
            <Text style={styles.actionButtonLightText}>INCORRECT</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default Quiz
