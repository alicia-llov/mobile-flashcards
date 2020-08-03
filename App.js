
import 'react-native-gesture-handler'
import React, { Component } from 'react'
import { Platform } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers/index'

import DeckList from './components/DeckList'
import AddDeck from './components/AddDeck'
import DeckDetail from './components/DeckDetail'
import AddQuestion from './components/AddQuestion'
import Quiz from './components/Quiz'
import { setLocalNotification } from './utils/helpers'

const Tab = Platform.OS === 'ios' ? createBottomTabNavigator() : createMaterialTopTabNavigator()

const Stack = createStackNavigator()

function TabNavigation () {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#EF5B5B'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }}
    >
      <Tab.Screen name='Decks' component={DeckList} />
      <Tab.Screen name='NewDeck' component={AddDeck} />
    </Tab.Navigator>
  )
}

function MainNavigator () {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={TabNavigation} />
      <Stack.Screen name='DeckDetail' component={DeckDetail} />
      <Stack.Screen name='AddQuestion' component={AddQuestion} />
      <Stack.Screen name='Quiz' component={Quiz} />
    </Stack.Navigator>
  )
}

class App extends Component {
  componentDidMount () {
    setLocalNotification()
  }
  
  render () {
    return (
    <NavigationContainer>
      <Provider store={createStore(reducer)}>
        <MainNavigator />
      </Provider>
    </NavigationContainer>
    )
  }
}


export default App;
