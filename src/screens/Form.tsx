import React, { useState } from 'react';
import { Text, View, StyleSheet, Modal, TouchableOpacity, TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import e from 'cors';

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  openResponsive: boolean;
  setOpenResponsive: React.Dispatch<React.SetStateAction<boolean>>;
  title:string
  setTitle: React.Dispatch<React.SetStateAction<string>>
  content:string
  setContent:React.Dispatch<React.SetStateAction<string>>
  handleAdd:(e: React.FormEvent) => void
}


const FormComponent = ({ open, setOpen, openResponsive, setOpenResponsive,title,setTitle,content,setContent, handleAdd }: Props) => {

  return (
    <View style={styles.container}>
      {/* Responsive Modal */}
      <TouchableOpacity onPress={() => setOpenResponsive(true)} style={styles.span}>
      <MaterialIcons name="add" size={25} color="rgb(197, 197, 4)" />
      </TouchableOpacity>
      <Modal visible={openResponsive} transparent >
        <View style={styles.modalContainer}>
          <View style={[styles.modalContent, styles.responsiveModal]}>
          <Text style={styles.label}>Title</Text>
         <TextInput
          style={styles.input}
          placeholder="Enter title"
          value={title}
          onChangeText={setTitle}
         />

        <Text style={styles.label}>Content</Text>
        <TextInput
        style={[styles.input, styles.textarea]}
        placeholder="Enter content"
        value={content}
        onChangeText={setContent}
        multiline
        />
           <TouchableOpacity style={styles.buttonsub} onPress={(e:React.FormEvent)=>handleAdd(e)}>
            <Text style={styles.buttonText2}>Submit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => setOpenResponsive(false)}>
              <Text style={styles.buttonText}>Close</Text>
            </TouchableOpacity> 
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default FormComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  button: {
    backgroundColor: 'rgb(197, 197, 4)',
    padding: 12,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  responsiveModal: {
    width: '90%',
  },
  span:{
    cursor:"pointer",
    width:"5%",
    position: 'absolute',
    bottom: -200, 
    right: 20,  
    padding: 15,
    borderRadius: 50,
    elevation: 5, 
   },
   label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    marginBottom: 15,
  },
  textarea: {
    height: 100,
    textAlignVertical: 'top',
  },
  buttonsub: {
    backgroundColor: 'rgb(197, 197, 4)',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText2: {
    color: 'white',
    fontSize: 12.8,
    fontWeight: 'bold',
  },
});
