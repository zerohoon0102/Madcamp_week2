import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './Screens/HomeScreen';
import People from './Screens/People';
import Like from './Screens/Like';

import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const Tabs = createBottomTabNavigator();

export default class App extends React.Component {
  state = {
    id: '',
    password: '',
  };

  render() {
    return (
      <NavigationContainer>
        <Tabs.Navigator initialRouteName="Home">
          <Tabs.Screen name="Home" component={HomeScreen} />
          <Tabs.Screen name="Like" component={Like} />
          <Tabs.Screen name="People" component={People} />
        </Tabs.Navigator>
      </NavigationContainer>
    );
  }
}
