import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { List, ListItem } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Entypo';

import styles from './home.style'


class Home extends Component {
  static navigationOptions = {
    header: null
  }
  

  openMenuCategories = (id, name) => {
    this.props.navigation.navigate(
      'menuCategories',
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
          <TouchableOpacity style={styles.headerMenuIcon} onPress={() =>this.props.navigation.openDrawer()}>
            <Icon name="menu" size={30} color="#fff" />
          </TouchableOpacity>
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
							onPress={() => this.openMenuCategories(el.id, el.name)}
						/>
					))}
				</List>
        </View>
      </View>
    )
  }
}

export default Home