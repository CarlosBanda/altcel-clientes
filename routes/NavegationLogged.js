import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome'
import { Text, Image, Pressable } from 'react-native';
import Panel from "../views/pages/Panel";

import Profile from '../views/pages/Profile';
import Recargas from '../views/pages/Recargas';
import EstadoCuenta from '../views/pages/EstadoCuenta';

const Tab = createBottomTabNavigator();



function LogoTitle() {
  return (
    <Image
      style={{ width: 130, height: 50 }}
      source={require('../assets/img/logo.png')}
    />
  );
}

const NavegationLogged = () => {
  return (
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;
  
                if (route.name === 'Panel') {
                  iconName = focused ? 'home' : 'home';
  
                } else if (route.name === 'EstadoCuenta') {
                  iconName = focused ? 'file-text' : 'file-text';
                }else if (route.name === 'Recargas') {
                  iconName = focused ? 'money' : 'money';
                }else if (route.name === 'profile') {
                  iconName = focused ? 'user' : 'user';
                }
                return <Icon name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: '#fb0c06',
              tabBarInactiveTintColor: '#005bc5',
            })}
          >
            <Tab.Screen name="Panel" component={Panel} options={{
              headerTintColor: 'red',
              headerTitle: (props) => <LogoTitle {...props} />,
              headerRight: () => (
                <Pressable onPress={() => navigation.navigate('Perfil del Usuario')}><Text style={{color:'black', marginRight:30}}>UserName</Text></Pressable>
              ),
              headerStyle: {
                backgroundColor: '#fff',
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowOpacity: 0.30,
                shadowRadius: 4.65,

                elevation: 8,
              }
            }}/>
            <Tab.Screen name="Recargas" component={Recargas} options={{
              headerTintColor: 'red',
              headerTitle: (props) => <LogoTitle {...props} />,
              headerRight: () => (
                <Pressable onPress={() => navigation.navigate('Perfil del Usuario')}><Text style={{color:'black', marginRight:30}}>UserName</Text></Pressable>
              ),
              headerStyle: {
                backgroundColor: '#fff',
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowOpacity: 0.30,
                shadowRadius: 4.65,

                elevation: 8,
              }
            }} />
            <Tab.Screen name="EstadoCuenta" component={EstadoCuenta} options={{
              headerTintColor: 'red',
              headerTitle: (props) => <LogoTitle {...props} />,
              headerRight: () => (
                <Pressable onPress={() => navigation.navigate('Perfil del Usuario')}><Text style={{color:'black', marginRight:30}}>UserName</Text></Pressable>
              ),
              headerStyle: {
                backgroundColor: '#fff',
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowOpacity: 0.30,
                shadowRadius: 4.65,

                elevation: 8,
              }
            }}/>
            <Tab.Screen name="profile" component={Profile} options={{lazy:false, }}/>
          </Tab.Navigator>
  );
};

export default NavegationLogged;