/* eslint-disable prettier/prettier */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import WellcomeScreen from './src/Layouts/WellcomeScreen';
import LoginScreen from './src/Layouts/LoginScreen';
import SignupScreen from './src/Layouts/SignupScreen';
import MainScreen from './src/Layouts/MainScreen';
import DetailScreen from './src/Layouts/DetailScreen';
import SettingScreen from './src/Layouts/SettingScreen';
import PaymentScreen from './src/Layouts/PaymentScreen';

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="WellcomeScreen"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="WellcomeScreen" component={WellcomeScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen name="DetailScreen" component={DetailScreen} />
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="SettingScreen" component={SettingScreen} />
        <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
