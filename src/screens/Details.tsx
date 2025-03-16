import { useRoute } from '@react-navigation/native';
import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

interface DetailsProps {

}

const Details = ({navigation}) => {
    const Route = useRoute()
    const {note, setNotes} = Route.params
  return (
    <View style={styles.container}>
      <Text style={styles.head}>{note.title}</Text>
      <Text style={styles.content}>{note.content}</Text>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    display:"flex",
    margin:15
  },
  content:{
        
  },
  head:{
        fontSize:24,
        fontWeight:'bold'
  }
});
