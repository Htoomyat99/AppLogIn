import * as React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from '../../pages/auth/login/Login';
import PasswordScreen from '../../pages/auth/password/Password';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={LoginScreen}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Password" component={PasswordScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
