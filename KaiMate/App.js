import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './Screens/HomeScreen';
import People from './Screens/People';
import Like from './Screens/Like';
import Setting from './Screens/Settings';
import Icon from 'react-native-vector-icons/Ionicons';

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
  render() {
    return (
      <NavigationContainer>
        <Tabs.Navigator
          initialRouteName="Home"
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === 'Like') {
                iconName = focused ? 'heart' : 'heart-outline';
              } else if (route.name === 'People') {
                iconName = focused ? 'people' : 'people-outline';
              } else if (route.name === 'Setting') {
                iconName = focused ? 'settings' : 'settings-outline';
              }

              // You can return any component that you like here!
              return <Icon name={iconName} size={size} color={'#0C579F'} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'black',
            inactiveTintColor: 'gray',
          }}>
          <Tabs.Screen name="Home" component={HomeScreen} />
          <Tabs.Screen name="Like" component={Like} />
          <Tabs.Screen name="People" component={People} />
          <Tabs.Screen name="Setting" component={Setting} />
        </Tabs.Navigator>
      </NavigationContainer>
    );
  }
}
