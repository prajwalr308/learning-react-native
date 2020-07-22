import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View ,TextInput } from 'react-native';

export default function App() {
  const [name,setName]=useState('john');
  const [age,setAge]=useState('18');
  function newName(val)
 {
    setName(val)
  }
  function newAge(val)
  {
     setAge(val)
   }
  return (
    <View style={styles.container}>
      <Text>Enter Name: </Text>
     
      <TextInput
      placeholder='e.g. john doe' 
      style={styles.input}
      onChangeText={newName}
      />
      <Text>Enter age: </Text>
       <TextInput
      placeholder='e.g. 18' 
      style={styles.input}
      onChangeText={newName}
      />
      <Text>name:{name},age:{age}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    borderWidth:1,
    borderColor:'blue',
    padding:8,
    margin:10,
    width:200

  }
});
