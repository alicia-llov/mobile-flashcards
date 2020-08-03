import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from '../utils/styles'

export const questionsView = (question, handleToggleAnswer) => {
 return (
    <View style={styles.quizContent}>
      <Text style={styles.questionTitle}>{question}</Text>
      <TouchableOpacity onPress={handleToggleAnswer}>
      <Text style={styles.textButton}>Show Answer</Text>
      </TouchableOpacity>
    </View>
)}

export const answerView = (answer, handleToggleAnswer) => {
  return (
    <View style={styles.quizContent}>
      <Text style={styles.questionTitle}>{answer}</Text>
      <TouchableOpacity onPress={handleToggleAnswer}>
      <Text style={styles.textButton}>Hide Answer</Text>
      </TouchableOpacity>
    </View>
  ) 

}

class Card extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showAnswer: false
    }
  }

  handleToggleAnswer = () => {    
    const { showAnswer } = this.state
    this.setState({ showAnswer: !showAnswer })
  }

  handleAnswerQuestion = () => {
    
  }

  render () {

    const { card, handleQuizState } = this.props
    const { showAnswer } = this.state
    return (
      <View style={styles.quizCard}>
        {showAnswer ? answerView(card.answer, this.handleToggleAnswer) : questionsView(card.question, this.handleToggleAnswer)}
      </View>
    )
  }
}

export default Card