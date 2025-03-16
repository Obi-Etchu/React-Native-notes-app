import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Button} from 'react-native';
import { Notes } from './model';
import { MaterialIcons } from '@expo/vector-icons'; // Expo icons
import { useNavigation } from '@react-navigation/native';

interface Props {
  note: Notes;
  notes: Notes[];
  setNotes: React.Dispatch<React.SetStateAction<Notes[]>>;
}

const SingleNote = ({ note, setNotes, notes }: Props) => {
  
  const [isEditing, setIsEditing] = React.useState(false);
  const [editedTitle, setEditedTitle] = React.useState(note.title);
  const [editedContent, setEditedContent] = React.useState(note.content);
  const navigation = useNavigation();

  const TruncatedText = ({ text, wordLimit = 10, visibleWords = 6 }: { text: string, wordLimit?: number, visibleWords?: number }) => {
    const words = text.split(" ");
    const truncatedText = words.length > wordLimit ? words.slice(0, visibleWords).join(" ") + "..." : text;
    return <Text>{truncatedText}</Text>;
  };

  // Delete function
  const handleDelete = (id: number) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  // Save edited note
  const handleSave = () => {
    setNotes(
      notes.map((n) => (n.id === note.id ? { ...n, title: editedTitle, content: editedContent } : n))
    );
    setIsEditing(false);
  };

  return (
    <View style={styles.container}>
      {isEditing ? (
        <>
          <TextInput
            style={styles.input}
            value={editedTitle}
            onChangeText={setEditedTitle}
            placeholder="Edit title"
          />
          <TextInput
            style={styles.input}
            value={editedContent}
            onChangeText={setEditedContent}
            placeholder="Edit content"
            multiline
          />
        </>
      ) : (
        <TouchableOpacity  onPress={()=>navigation.navigate('Details',{
            note,
            setNotes,
        })}>
          <Text style={styles.main}>{note.title}</Text>
          <TruncatedText text ={note.content}/>
          {/* <Text>{note.content}</Text> */}
        </TouchableOpacity>
      )}

      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => handleDelete(note.id)}>
          <MaterialIcons name="delete" size={25} color="red" />
        </TouchableOpacity>
        {isEditing ? (
          <TouchableOpacity onPress={handleSave}>
            <MaterialIcons name="save" size={25} color="green" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => setIsEditing(true)}>
            <MaterialIcons name="edit" size={25} color="rgb(197, 197, 4)" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default SingleNote;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(193, 193, 193)",
    padding: 10,
    margin: 15,
    width: "90%",
    height: "auto",
    alignSelf: "center",
    borderRadius: 10,
  },
  main: {
    fontSize: 20,
    fontWeight: "bold",
  },
  input: {
    borderBottomWidth: 1,
    borderColor: "#333",
    fontSize: 18,
    marginBottom: 5,
    padding: 5,
  },
  iconContainer: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "flex-end",
    gap: 10,
  },
});