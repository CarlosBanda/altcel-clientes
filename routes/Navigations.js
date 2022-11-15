import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../views/pages/Login';
import Register from '../views/pages/Register';

const Stack = createNativeStackNavigator();
const Navigations = () => {

  return ( 

    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Register" component={Register}/>
      <Stack.Screen name="Login" component={Login}/>
    </Stack.Navigator>
  );
};

export default Navigations;