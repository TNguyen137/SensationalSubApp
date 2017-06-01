/**
 * Thi Nguyen
 * This is the register screen to get a new acct with the app
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class Register extends Component {
  constructor(props) {
      super(props);
      this.state = {username: '',
                    name: '',
                    password: '',
                    verifyPassword: '',
                    email: '',
                    phone: ''}
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          This is where the Register Screen is going to go!
        </Text>
        <Text style={styles.instructions}>
          Hot Reloading Enabled
        </Text>
        <Text
            onPress = {this._isPressStart}
            style = {{height: 30, textDecorationLine: 'underline', paddingTop:10,
                    color: '#333333'}}>
            Press to go back to the login screen!
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
