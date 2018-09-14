import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import OneSignal from 'react-native-onesignal'

import Header from '../Header'
import Order from './Order'
import styles from './myOrders.style'
import actions from '../../modules/actions'

class MyOrders extends Component {

  static navigationOptions = {
    header: null,
    loaded: false
  }

  state = {
    orderType: 'ongoing'
  }

  componentWillMount() {
    OneSignal.addEventListener('opened', this.refreshOrders)
  }

  componentDidMount() {
    this.props.dispatch(actions.order.getAllOrders(this.props.userInfo.id))
    .done(() => this.setState({ loaded: true }))
  }

  componentWillUnmount() {
    OneSignal.removeEventListener('opened', this.refreshOrders)
  }

  openLeftMenu = () => this.props.navigation.openDrawer()

  cancelOrder = (id) => this.props.dispatch(actions.order.cancelOrder(id))

  changeOrderType = (orderType) => this.setState({ orderType })

  refreshOrders = () => this.props.dispatch(actions.order.getAllOrders(this.props.userInfo.id))

  render() {
 
    return (
      <View style={styles.container}>
        <Header
          leftAction={this.openLeftMenu} leftIconName="menu"
          rightAction={this.refreshOrders} rightIconName="cycle" 
          title="My Orders"
        />
  
        <View style={styles.headerNavigation}>
          <TouchableOpacity style={[styles.navItem, this.state.orderType == 'ongoing' && styles.activeTab]} onPress={() => this.changeOrderType('ongoing')}>
            <Text style={[styles.navText, this.state.orderType == 'ongoing' && styles.activeItem]}>Ongoing Orders</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.navItem, this.state.orderType == 'past' && styles.activeTab]} onPress={() => this.changeOrderType('past')}>
            <Text
              style={[styles.navText, this.state.orderType == 'past' && styles.activeItem]}>Past Orders</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1}}>
        { this.state.loaded &&
          this.props.orders.length ?
        
          this.state.orderType === 'ongoing' ?
          (
          this.props.orders.map(order => {
            if (order.status === 'Pending' || order.status === 'Ready') {
              let orderItems = this.props.orderItems.filter(o => o.id_order == order.id)
              return <Order order={order} key={order.id} orderItems={orderItems} cancelOrder={this.cancelOrder}/>
            }
          })
          )
          :
          (
            this.props.orders.map(order => {
            if (order.status === 'Completed' || order.status === 'Canceled') {
            let orderItems = this.props.orderItems.filter(o => o.id_order == order.id)
            return <Order order={order} key={order.id} orderItems={orderItems} orderType="past" />
            }
          })
          )
          :
          <Text style={styles.errMessage}>User orders list is empty </Text>
      }
      </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    orders: state.order.orders,
    orderItems: state.order.orderItems,
    userInfo: state.user.userInfo
  }
}

export default connect(mapStateToProps)(MyOrders)