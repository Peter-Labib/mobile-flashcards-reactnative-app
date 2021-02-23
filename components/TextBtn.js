import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { black, white, gray, darkGray } from '../utils/colors'

const TextBtn = (props) => {
  const {
    children,
    onPress,
    btnStyle = {},
    txtStyle = {},
    disabled = false,
  } = props

  const disabledBtn = disabled ? styles.disabledButtton : {}
  const disabledBtnTxt = disabled ? styles.disabledBtnText : {}

  return (
    <View style={styles.btnContainer}>
      <TouchableOpacity
        style={[styles.btn, btnStyle, disabledBtn]}
        onPress={onPress}
        disabled={disabled}
      >
        <Text style={[styles.btnText, txtStyle, disabledBtnTxt]}>
          {children}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  btnContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  btn: {
    width: 200,
    height: 50,
    backgroundColor: black,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: black,
  },
  disabledButtton: {
    backgroundColor: gray,
    borderColor: darkGray,
  },
  btnText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: white,
  },
  disabledBtnText: {
    color: darkGray,
  },
})

export default TextBtn
