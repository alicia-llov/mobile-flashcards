import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { receiveData } from '../actions/index'
import { getData } from '../utils/api'
import styles from '../utils/styles'
import { loader } from './Loader'
import { ScrollView } from 'react-native-gesture-handler'

class DeckList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      waiting: true
    }
  }

  componentDidMount () {
    getData()
      .then((data) => this.props.dispatch(receiveData(data)))
      .then(() => this.setState(() => ({ waiting: false })))
  }

  render () {
    const { waiting } = this.state
    const { data } = this.props

    if (Object.keys(data).length === 0) {
      return (
        <View style={styles.container}>
          <Text style={styles.cardTitle}>You have no decks! Add a new deck and start playing</Text>
          <TouchableOpacity style={[styles.actionButton, styles.actionButtonDark]} onPress={() => this.props.navigation.navigate('NewDeck')}>
            <Text style={styles.actionButtonLightText}>Add Deck</Text>
        </TouchableOpacity>
        </View>
      )
    }

    return (
      <View>
        {waiting
          ? loader()
          : <ScrollView contentContainerStyle={styles.scrollContainer}>
            {Object.values(data).map((entry) => (
              <TouchableOpacity key={entry.title} style={styles.deckContainer} onPress={() => this.props.navigation.navigate('DeckDetail', { deckTitle: entry.title })}>
                <Text style={styles.cardTitle}>{entry.title}</Text>
                <Text style={styles.cardSubtitle}>{entry.questions.length} cards</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>}
      </View>

    )
  }
}

function mapStateToProps (data) {
  return {
    data
  }
}
export default connect(mapStateToProps)(DeckList)
