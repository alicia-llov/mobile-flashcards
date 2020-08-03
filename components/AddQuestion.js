import React, { Component } from 'react'
import { Platform, Text, TextInput, Keyboard, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import { CommonActions } from '@react-navigation/native'
import { connect } from 'react-redux'
import styles from '../utils/styles'
import { handleSaveQuestion } from '../utils/api'
import { saveQuestion } from '../actions/index'

class AddQuestion extends Component {

  constructor (props) {
    super(props)
    this.state = {
      questionTitle: '',
      questionAnswer: ''
    }
  }

  goBack = () => {
    this.props.navigation.dispatch(CommonActions.goBack())
  }

  handleTitleChange = (questionTitle) => {
    this.setState({ questionTitle })
  }

  handleAnswerChange = (questionAnswer) => {
    this.setState({ questionAnswer })
  }

  handleSubmit = () => {

    const {questionTitle, questionAnswer } = this.state
    const { deck } = this.props.route.params
    const question = {
      question: questionTitle,
      answer: questionAnswer
    }

    this.props.dispatch(saveQuestion(deck.title, question))

    handleSaveQuestion(deck, question)
    this.goBack()

  }

  render () {

    return (
      <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={styles.container}> 
        <Text style={styles.viewTitle}>Add a new question!</Text>
            <Text style={styles.inputTitle}>Your questions title</Text>
            <TextInput 
            style={styles.inputText}
            name='questionTitle'
            value={this.state.questionTitle}
            onChangeText={this.handleTitleChange}
            onBlur={Keyboard.dismiss} />
            <Text style={styles.inputTitle}>Your questions answer</Text>
            <TextInput 
            style={styles.inputText}
            name='questionAnswer'
            value={this.state.questionAnswer}
            onChangeText={this.handleAnswerChange}
            onBlur={Keyboard.dismiss} />
            <TouchableOpacity style={[styles.actionButton, styles.actionButtonDark]} onPress={this.handleSubmit}>
                <Text style={styles.actionButtonLightText}>Save Question</Text>
            </TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }
}

export default connect()(AddQuestion)
