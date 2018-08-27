import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

import Icon from 'react-native-vector-icons/Entypo'
import styles from './order.style'

const Order = (props) => {
    const statusColor = props.order.status == 'Pending' ? 'orange' : (props.order.status == 'Canceled' ? 'red' : 'green')

    return (
    <View style={styles.order}>
        <View style={styles.orderDetails}>
            <Icon name="bowl" size={30} color="#d3d3d3" />
            <View style={styles.orderTop}>
                <Text style={styles.orderHeading}>Order No - {props.order.order_no}</Text>
                <Text style={{color: statusColor}}>{props.order.status} status</Text>
            </View>
            <Text style={styles.orderPrice}>$ {props.order.price.toFixed(2)}</Text>
        </View>
        <View style={styles.item}>
        {props.orderItems.map(orderItem => 
            <View style={styles.itemDetails} key={orderItem.id}>
                <Text>{orderItem.item}</Text>
                <Text>Qty: {orderItem.quantity}</Text>
                <Text>$ {orderItem.price.toFixed(2)}</Text>
            </View>
        )}
        </View>
        {props.orderType !== 'past' &&
        <TouchableOpacity style={styles.button} onPress={() => props.cancelOrder(props.order.id)}>
            <Text style={styles.buttonText}>Cancel Order</Text>
        </TouchableOpacity>
        }
    </View>
)}

export default Order