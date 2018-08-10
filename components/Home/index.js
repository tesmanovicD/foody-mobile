import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { List, ListItem } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Entypo';

import styles from './home.style'


class Home extends Component {
  static navigationOptions = {
    header: null
  }
  

  openMenuItems = (id, name) => {
    this.props.navigation.navigate(
      'menuItems',
      { id, name }
    )
  }

  render() {
    const list = [
        {
          id: 0,
          name: 'Snacks',
          avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
          subtitle: 'Vice President'
        },
        {
          id: 1,
          name: 'Sandwiches',
          avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
          subtitle: 'Vice Chairman'
        },
        {
          id: 2,
          name: 'Dessert',
          avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
          subtitle: 'Vice Chairman'
        },
        {
          id: 3,
          name: 'Sweets',
          avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
          subtitle: 'Vice Chairman'
        }
    ]

    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerMenuIcon}>
            <Icon name="menu" size={30} color="#fff" />
          </Text>
          <Text style={styles.headerTitle}>Menu</Text>
          <Text style={styles.headerBasketIcon}>
            <Icon name="shopping-basket" size={25} color="#fff" />
          </Text>
        </View>
        <View style={styles.listContainer}>
				<List>
					{list.map((el, key) => (
						<ListItem
							roundAvatar
							avatar={{uri:el.avatar_url}}
							key={key}
							title={el.name}
							onPress={() => this.openMenuItems(el.id, el.name)}
						/>
					))}
				</List>
        </View>
      </View>
    )
  }
}

export default Home