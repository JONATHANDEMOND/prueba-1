import {getDatabase} from 'firebase/database'
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCzOSjhalKq7nyzvbG9ET6HmouTLmqEk3A",
  authDomain: "prueba-jb-b2ed9.firebaseapp.com",
  projectId: "prueba-jb-b2ed9",
  storageBucket: "prueba-jb-b2ed9.appspot.com",
  messagingSenderId: "568614362803",
  appId: "1:568614362803:web:40d3168c625d8b5308dac6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const db= getDatabase(app)
export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  });
