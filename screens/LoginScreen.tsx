import { Alert, Button, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../config/Config'



export default function LoginScreen({navigation}:any) {

    const [correo, setCorreo] = useState("");
  const [cortrasenia, setContrasenia] = useState("");
  function login() {
    signInWithEmailAndPassword(auth, correo, cortrasenia)
      .then((userCredential) => {
        const user = userCredential.user;
        navigation.navigate('TabScreen');
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        switch (errorCode) {
          case 'auth/invalid/credential':
            Alert.alert('Error', 'Las credenciales son incorrectas');
            break;
          case 'auth/missing-password':
            Alert.alert('Error', 'La contraseña no se ha enviado');
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
        <Text style={styles.title}>Login</Text>
        <TextInput
          placeholder='Ingrese Correo'
          onChangeText={(texto) => setCorreo(texto)}
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
        <Button title='Ingresar' onPress={() => login()} />
        <Text></Text>
        <Button title= 'REGISTRARSE' onPress={()=>navigation.navigate('Registro')}/>
      </View>
    </ImageBackground>
    
  )
}

const styles = StyleSheet.create({
    content: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        width: '80%',
      },
      container: {
        flex: 1,
        resizeMode: 'cover',
        alignItems: 'center',
        justifyContent: 'center',
      },
      input: {
        width: '100%',
        height: 50,
        color: 'white',
        fontSize: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        paddingHorizontal: 10,
        marginBottom: 15,
        borderRadius: 5,
      },
      registerText: {
        color: 'white',
        fontSize: 16,
        marginTop: 15,
      },
      title: {
        fontSize: 30,
        color: 'white',
        marginBottom: 20,
      },


})