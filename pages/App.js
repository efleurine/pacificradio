	
//This is an example code for Bottom Navigation//
import React from 'react';
import { Button, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
//import all the basic component we have used
import Ionicons from 'react-native-vector-icons/Ionicons';
//import Ionicons to show the icon for bottom options
 
//For React Navigation 3+
//import {
//  createStackNavigator,
//  createBottomTabNavigator,
//  createAppContainer,
//} from 'react-navigation';
 
//For React Navigation 4+
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
 
import HomeScreen from './pages/HomeScreen';
import SettingsScreen from './pages/SettingsScreen';
import DetailsScreen from './pages/DetailsScreen';
import ProfileScreen from './pages/ProfileScreen';
import Television from './pages/Television';
import Radio from './pages/Radio';
import Journal from './pages/Journal';
const HomeStack = createStackNavigator(
  {
    //Defination of Navigaton from home screen
    Home: { screen: HomeScreen },
    Details: { screen: DetailsScreen },
  },
  {
    defaultNavigationOptions: {
      
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#fca010',
        
      },
      headerTintColor: '#FFFFFF',
      title: 'Radio Television Pacific',
      justifyContent: 'center', 
      //Header title
           },     
    
  },

);


const SettingsStack = createStackNavigator(
  {
    //Defination of Navigaton from setting screen
    Settings: { screen: SettingsScreen },
    Details: { screen: DetailsScreen },
    Profile: { screen: ProfileScreen },
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#fca010',
      },
      headerTintColor: '#FFFFFF',
      title: 'Radio Television Pacific',
      
      //Header title
    },
  },
);
const TelevisionStack = createStackNavigator(
  {
    //Defination of Navigaton from home screen
    Television: { screen: Television },
    
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#fca010',
        
      },
      headerTintColor: '#FFFFFF',
      title: 'Radio Television Pacific',
      //Header title
           },     
    
  },

);

const JournalStack = createStackNavigator(
  {
    //Defination of Navigaton from home screen
    Journal: { screen: Journal },
    
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#fca010',
        
      },
      headerTintColor: '#FFFFFF',
      title: 'Radio Television Pacific',
      //Header title
           },     
    
  },

);

const RadioStack = createStackNavigator(
  {
    //Defination of Navigaton from home screen
    Radio: { screen: Radio },
    
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#fca010',
        
      },
      headerTintColor: '#FFFFFF',
      title: 'Radio Television Pacific',
      //Header title
           },     
    
  }

);


const App = createBottomTabNavigator(
  {
    ['Accueil']: { screen: HomeStack },
    ['Tv en direct']: { screen: TelevisionStack },
    ['Radio en direct']: { screen: RadioStack },
    ['Le Journal']: { screen: JournalStack},

    
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Accueil') {
          iconName = `ios-home${focused ? '' : ''}`;
        } else if (routeName === 'Tv en direct') {
          iconName = `md-tv${focused ? '' : ''}`;
        } else if (routeName === 'Radio en direct') {
          iconName = `md-radio${focused ? '' : ''}`;
        } else if (routeName === 'Le Journal') {
          iconName = `ios-journal${focused ? '' : ''}`;
        }
       
        return <IconComponent name={iconName} size={25} color={tintColor}  />;
      },
    }),


    
    tabBarOptions: {
      activeTintColor: '#fca010',
      inactiveTintColor: '#1e2b56',
    },
  }
);export default createAppContainer(App);