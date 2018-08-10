import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo';

import styles from './menuItems.style'
import Item from './Item';

class MenuItems extends Component {

	static navigationOptions = {
		header: null
	}

	state = {
		menuItems: []
	}

	componentDidMount() {
		const menuId = this.props.navigation.state.params.id

		this.getMenuItems(menuId)
	}
	
	goBack = () => this.props.navigation.goBack()

	getMenuItems = (id) => {
		console.warn(id);
		this.setState({ menuItems: [
			{
				id: 0,
				name: 'Item 1',
				avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
				price: 200
			},
			{
				id: 1,
				name: 'Item 2',
				avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
				price: 100
			}
		] })
	}

  render() {
		const menuName = this.props.navigation.state.params.name

    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
					<Icon name="arrow-bold-left" size={30} color='#fff' onPress={this.goBack} />
          <Text style={styles.headerTitle}>{ menuName }</Text>
          <Text style={styles.headerBasketIcon}>
            <Icon name="shopping-basket" size={25} color="#fff" />
          </Text>
        </View>
				<View>
					{ this.state.menuItems.map(item => <Item key={item.id} item={item} />) }
				</View>
      </View>
    )
  }
}

export default MenuItems