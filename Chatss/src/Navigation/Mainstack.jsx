import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import User from '../Screen/User';
import Profile from '../Screen/Profile';
import Chatscreen from '../Screen/Chatscreen';

const Mainstack = () => {
    const Stack = createNativeStackNavigator();
    
  return (
       <Stack.Navigator screenOptions={{headerShown:false}}>

      <Stack.Screen name="User" component={User} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Chatscreen" component={Chatscreen} />

    </Stack.Navigator>



)
}

export default Mainstack

const styles = StyleSheet.create({})