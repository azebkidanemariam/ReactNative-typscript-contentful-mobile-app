/*import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { ref, getDatabase } from "firebase/database";
import { useObject } from "react-firebase-hooks/database";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { client } from "./contentful-client";
import { useEffect } from "react";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
/*const firebaseConfig = {
  apiKey: "AIzaSyB5bSx59pED01zlC3av44roUB57lcfdzfw",
  authDomain: "contentful-test-4e4c4.firebaseapp.com",
  databaseURL:
    "https://contentful-test-4e4c4-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "contentful-test-4e4c4",
  storageBucket: "contentful-test-4e4c4.appspot.com",
  messagingSenderId: "921792077290",
  appId: "1:921792077290:web:9423629071dee86ee86693",
  measurementId: "G-0YJZLXNPK0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Tip: Find more about JS/TS SDKs at https://docs.kontent.ai/javascript




client
.getEntries({
  content_type:'article'
})
.then((entries:any) =>{
  console.log(entries.items[0].fields.body)
})
export default function App() {
 
  /*const [snapshot, loading, error] = useObject(ref(database, "users"));
  useEffect(() => {
    // Update the document title using the browser API
    if (snapshot) {
      console.log(snapshot?.val());
    }
  }, [snapshot]);
  return (
    <View style={styles.container}>
      <Text>hello world</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "teal",
    alignItems: "center",
    justifyContent: "center",
    fontSize:60,
  },
});*/
import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native'
import ContentContextProvider from './Context/contentfulContext'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { BottomTabsNavigator } from './screen/BottomTabs.navigator';

const Stack = createStackNavigator();

export default function App() {
  return (
    <ContentContextProvider>
      <NavigationContainer>
<BottomTabsNavigator />
      </NavigationContainer>
    </ContentContextProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'teal',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
