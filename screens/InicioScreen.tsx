import { Button, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import * as ImagePicker from 'expo-image-picker';
import LoginScreen from './LoginScreen';


export default function InicioScreen({navigation}:any) {

    const [imagen, setImagen] = useState('https://play-lh.googleusercontent.com/OaIT8xfsKeSJhU9EddLgX0p_fmTlOPJC9jlVE1LJSGOvC16TQ_6vz1wXQzhOIXXTuqU=w240-h480-rw ');
 const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImagen(result.assets[0].uri);
    }
  };
  return (

    <ImageBackground source={require('../assets/walp.jpg')}style={styles.container}
    >
    <View>
      <Text style={styles.title}>JONATHAN BARROS</Text>
    </View>
    <Button title= 'LOGIN' onPress={()=>navigation.navigate('Login')}/>
<Text></Text>
    <Button title='REGISTRO' onPress={()=>navigation.navigate('Registro')}/>
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
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
      }
})