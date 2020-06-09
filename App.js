/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View, Text, Image, ActivityIndicator} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
// import LinearGradient from 'react-native-linear-gradient';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './screens/Home';
import Favorite from './screens/Favorite';
import {COLORS} from './constants/styles';

const Tab = createBottomTabNavigator();

const App: () => React$Node = () => {
  console.disableYellowBox = true;

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="home"
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'home') {
              iconName = focused ? 'ios-home' : 'ios-home';
            } else if (route.name === 'favorite') {
              iconName = focused ? 'ios-list-box' : 'ios-list-box';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: COLORS.PRIMARY,
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="home" component={Home} options={{title: 'Home'}} />
        <Tab.Screen
          name="favorite"
          component={Favorite}
          options={{title: 'Favorite'}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
