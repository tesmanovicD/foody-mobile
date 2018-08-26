import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

import Icon from 'react-native-vector-icons/Entypo'
import Header from '../Header'
import styles from './myOrders.style'

export class MyOrders extends Component {

  static navigationOptions = {
    header: null
  }

  openLeftMenu = () => this.props.navigation.openDrawer()

  render() {
    return (
      <View style={styles.container}>
        <Header
          leftAction={this.openLeftMenu} leftIconName="menu"
          title="My Orders"
        />

        <View style={styles.headerNavigation}>
          <TouchableOpacity style={styles.navItem}>
            <Text style={styles.navText}>Ongoing Orders</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.navItem}>
            <Text style={styles.navText}>Past Orders</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.order}>
          <View style={styles.orderDetails}>
            <Icon name="bowl" size={30} color="#d3d3d3" />
            <View style={styles.orderTop}>
              <Text style={styles.orderHeading}>Order No - 2221214</Text>
              <Text style={styles.orderStatus}>Pending status</Text>
            </View>
            <Text style={styles.orderPrice}>$ 84.00</Text>
          </View>

          <View style={styles.itemDetails}>
            <Text>Makaroni Pasta</Text>
            <Text>Qty: 2</Text>
            <Text>$ 52.00</Text>
          </View>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Cancel Order</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default MyOrders