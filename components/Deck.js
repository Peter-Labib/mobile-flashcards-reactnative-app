import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { gray, textGray } from '../utils/colors'

const Deck = (props) => {
  const { deck } = props
  
  return (
    <View style={styles.deckContainer}>
      <View>
        <Text style={styles.deckText}>{deck.title}</Text>
      </View>
      <View>
        <Text style={styles.cardText}>{deck.questions.length} cards</Text>
      </View>
    </View>
  )
}

const mapStateToProps = (state, { id }) => {
  const deck = state[id]

  return {
    deck,
  }
}

export default connect(mapStateToProps)(Deck)

const styles = StyleSheet.create({
  deckContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexBasis: 120,
    minHeight: 120,
    backgroundColor: gray,
    marginBottom: 10,
  },
  deckText: {
    fontSize: 28,
  },
  cardText: {
    fontSize: 18,
    color: textGray,
  },
})
