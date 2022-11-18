import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../views/pages/Login';
import Register from '../views/pages/Register';
import InputsLogin from '../views/components/InputsLogin';

const Stack = createNativeStackNavigator();
const Navigations = () => {

  return ( 

    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="InputsLogin" component={InputsLogin}/>
      <Stack.Screen name="Register" component={Register}/>
    </Stack.Navigator>
  );
};

export default Navigations;