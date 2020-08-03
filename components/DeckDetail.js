import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Button } from 'react-native'
import { connect } from 'react-redux'
import { CommonActions } from '@react-navigation/native'
import { handleDeleteDeck } from '../utils/api'
import { deleteDeck } from '../actions/index'
import styles from '../utils/styles'

class DeckDetail extends Component {

  handleDeleteDeck = () => {
    const { deck } = this.props

    this.props.navigation.dispatch(CommonActions.navigate({name: 'Decks'})) 
    this.props.dispatch(deleteDeck(deck.title))
    handleDeleteDeck(deck.title)
   
  }

  render () {
    const { deck } = this.props

    if (!deck) {
      return (
        <View style={styles.container}>
           <Text style={styles.cardTitle}>Deck could not be found</Text>
        </View>
      )
    }

    return (
      <View style={styles.container}>
        <Text style={styles.cardTitle}>{deck.title}</Text>
        <Text style={styles.cardSubtitle}>{deck.questions.length} cards</Text>
        <View style={styles.actionButtonContainer}>
          <TouchableOpacity style={[styles.actionButton, styles.actionButtonLight]} onPress={() => this.props.navigation.navigate('AddQuestion', { deck: deck })}>
            <Text style={styles.actionButtonDarkText}>ADD CARD!</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.actionButton, styles.actionButtonDark]} onPress={() => this.props.navigation.navigate('Quiz', { questions: deck.questions })}>
            <Text style={styles.actionButtonLightText}>START QUIZ</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={this.handleDeleteDeck}>
          <Text style={styles.textButton}>Delete Deck</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

function mapStateToProps (data, props) {
  const { deckTitle } = props.route.params
  return {
    deck: data[deckTitle]
  }
}

export default connect(mapStateToProps)(DeckDetail)
