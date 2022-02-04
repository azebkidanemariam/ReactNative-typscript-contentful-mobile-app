import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SingleBlog from "./singleBlog";
import BreakTime from "./takeAbreak";

const StackNavigators = createStackNavigator()
const Tab = createBottomTabNavigator();

export const HomeStack = () => {
    return (
      <StackNavigators.Navigator>
        <Tab.Screen name="SingleBlog" component={SingleBlog} />
        <Tab.Screen name="BreakTime" component={BreakTime} />
      </StackNavigators.Navigator>
    );
  }

