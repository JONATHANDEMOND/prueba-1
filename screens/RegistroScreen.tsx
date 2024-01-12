import { Alert, Button, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState,useEffect } from 'react'
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { auth } from '../config/Config'
import { getDatabase, onValue, ref, remove, set, update } from 'firebase/database';
import { db } from '../config/Config';
export default function RegistroScreen({ navigation }: any) {
  const [correo, setCorreo] = useState("");
  const [cortrasenia, setContrasenia] = useState("");
  const [nikc, setNikc] = useState("");
  const [edad, setEdad] = useState("");
 
 

  function guardar(nick:string, edad:string) {
    set(ref(db, 'usuarios/' + nick), {
     
      age: edad,
    });
    Alert.alert('Mensaje', 'Datos Guardados');
  }



  function registrto() {
    createUserWithEmailAndPassword(auth, correo, cortrasenia)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('Registro exitoso');
        navigation.navigate('TabScreen');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorCode);
        switch (errorCode) {
          case 'auth/invalid/credential':
            Alert.alert('Error', 'Las Credenciales son Incorrectas');
            break;
          case 'auth/missing-password':
            Alert.alert('Autenticación', 'Ingrese la contraseña');
            break;
          case 'auth/missing-email':
            Alert.alert('Autenticación', 'Ingrese el Correo');
            break;
          default:
            Alert.alert('Error', 'Contacte con el administrador');
            break;
        }
      });
  }
  

  return (
    <ImageBackground source={require('../assets/walp.jpg')} style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Registro Usuario</Text>
        <TextInput
          placeholder='Ingrese Correo'
          onChangeText={(texto) => setCorreo(texto)}
          keyboardType='email-address'
          autoCapitalize='none'
          style={styles.input}
        />
           <TextInput
          placeholder='Ingrese Nick'
          onChangeText={(texto) => setNikc(texto)}
          keyboardType='email-address'
          autoCapitalize='none'
          style={styles.input}
        />
           <TextInput
          placeholder='Ingrese Edad'
          onChangeText={(texto) => setEdad(texto)}
          keyboardType='email-address'
          autoCapitalize='none'
          style={styles.input}
        />
        
        
        <TextInput
          placeholder='Ingrese Contraseña'
          onChangeText={(texto) => setContrasenia(texto)}
          secureTextEntry
          style={styles.input}
        />
        
        <Button title='Registrarse' onPress={() => registrto()} />
        <Text></Text>
        <Button title="GUARDAR" onPress={() => guardar(nikc, edad)} color={'green'} />
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: '80%',
  },
  title: {
    fontSize: 20,
    color: 'white',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    paddingHorizontal: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
});
