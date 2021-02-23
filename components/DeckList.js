import React, { useEffect } from 'react'
import { StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { gray } from '../utils/colors'
import Deck from './Deck'
import { getInitialData } from '../store/actions/decks'

const DeckList = (props) => {
  const { decks, navigation, getData } = props

  useEffect(() => {
    getData()
  }, [getData])

  return (
    <ScrollView style={styles.container}>
      {decks.map((deck) => {
          return (
            <TouchableOpacity
              key={deck.title}
              onPress={() =>
                navigation.navigate('DeckDetail', { title: deck.title })
              }
            >
              <Deck id={deck.title} />
            </TouchableOpacity>
          )
        })}
      <View style={{ marginBottom: 30 }} />
    </ScrollView>
  )
}

const mapStateToProps = (state) => {
  return {
    decks:  state?Object.values(state):[] ,
  }
}

const mapDispatchToProps = (dispatch) => ({
  getData: () => dispatch(getInitialData()),
})

export default connect(mapStateToProps, mapDispatchToProps)(DeckList)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: gray,
  },
})
