import React, { Component } from 'react'

import {
   AppRegistry,
   StyleSheet,
   Text,
   TouchableOpacity,
   TouchableHighlight,
   StatusBar
} from 'react-native'
import { StackNavigator, } from 'react-navigation';


import Login from '../login/Login'
import Orderscreen from '../order/Orderscreen'
import Register from '../login/Register'
import Start from '../login/Start'
export const AppStack = StackNavigator({
  Start: {
    screen: Start,
    navigationOptions: {
      title: 'S', header: null
    },
  },
  Login: {
    screen: Login,
    navigationOptions: ({ navigation }) => ({
      title: `L`,
      // add header: null
    }),
  },
  Orderscreen: {
    screen: Orderscreen,
    navigationOptions: ({ navigation }) => ({
      title: `Orderscreen`,
    }),
  },
  Register: {
    screen: Register,
    navigationOptions: ({ navigation }) => ({
      title: `Register`,
    }),
  },
});
export const Root = StackNavigator({
  Start: {
    screen: AppStack,
  },
}, {
  mode: 'modal',
  headerMode: 'none',
});
// export default class Route extends Component {
//
// }
