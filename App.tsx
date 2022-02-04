
import React from 'react';
import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native'
import ContentContextProvider from './Context/contentfulContext'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { BottomTabsNavigator } from './screen/BottomTabs.navigator';
/* import Blogs from './screen/blog.screen';
import { HomeStack } from './screen/StackNavigator';
import BreakTime from './screen/takeAbreak';
import SingleBlog from './screen/singleBlog';
import Home from './screen/home.screen'; */

const Stack = createStackNavigator();

const App = () =>{
  return (
    <ContentContextProvider>
      <NavigationContainer>
        <BottomTabsNavigator/>
</NavigationContainer>
    </ContentContextProvider>
  )
}
export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'teal',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
