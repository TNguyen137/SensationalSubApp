/**
 * Thi Nguyen
 * This JS code renders what is seen by the user when the app is launched
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Login from '../login/Login'

export default class Start extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to the SensationalSubs App!
        </Text>
        <Text style={styles.instructions}>
          Hot Reloading Enabled {"\n"}
          Need to get background pciture of shop to put here
        </Text>
        <Text
            onPress = {this._isPressStart}
            style = {{height: 30, textDecorationLine: 'underline', paddingTop:10,
                    color: '#333333'}}>
            Press to start!
        </Text>
      </View>
    );
  }

  _isPressStart = () => {
    this.props.navigation.navigate('Login');
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

//AppRegistry.registerComponent('SensationalSubs', () => SensationalSubs);
