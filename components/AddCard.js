import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native'
import { createCard } from '../store/actions/decks'
import {addCardToStorage} from '../utils/api'
import { connect } from 'react-redux'
import { gray } from '../utils/colors'
import TextBtn from './TextBtn'
import GoBackBtn from './GoBackBtn'

const AddCard = (props) => {
  const { createCardHandler, navigation } = props
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')
  const {title} =  props.route.params

  const questionHandler = (question) => {
    setQuestion(question)
  }
  const answerHandler = (answer) => {
    setAnswer(answer)
  }
  const submitHandler = () => {
    const card = {
      question,
      answer,
    }
    createCardHandler(title, card)
    addCardToStorage(title, card)
    navigation.goBack()
  }

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior='heigth'>
      <GoBackBtn />
      <View style={styles.container}>
        <View>
          <View style={styles.block}>
            <Text style={styles.title}>Add a question</Text>
          </View>
          <View style={[styles.block]}>
            <TextInput
              style={styles.input}
              value={question}
              onChangeText={questionHandler}
              placeholder='Question'
            />
          </View>
          <View style={[styles.block]}>
            <TextInput
              style={styles.input}
              value={answer}
              onChangeText={answerHandler}
              placeholder='Answer'
            />
          </View>
          <TextBtn
            onPress={submitHandler}
            disabled={question === '' || answer === ''}
          >
            Submit
          </TextBtn>
        </View>
        <View style={{ height: '30%' }} />
      </View>
    </KeyboardAvoidingView>
  )
}

const mapDispatchToProps = (dispatch) => ({
  createCardHandler: (id, card) => dispatch(createCard(id, card)),
})

export default connect(null, mapDispatchToProps)(AddCard)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: gray,
    justifyContent: 'space-around',
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
    borderColor: 'gray',
    backgroundColor: '#fff',
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5,
    fontSize: 20,
    height: 40,
  },
})
