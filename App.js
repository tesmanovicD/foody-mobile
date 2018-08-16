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
import { DrawerNavigator, StackNavigator } from 'react-navigation';
import Login from './components/Login';
import Home from './components/Home';
import MenuCategories from './components/MenuCategories';
import Sidebar from './components/Sidebar'


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <RootNavigator />
      </View>
    );
  }
}

const AppStackNavigator = {
  home: Home,
  login: Login,
  menuCategories: MenuCategories
}

const AppDrawerNavigation = {
  HomeViewStack: {
		name: 'Home',
		screen: StackNavigator(AppStackNavigator, { initialRouteName: 'home' })
  },
  LoginViewStack: {
    name: 'Login',
    screen: StackNavigator(AppStackNavigator, { initialRouteName: 'login' })
  }
}

const RootNavigator =
	StackNavigator({
		Drawer: {
			name: 'Drawer',
			screen: DrawerNavigator({
				...AppDrawerNavigation,
      },{
        contentComponent: ({ navigation }) => <Sidebar navigation={navigation} />,
        drawerLockMode: 'locked-closed'
      }),
		},
		...AppStackNavigator
	},
		{
			headerMode: 'none'
		}
	);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
