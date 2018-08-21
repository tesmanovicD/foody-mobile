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
import { Provider } from 'react-redux'

import Login from './src/components/Login';
import Home from './src/components/Home';
import MenuCategories from './src/components/MenuCategories';
import Sidebar from './src/components/Sidebar'
import store from './src/modules/store';


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <View style={styles.container}>
        <RootNavigator />
      </View>
      </Provider>
    );
  }
}

const AppStackNavigator = {
  login: Login,
  home: Home,
  menuCategories: MenuCategories
}

const AppDrawerNavigation = {
  LoginViewStack: {
    name: 'Login',
    screen: StackNavigator(AppStackNavigator, { initialRouteName: 'login' })
  },
  HomeViewStack: {
		name: 'Home',
		screen: StackNavigator(AppStackNavigator, { initialRouteName: 'home' })
  },
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
