import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { connect } from 'react-redux'
import TextBtn from './TextBtn'
import GoBackBtn from './GoBackBtn'
import { gray, white, textGray, black } from '../utils/colors'
import Deck from './Deck'

const DeckDetail = (props) => {
  const { deck, navigation } = props
  return (
    <React.Fragment>
      <GoBackBtn style={styles.navContainer}>{deck.title}</GoBackBtn>
      <View style={styles.container}>
        <Deck id={deck.title} />
        <View>
          <TextBtn
            btnStyle={{ backgroundColor: white, borderColor: textGray }}
            txtStyle={{ color: black }}
            onPress={() =>
              navigation.navigate('AddCard', { title: deck.title })
            }
          >
            Add Card
          </TextBtn>
          <TextBtn
            onPress={() => navigation.navigate('Quiz', { title: deck.title })}
          >
            Start Quiz
          </TextBtn>
        </View>
      </View>
    </React.Fragment>
  )
}

const mapStateToProps = (state, props) => {
  const { title } = props.route.params
  const deck = state[title]

  return {
    deck,
  }
}

export default connect(mapStateToProps)(DeckDetail)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    padding: 16,
    backgroundColor: gray,
  },
})
