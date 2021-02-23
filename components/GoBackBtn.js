import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { withNavigation } from '@react-navigation/compat'
import TextBtn from './TextBtn'
import { black } from '../utils/colors'

const GoBackBtn = ({ children, navigation }) => {
  return (
    <View style={styles.navContainer}>
      <TextBtn onPress={() => navigation.goBack()}>
        <FontAwesome name='arrow-left' size={20} />
        <Text style={styles.navText}>{children ? children : 'Go Back'}</Text>
      </TextBtn>
    </View>
  )
}

export default withNavigation(GoBackBtn)

const styles = StyleSheet.create({
  navContainer: {
    height: 50,
    backgroundColor: black,
  },
  navText: {
    marginLeft: 20,
  },
})
