import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
} from 'react-native'
import { connect } from 'react-redux'
import { gray, textGray, white } from '../utils/colors'
import { createDeck } from '../store/actions/decks'
import { addDeckToStorage } from '../utils/api'
import TextBtn from './TextBtn'
import GoBackBtn from './GoBackBtn'

const CreateDeck = (props) => {
  const { navigation, createDeckHandler } = props
  const [title, setTitle] = useState('')

  const titleHandler = (title) => {
    setTitle(title)
  }

  const submitHandler = () => {
    createDeckHandler(title)
    addDeckToStorage(title)
    setTitle('')
    navigation.goBack()
  }

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior='heigth'>
      <GoBackBtn />
      <View style={styles.container}>
        <View style={{ height: 60 }} />
        <View style={styles.block}>
          <Text style={styles.title}>What is the title of your new deck?</Text>
        </View>
        <View style={[styles.block]}>
          <TextInput
            style={styles.input}
            value={title}
            onChangeText={titleHandler}
            placeholder='Deck Title'
          />
        </View>
        <TextBtn onPress={submitHandler} disabled={title === ''}>
          Create Deck
        </TextBtn>
      </View>
    </KeyboardAvoidingView>
  )
}

const mapDispatchToProps = (dispatch) => ({
  createDeckHandler: (title) => dispatch(createDeck(title)),
})

export default connect(null, mapDispatchToProps)(CreateDeck)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: gray,
  },
  block: {
    marginBottom: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 32,
  },
  input: {
    borderWidth: 1,
    borderColor: textGray,
    backgroundColor: white,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5,
    fontSize: 20,
    height: 40,
    marginBottom: 20,
  },
})
