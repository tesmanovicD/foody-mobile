import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { List, ListItem } from 'react-native-elements'
import { connect } from 'react-redux'
import OneSignal from 'react-native-onesignal'

import styles from './home.style'
import actions from '../../modules/actions/index'
import Header from '../Header'

class Home extends Component {
  static navigationOptions = {
    header: null
  }

  componentWillMount() {
    const { id } = this.props.userInfo
    OneSignal.init("74723254-f9b6-4f24-bde3-5835a592f71e")
    console.warn(id)
    OneSignal.sendTag("id", `${id}`)
  }

  componentDidMount() {
    this.props.dispatch(actions.food.getAllCategories())
    .catch(err => console.warn("ERR", err))
  }  

  openMenuCategories = (id, name) => {
    this.props.navigation.navigate(
      'menuCategories',
      { id, name }
    )
  }

  goToBasket = () => this.props.navigation.navigate('basket')

  openLeftMenu = () => this.props.navigation.openDrawer()

  render() {
    const list = [
        {
          id: 0,
          name: 'Snacks',
          avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
          subtitle: 'Vice President'
        }
    ]

    return (
      <View style={styles.container}>
        <Header
          leftAction={this.openLeftMenu} leftIconName="menu"
          rightAction={this.goToBasket} rightIconName="shopping-basket"
          title="Menu"
        />
        <View style={styles.listContainer}>
				<List>
					{this.props.categories.map(cat => (
						<ListItem
							roundAvatar
							avatar={{uri:list[0].avatar_url}}
							key={cat.id}
							title={cat.name}
							onPress={() => this.openMenuCategories(cat.id, cat.name)}
						/>
					))}
				</List>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.food.categories,
    userInfo: state.user.userInfo
  }
}

export default connect(mapStateToProps)(Home)