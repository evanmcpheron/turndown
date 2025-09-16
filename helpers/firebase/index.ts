import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getApps, initializeApp } from "firebase/app"; // Assuming you've already initialized your Firebase app
import { getReactNativePersistence, initializeAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyACUcoqmKQYJ486XSHUjpuIeNFbxhO4mZ8",
  authDomain: "turndown-6c530.firebaseapp.com",
  databaseURL: "https://turndown-6c530-default-rtdb.firebaseio.com",
  projectId: "turndown-6c530",
  storageBucket: "turndown-6c530.firebasestorage.app",
  messagingSenderId: "1021815359995",
  appId: "1:1021815359995:web:275c333c43c79f9e46235e",
  measurementId: "G-NDW9X3LF4F",
};

const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
