import React, {useEffect} from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SignHome from './login/SignHome';
import HomeScreen from './Screens/Hometab/HomeScreen';
import People from './Screens/People';
import Like from './Screens/Like';
import Setting from './Screens/Settings';
import Icon from 'react-native-vector-icons/Ionicons';
import SplashScreen from 'react-native-splash-screen';
import {} from 'react-native';

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

function MainScreen({route, navigation}) {
  const {userId, userPassword, userNickname} = route.params;
  return (
    <NavigationContainer independent={true}>
      <Tabs.Navigator
        initialRouteName="Home"
        backBehavior="none"
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
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
        <Tabs.Screen
          name="Home"
          component={HomeScreen}
          initialParams={{
            userId: userId,
            userPassword: userPassword,
            userNickname: userNickname,
          }}
        />
        <Tabs.Screen
          name="People"
          component={People}
          initialParams={{
            userId: userId,
            userPassword: userPassword,
            userNickname: userNickname,
          }}
        />
        <Tabs.Screen
          name="Setting"
          component={Setting}
          initialParams={{
            userId: userId,
            userPassword: userPassword,
            userNickname: userNickname,
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}

export default class App extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1200);
  }
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName="Sign">
          <Stack.Screen name="Sign" component={SignHome} />
          <Stack.Screen name="Main" component={MainScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
