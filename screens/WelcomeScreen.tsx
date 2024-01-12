import { Button, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { getAuth, signOut } from "firebase/auth";
import * as ImagePicker from 'expo-image-picker';

export default function WelcomeScreen({navigation}:any) {

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





function salir(){
 

const auth = getAuth();
signOut(auth).then(() => {
 navigation.navigate('StackScreen')
}).catch((error) => {
  // An error happened.
});
}

  return (
    <ImageBackground source={require('../assets/walp.jpg')} style={styles.container}>
    <View>
      <Text>WelcomeScreen</Text>
      <Button title='LogOut' onPress={() => salir()} />
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

})