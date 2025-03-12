import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';
import { Notes } from './model';
import SingleNote from './SingleNote';

interface Props {
  notes: Notes[];
  setNotes: React.Dispatch<React.SetStateAction<Notes[]>>;
}

const TodoList: React.FC<Props> = ({ notes, setNotes }: Props) => {
  return (
    <View>
      <FlatList
        data={notes}
        keyExtractor={(note) => note.id.toString()}
        renderItem={({ item }) => ( 
          <SingleNote note={item} notes={notes} setNotes={setNotes} />
        )}
      />
    </View>
  );
};

export default TodoList;

const styles = StyleSheet.create({});
