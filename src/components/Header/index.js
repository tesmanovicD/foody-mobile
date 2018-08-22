import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'
import { connect } from 'react-redux'

import styles from './header.style'

export class Header extends Component {
    render() {
      return (
      <View style={styles.headerContainer}>
          <TouchableOpacity style={styles.headerMenuIcon} onPress={this.props.action}>
            <Icon name={this.props.iconName} size={this.props.iconSize || 30} color={this.props.iconColor || "#fff"} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>{this.props.title}</Text>
          <View style={styles.headerBasketIcon}>
						<TouchableOpacity onPress={() => this.props.navigation.navigate('basket')}>
							<Icon name="shopping-basket" size={25} color="#fff" />
						</TouchableOpacity>
						<Text>{this.props.totalProducts}</Text>
          </View>
      </View>
      )
    }
  }

mapStateToProps = (state) => {
    return {
        totalProducts: state.basket.totalProducts
    }
}

export default connect(mapStateToProps)(Header)