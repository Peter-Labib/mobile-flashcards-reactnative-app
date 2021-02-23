import React, { useState } from 'react'
import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
import { red, darkGray, green } from '../utils/colors'
import TextBtn from './TextBtn'
import GoBackBtn from './GoBackBtn'

const Quiz = (props) => {
  const { deck } = props
  const [deckDetails, setDeckDetails] = useState({
    count: 0,
    totalCorrect: 0,
    showAnswer: false,
  })

  const answerHandler = (answer) => {
    if (answer == 'reset') {
      return setDeckDetails({
        count: 0,
        totalCorrect: 0,
        showAnswer: false,
      })
    } else if (answer == 'show Answer') {
      return setDeckDetails({ ...deckDetails, showAnswer: true })
    } else if (answer == 'hide Answer') {
      return setDeckDetails({ ...deckDetails, showAnswer: false })
    } else {
      return true
    }
  }

  const deckDetailsHandler = (answer) => {
    return setDeckDetails({
      ...deckDetails,
      count: deckDetails.count + 1,
      totalCorrect: answer
        ? deckDetails.totalCorrect + 1
        : deckDetails.totalCorrect,
      showAnswer: false,
    })
  }

  const quizRender = () => {
    const deckCards = deck.questions
    const { count } = deckDetails

    return (
      <View>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 18,
            color: darkGray,
            marginTop: 39,
          }}
        >
          ({count + 1} / {deckCards.length})
        </Text>
        <Text style={styles.Question}>{deckCards[count].question}</Text>
        {deckDetails.showAnswer ? (
          <Text style={styles.answerTxt}>{deckCards[count].answer}</Text>
        ) : null}

        {deckDetails.showAnswer ? (
          <TextBtn
            btnStyle={styles.hideAnswer}
            onPress={() => answerHandler('hide Answer')}
          >
            hide Answer
          </TextBtn>
        ) : (
          <TextBtn
            btnStyle={styles.showAnswer}
            onPress={() => answerHandler('show Answer')}
          >
            show Answer
          </TextBtn>
        )}
        <View
          style={{
            flexDirection: 'row',
            marginTop: 15,
            justifyContent: 'space-around',
          }}
        >
          <TextBtn
            btnStyle={styles.correctBtn}
            onPress={() => deckDetailsHandler(true)}
          >
            Correct
          </TextBtn>
          <TextBtn
            btnStyle={styles.incorrectBtn}
            onPress={() => deckDetailsHandler(false)}
          >
            Incorrect
          </TextBtn>
        </View>
      </View>
    )
  }

  const resultsRender = () => {
    const { count, totalCorrect } = deckDetails
    return (
      <View>
        <Text style={[styles.Question, { marginTop: 65 }]}>The End!</Text>
        <Text style={{ fontSize: 19, textAlign: 'center' }}>You Result </Text>
        <Text style={styles.result}>{`${totalCorrect} out of ${count}`}</Text>
        <View style={{ marginTop: 15 }}>
          <TextBtn
            btnStyle={styles.reset}
            onPress={() => answerHandler('reset')}
          >
            Reset
          </TextBtn>
          <TextBtn
            btnStyle={styles.GoBack}
            onPress={() => props.navigation.goBack()}
          >
            Go Back
          </TextBtn>
        </View>
      </View>
    )
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior={'height'}>
      <View style={styles.container}>
        <GoBackBtn />
        <View>
          {deckDetails.count < deck.questions.length
            ? quizRender()
            : resultsRender()}
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  answerTxt: {
    textAlign: 'center',
    fontSize: 25,
    margin: 10,
  },
  Question: {
    textAlign: 'center',
    marginTop: 6,
    fontSize: 32,
    fontWeight: 'bold',
    marginRight: 10,
  },
  correctBtn: {
    backgroundColor: green,
    width: 100,
  },
  incorrectBtn: {
    backgroundColor: red,
    width: 100,
  },
  result: {
    textAlign: 'center',
    fontSize: 21,
    fontWeight: 'bold',
  },
})

const mapStateToProps = (state, props) => {
  const { title } = props.route.params
  const deck = state[title]

  return {
    deck,
  }
}

export default connect(mapStateToProps)(Quiz)
