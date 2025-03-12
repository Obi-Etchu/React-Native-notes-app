import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import SearchBar from './SearchBar'
import { Notes } from './model'
import TodoList from './NoteList'
import FormComponent from './Form'

const NotesScreen:React.FC = () => {
    const [notes, setNotes] = useState<Notes[]>([])
    const [note, setNote] = useState<string>("")
    const [open, setOpen] = useState<boolean>(false);
    const [openResponsive, setOpenResponsive] = useState<boolean>(false);
    const [title, setTitle] = useState<string>("")
    const [content, setContent] = useState<string>("")

    const handleAdd = (e: React.FormEvent) => {
      e.preventDefault();
      if (title && content) {
        setNotes([...notes, { id: Date.now(), title, content }]);
        setOpenResponsive(false)
        setTitle('');
        setContent('');
      }
    };
  return (
    <View>
      <Text style={styles.h2}>Notes</Text>
      <SearchBar/>
      <TodoList notes={notes} setNotes={setNotes}/>
      <FormComponent open={open} setOpen={setOpen} 
      openResponsive={openResponsive} 
      setOpenResponsive={setOpenResponsive}
      title={title} setTitle={setTitle} 
      content={content} setContent={setContent}
      handleAdd={handleAdd}
      />
    </View>
  )
}

export default NotesScreen

const styles = StyleSheet.create({
h2: {
    fontSize: 24,
    fontWeight: "bold",
    margin:10,
    color:" rgb(197, 197, 4)"
},
})