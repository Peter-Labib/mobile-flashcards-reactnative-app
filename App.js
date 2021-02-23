// import { StatusBar } from 'expo-status-bar'
import 'react-native-gesture-handler'
import React, { useEffect } from 'react'
import { StyleSheet, View, StatusBar } from 'react-native'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import Constants from 'expo-constants'
import reducer from './store/reducers/decks'
import thunk from 'redux-thunk'
import { black } from './utils/colors'
import MainNav from './components/MainNav'
import { setLocalNotification, clearLocalNotification } from './utils/helpers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))
const FstatusBar = ({ backgroundColor, ...props }) => {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

export default function App() {
  useEffect(() => {
    clearLocalNotification().then(setLocalNotification)
  }, [clearLocalNotification, setLocalNotification])

  return (
    <Provider store={store}>
      <NavigationContainer>
        <FstatusBar backgroundColor={black} barStyle='light-content' />
        <View style={styles.container}>
          <MainNav />
        </View>
      </NavigationContainer>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
