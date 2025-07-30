import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screens/LoginScreen';
import BottomTabNavigator from './BottomTabNavigator';
import NearbyResourcesScreen from '../screens/NearbyResourcesScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Main" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NearbyResources" component={NearbyResourcesScreen} options={{ title: 'Recursos Cercanos' }} />
    </Stack.Navigator>
  );
};

export default AppNavigator;