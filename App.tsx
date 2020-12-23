import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { TextInputMask } from "react-native-masked-text";
import DatePicker from 'react-native-datepicker';

import api from './src/services/api';

export default function App() {

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
    <SafeAreaView style={styles.safeAreaView}>
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de usuário</Text>
      <View style={styles.formContainer}> 
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Nome:</Text>
          <TextInput 
            style={styles.input} 
            value={name}
            onChangeText={text => setName(text)}
            placeholder="Insira o nome..."
            clearButtonMode="always"
            /> 
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>CPF.:</Text>
          <TextInputMask
            style={styles.input}
            type={'cpf'}
            value={cpf}
            onChangeText={text => setCpf(text)}
            placeholder="Insira o CPF..."
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Data de aniversário:</Text>
          <DatePicker
            style={styles.dateSelect}
            date={dateOfBirth}
            format="DD-MM-YYYY"
            minDate="01-01-1700"
            maxDate="31-12-2020"
            onDateChange={setDateOfBirth}
            androidMode="spinner"
          />
        </View>

        <TouchableOpacity onPress={handleCreateUser} style={styles.button}> 
          <Text style={styles.buttonText}>Salvar</Text> 
        </TouchableOpacity> 
      </View>

      <StatusBar style="light" />
    </View>
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: '#D81159',
  },

  container: {
    alignItems: 'center',
  },

  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 50,
    textTransform: 'uppercase',
  },

  formContainer: {
    flex: 1,
    marginTop: 30,
    marginBottom: 30,
    width: '90%',
    padding: 20,
    borderRadius: 10,
    alignItems: 'stretch',
    backgroundColor: '#FFFCF2',
  },

  inputContainer: {
    display: 'flex',
    marginTop: 15,
  },
  
  label: {
    paddingHorizontal: 14,
    fontSize: 16,
    color: '#32264D',
  },

  input: {
    marginTop: 10,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 24,
    fontSize: 16,
    alignItems: 'stretch',
    borderStyle: 'solid',
    borderWidth: 1,
    color: '#32264D',
  },

  dateSelect: {
    marginTop: 10,
    width: '100%',
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 24,
    fontSize: 16,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'solid',
    borderWidth: 1,
  },

  button: {
    width: '100%',
    height: 60,
    backgroundColor: '#11D88F',
    borderRadius: 10,
    paddingHorizontal: 24,
    fontSize: 16,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 20,
    shadowOpacity: 20,
    shadowColor: '#0EB87A',
    marginTop: 50,
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  }
});
