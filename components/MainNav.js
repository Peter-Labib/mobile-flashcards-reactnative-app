import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import BottomNav from './BottomNav'
import DeckDetail from './DeckDetail'
import AddCard from './AddCard'
import Quiz from './Quiz'

const Stack = createStackNavigator()
const MainNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Home'
        component={BottomNav}
        options={{
          animationEnabled: true,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='DeckDetail'
        component={DeckDetail}
        options={{
          animationEnabled: true,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='AddCard'
        component={AddCard}
        options={{
          animationEnabled: true,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='Quiz'
        component={Quiz}
        options={{
          animationEnabled: true,
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  )
}

export default MainNav
