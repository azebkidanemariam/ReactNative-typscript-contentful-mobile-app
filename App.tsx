import React from "react";
import { StyleSheet } from "react-native";
import ContentContextProvider from "./Context/contentfulContext";
import { NavigationContainer } from "@react-navigation/native";
import { BottomTabsNavigator } from "./navigators/BottomTabs.navigator";
import { theme } from "./sdha/themes";
import { LogBox } from "react-native";
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font'

LogBox.ignoreLogs(["Seems like you're using an old API with gesture components, check out new Gestures system!"])
export default function App() {
  let[fontsLoaded] = useFonts({
    'Avenir': require('./assets/fonts/avenir.otf'),
    'Didot': require('./assets/fonts/DidotRegular.ttf'),
  })

  if(!fontsLoaded) {
    return <AppLoading />
  }
  return (
    <NavigationContainer>
      <ContentContextProvider>
        <BottomTabsNavigator />
      </ContentContextProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "teal",
    alignItems: "center",
    justifyContent: "center",
  },
  bottomTab: {
    backgroundColor: theme.colorPurple,
  },
});
