import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import api from './src/services/api';

export default function App() {
  const [users, setUsers] = useState([]);

  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');

  async function handleCreateUser() {
    api.post('users', {
      name,
      cpf,
      dateOfBirth,
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de usuário</Text>
      <View style={styles.inputContainer}> 
        <TextInput 
          style={styles.input} 
          value={name}
          onChangeText={text => setName(text)}
          placeholder="Nome"
          clearButtonMode="always"
        /> 
        <TextInput 
          style={styles.input}  
          value={cpf}
          onChangeText={text => setCpf(text)}
          placeholder="CPF"
          clearButtonMode="always"
        />
        <TextInput 
          style={styles.input}  
          value={dateOfBirth}
          onChangeText={text => setDateOfBirth(text)}
          placeholder="Data de nascimento"
          keyboardType={'numeric'}
          clearButtonMode="always"
        />
        <TouchableOpacity onPress={handleCreateUser} style={styles.button}> 
          <Text style={styles.buttonText}>Salvar</Text> 
        </TouchableOpacity> 
      </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D93600',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 50,
  },
  inputContainer: {
    flex: 1,
    marginTop: 30,
    width: '90%',
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignItems: 'stretch',
    backgroundColor: '#fff'
  },
  input: {
    marginTop: 10,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 24,
    fontSize: 16,
    alignItems: 'stretch'
  },
  button: {
    marginTop: 10,
    height: 60,
    backgroundColor: 'blue',
    borderRadius: 10,
    paddingHorizontal: 24,
    fontSize: 16,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 20,
    shadowOpacity: 20,
    shadowColor: '#ccc',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  }
});
