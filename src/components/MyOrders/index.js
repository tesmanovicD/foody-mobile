import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

import Header from '../Header'
import Order from './Order'
import styles from './myOrders.style'
import actions from '../../modules/actions';

class MyOrders extends Component {

  static navigationOptions = {
    header: null
  }

  state = {
    orderType: 'ongoing'
  }

  componentDidMount() {
    this.props.dispatch(actions.order.getAllOrders())
  }

  openLeftMenu = () => this.props.navigation.openDrawer()

  cancelOrder = (id) => this.props.dispatch(actions.order.cancelOrder(id))

  changeOrderType = (orderType) => this.setState({ orderType })

  render() {
    return (
      <View style={styles.container}>
        <Header
          leftAction={this.openLeftMenu} leftIconName="menu"
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
        { this.state.orderType === 'ongoing' ?
          (
          this.props.orders.map(order => {
            if (order.status === 'Pending' || order.status === 'Ready') {
              let orderItems = this.props.orderItems.filter(o => o.id_order == order.id);
              return <Order order={order} key={order.id} orderItems={orderItems} cancelOrder={this.cancelOrder}/>
            }
          })
          ) :
          (
            this.props.orders.map(order => {
            if (order.status === 'Completed' || order.status === 'Canceled') {
            let orderItems = this.props.orderItems.filter(o => o.id_order == order.id);
            return <Order order={order} key={order.id} orderItems={orderItems} orderType="past" />
            }
          })
          )
        }
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    orders: state.order.orders,
    orderItems: state.order.orderItems
  }
}

export default connect(mapStateToProps)(MyOrders)