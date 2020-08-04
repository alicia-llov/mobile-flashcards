import React, { Component } from 'react'
import { Text, TextInput, Keyboard, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
import styles from '../utils/styles'
import { handleSaveDeck } from '../utils/api'
import { saveDeck } from '../actions/index'

class AddDeck extends Component {
  constructor (props) {
    super(props)
    this.state = {
      newDeckTitle: ''
    }
	}
	
	handleTitleChange = (newDeckTitle) => {
    this.setState({ newDeckTitle })
	}
	
	handleSubmit = () => {

    const { newDeckTitle } = this.state

    this.props.dispatch(saveDeck(newDeckTitle))

    handleSaveDeck(newDeckTitle)
    this.setState({ newDeckTitle: '' })
		this.props.navigation.navigate('DeckDetail', { deckTitle: newDeckTitle })

  }

  render() {
    const { newDeckTitle } = this.state
    return (
      <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={styles.container}> 
        <Text style={styles.viewTitle}>What will be the title of the new deck?</Text>
				<TextInput 
				style={styles.inputText}
				name='newDeckTitle'
				value={this.state.newDeckTitle}
				onChangeText={this.handleTitleChange}
				onBlur={Keyboard.dismiss} />
				<TouchableOpacity style={newDeckTitle === "" ? [styles.actionButton, styles.actionButtonDisabled] : [styles.actionButton, styles.actionButtonDark]} onPress={this.handleSubmit}>
						<Text style={newDeckTitle === "" ? styles.actionButtonDisabledText : styles.actionButtonLightText}>Save Deck</Text>
				</TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }
}

export default connect()(AddDeck)