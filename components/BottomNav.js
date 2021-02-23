import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons'
import { black, darkGray, white } from '../utils/colors'
import DeckList from './DeckList'
import CreateDeck from './CreateDeck'

const Tab = createBottomTabNavigator()

const BottomNav = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
          style:{ backgroundColor: black },
        activeTintColor: white,
        inactiveTintColor: darkGray,
      }}
    >
      <Tab.Screen
        options={{
          tabBarLabel: 'Home',
          animationEnabled: true,
          tabBarIcon: ({ color }) => (
            <Feather name='home' color={color} size={25} />
          ),
        }}
        name='DeckList'
        component={DeckList}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Add Deck',
          animationEnabled: true,
          tabBarIcon: ({ color }) => (
            <Feather name='folder-plus' color={color} size={24} />
          ),
        }}
        name='CreateDeck'
        component={CreateDeck}
      />
    </Tab.Navigator>
  )
}

export default BottomNav
