import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Notes } from './model';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';

interface Props {
note:Notes
notes:Notes[]
setNotes:React.Dispatch<React.SetStateAction<Notes[]>>
}

const SingleNote = ({note, setNotes, notes}:Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.main}>{note.title}</Text>
      <Text>{note.content}</Text>
      <View style={styles.icon}>
       <Text style={styles.icon}><AiFillDelete 
       color='rgb(197, 197, 4)' size={30}/></Text>
        <Text style={styles.icon}><AiFillEdit
       color='rgb(197, 197, 4)' size={30}/></Text>
       </View>
    </View>
  );
};

export default SingleNote;

const styles = StyleSheet.create({
  container: {
    // justifyContent: "center", 
    backgroundColor: "rgb(193, 193, 193)",
    padding:5,
    margin: 15,
    width: "90%", 
    height:100,
    alignSelf: "center",
    borderRadius:10,
    cursor:"pointer",
    overflow:"hidden"
  },
  main:{
    fontSize:30,
    fontWeight:"bold"
  },
  icon:{
    flexDirection: "row", // Makes icons align in a row
    marginTop: 10,
    justifyContent:"flex-end"
  }
});
