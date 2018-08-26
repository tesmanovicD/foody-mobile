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
import Basket from './src/components/Basket';
import CompleteOrder from './src/components/CompleteOrder';
import MyOrders from './src/components/MyOrders';

// store.subscribe(() => console.warn(store.getState("basket")))

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
  menuCategories: MenuCategories,
  basket: Basket,
  completeOrder: CompleteOrder,
  myOrders: MyOrders
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
  BasketViewStack: {
		name: 'Basket',
		screen: StackNavigator(AppStackNavigator, { initialRouteName: 'basket' })
  },
  MyOrdersViewStack: {
		name: 'MyOrders',
		screen: StackNavigator(AppStackNavigator, { initialRouteName: 'myOrders' })
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
