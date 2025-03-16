import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <TextInput
      placeholder='Search for note...'
      style={styles.search}
      />
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
  container:{
    display:'flex',
    justifyContent:"center",
    alignItems:"center",
  },
   search:{
  //   display:'flex',
  //   justifyContent:"center",
  //   alignItems:"center",
  backgroundColor: "rgb(193, 193, 193)",
  width:"90%",
  height:50,
  outline:"none",
  borderRadius:"20px",
  padding:"1%"
   }
})