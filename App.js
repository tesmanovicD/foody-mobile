/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Login from './components/Login';
import Home from './components/Home';
import MenuCategories from './components/MenuCategories';


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AppStackNavigator />
      </View>
    );
  }
}

const AppStackNavigator = createStackNavigator({
  home: Home,
  login: Login,
  menuCategories: MenuCategories
})


const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
