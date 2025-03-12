import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import SearchBar from './SearchBar'
import { Notes } from './model'

const NotesScreen = () => {
    const [Notes , setNotes] = useState<Notes[]>([])
  return (
    <View>
      <Text style={styles.h2}>Notes</Text>
      <SearchBar/>
    </View>
  )
}

export default NotesScreen

const styles = StyleSheet.create({
h2: {
    fontSize: 24,
    fontWeight: "bold",
    margin:10
}
})