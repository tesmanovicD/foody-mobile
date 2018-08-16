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

store.subscribe(() => console.warn(store.getState()))

 

export default class App extends Component {
  render() {
    console.warn("test",store.getState('user').user.loggedIn)
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
