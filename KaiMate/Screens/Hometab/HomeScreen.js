import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import FoodType from './FoodType';
import FoodSearch from './FoodSearch';
import GroupAdd from './GroupAdd';

const Stack = createStackNavigator();

export default function HomeScreen({route, navigation}) {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Type">
        <Stack.Screen name="Type" component={FoodType} />
        <Stack.Screen name="Search" component={FoodSearch} />
        <Stack.Screen name="Groupadd" component={GroupAdd} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
