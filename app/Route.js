import React, { Component } from 'react'

import {
   StyleSheet,
   Text,
   Navigator,
   TouchableOpacity,
   TouchableHighlight,
   StatusBar
} from 'react-native'

import start from '../login/start'
import login from '../login/login'

export default class Route extends Component {
    render() {
        return (
            <Navigator
                initialRoute = {{ title: 'LoginScreen', name: 'Login' }}
                renderScene = { this.renderScene }
                style={{paddingBottom: 0}} //FIXME: Sloppy way to prevent nav bar from overlaying contents
            />
        );
    }

    renderScene(route, navigator) {
        if (route.name == 'Login') {
            return (
                <Login
                    navigator = { navigator }
                    {...route.passProps}
                />
            )
        }

    {/*Routes*/}
        if (route.name =='Camera') {
          return (
            <Camera
              navigator = { navigator }
              {...route.passProps}
            />
          )
        }
        if (route.name == 'Map') {
            return (
                <Map
                    navigator = { navigator }
                    // username = { route.username }
                    {...route.passProps}
                />
            )
        }

        if (route.name == 'Register') {
            return (
                <Register
                    navigator = { navigator }
                    // username = { route.username }
                    {...route.passProps}
                />
            )
        }

        if (route.name == 'MyPickups') {
            // console.log("in Router to MyPickups" + route.username);
            return (
                <MyPickups
                    navigator = { navigator }
                    // username = { route.username }
                    {...route.passProps}
                />
            )
        }

        if (route.name == 'DemoInbox') {
            // console.log("in Router to MyPickups" + route.username);
            return (
                <DemoInbox
                    navigator = { navigator }
                    // username = { route.username }
                    {...route.passProps}
                />
            )
        }

        if (route.name == 'Root') {
            // console.log("in Router to Root" + route.username);
            return (
                <Root
                    navigator = { navigator }
                    // username = { route.username }
                    {...route.passProps}
                />
            )
        }


    {/*Poster Routes*/}

        if (route.name == 'MyListings') {
            // console.log("in Router " + route.username);
            return (
                <MyListings
                    navigator = { navigator }
                    // username = { route.username }
                    {...route.passProps}
                />
            )
        }
        if (route.name == 'NewListing') {
            // console.log("in Router " + route.username);
            return (
                <NewListing
                    navigator = { navigator }
                    // username = { route.username }
                    {...route.passProps}
                />
            )
        }
        if (route.name == 'NewListingContinued') {
            // console.log("in Router to NewListingContinued " + route.username);
            return (
                <NewListingContinued
                    navigator = { navigator }
                    // username = { route.username }
                    {...route.passProps}
                />
            )
        }

    {/*Item Routes*/}

        if (route.name == 'DemoItem') {
            // console.log("in Router to DemoItem" + route.username);
            return (
                <DemoItem
                    navigator = { navigator }
                    // username = { route.username }
                    {...route.passProps}
                />
            )
        }

        if (route.name == 'ItemPage') {
            // console.log("in Router to ItemPage" + route.username);
            return (
                <ItemPage
                    navigator = { navigator }
                    // username = { route.username }
                    {...route.passProps}
                />
            )
        }

        if (route.name == 'ItemPagePickup') {
            // console.log("in Router to ItemPagePickup" + route.username);
            return (
                <ItemPagePickup
                    navigator = { navigator }
                    // username = { route.username }
                    {...route.passProps}
                />
            )
        }

        if (route.name == 'ItemList') {
            // console.log("in Router to ItemList" + route.username);
            return (
                <ItemList
                    navigator = { navigator }
                    // username = { route.username }
                    {...route.passProps}
                />
            )
        }

        {/*Profile Routes*/}

        if (route.name == 'ProfilePageHauler') {
            // console.log("in Router to ProfilePageHauler" + route.username);
            return (
                <ProfilePageHauler
                    navigator = { navigator }
                    {...route.passProps}
                />
            )
        }

        if (route.name == 'ProfilePagePoster') {
            // console.log("in Router to ProfilePagePoster" + route.username);
            return (
                <ProfilePagePoster
                    navigator = { navigator }
                    {...route.passProps}
                />
            )
        }
    }
}
