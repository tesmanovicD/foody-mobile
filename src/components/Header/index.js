import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'
import { connect } from 'react-redux'

import styles from './header.style'

export class Header extends Component {
    render() {
      return (
      <View style={styles.headerContainer}>
          <TouchableOpacity style={styles.headerMenuIcon} onPress={this.props.leftAction}>
            <Icon name={this.props.leftIconName} size={this.props.leftIconSize || 30} color={this.props.leftIconColor || "#fff"} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>{this.props.title}</Text>
          <View style={styles.headerBasketIcon}>
            <TouchableOpacity onPress={this.props.rightAction}>
                <Icon name={this.props.rightIconName} size={this.props.rightIconSize || 25} color={this.props.rightIconColor || "#fff"} />
            </TouchableOpacity>
            {this.props.rightIconName == 'shopping-basket' && <Text>{this.props.totalProducts}</Text>}
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