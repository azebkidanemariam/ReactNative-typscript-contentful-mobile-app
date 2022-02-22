import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import Blogs from '../screen/blog/Blogs';
import BlogDetail from '../screen/blog/BlogDetail';

const Stack = createStackNavigator();

const BlogStack = () => {
  return (
    <Stack.Navigator initialRouteName="Blogs">
    <Stack.Screen name="Blogs" component={Blogs} />
    <Stack.Screen name="BlogDetail" component={BlogDetail} />
  </Stack.Navigator>
  )
}

export default BlogStack

const styles = StyleSheet.create({})