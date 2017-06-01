import React, { Component } from 'react'
import {
   View, Text, TouchableHighlight, TextInput, Image, StyleSheet,
   Dimensions, Button, StatusBar, AppRegistry
} from 'react-native'
//import ApiHandler from '../API/ApiHandler'
//var app = new ApiHandler();
//import Sha256 from '../SHA'

var {height, width} = Dimensions.get('window');

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {username: '',
                      password: ''}
    }
    render() {
        return (
            //<Image source = {require('../Images/ST.jpg')}
            <View style = {styles.container}>
                <Text style = {{color: '#333333', paddingTop: 56}}>
                    SensationSubs {"\n"}Needs color theme matching the shop
                </Text>
                <TextInput
                    style = {{ height: 40, width: width, borderBottomColor: 'gray', borderBottomWidth: 1,}}
                    underlineColorAndroid = 'rgba(0,0,0,0)'
                    onChangeText = {(text) => this.setState({ username: text })}
                    placeholder = 'Username'
                    value = { this.state.username }
                />
                <Text>
                </Text>
                <TextInput
                    style = {{ height: 40, width: width, borderBottomColor: 'gray', borderBottomWidth: 1,}}
                    underlineColorAndroid = 'rgba(0,0,0,0)'
                    onChangeText = {(text) => this.setState({ password: text })}
                    placeholder = 'Password'
                    value = { this.state.password }
                    secureTextEntry = { true }
                />
                <Button
                    onPress = {this._isPressLogin}
                    style = {{height: 30, borderWidth: 1, borderColor: 'black',}}
                    title = 'Log In'
                    color = '#333333'>
                </Button>
                <Text
                    onPress = {this._isPressRegister}
                    style = {{height: 30, textDecorationLine: 'underline', paddingTop:10,
                            color: '#333333'}}>
                    Create Account
                </Text>
            </View>
        )
    }
    _isPressLogin = () => {
      this.props.navigation.navigate('Orderscreen');
      //need to add encryted prop passing to to check against the db
    }
    _isPressRegister = () => {
        this.props.navigation.navigate('Register');
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: undefined,
        height: undefined,
        backgroundColor: '#F5FCFF',
        justifyContent: 'center',
        alignItems: 'center',
        //resizeMode: 'cover',
    },
    container2: {
        flex: 1,
        width: undefined,
        height: undefined,
        //backgroundColor: 'rgb(80, 203, 102)',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    containter3: {
        flex: 1,
        width: undefined,
        height: undefined,
        //backgroundColor: 'rgb(80, 203, 102)',
        justifyContent: 'center',
        alignItems: 'center',
    }
})

//AppRegistry.registerComponent('SensationalSubs', () => SensationalSubs);
