import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import FoodType from './FoodType';
import FoodDetail from './FoodDetail';

const Stack = createStackNavigator();

export default function HomeScreen({navigation}) {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Type">
        <Stack.Screen name="Type" component={FoodType} />
        <Stack.Screen name="Detail" component={FoodDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
