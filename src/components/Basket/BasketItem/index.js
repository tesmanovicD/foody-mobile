import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'

import styles from './basketItem.style'

const calculatePrice = (price, quantity) => {
	return `$${price * quantity}`;
}

const BasketItem = (props) => (
<View style={styles.item}>
	<View>
		<Text style={styles.itemTitle}>{props.item.quantity > 1 && `${props.item.quantity} x `}{props.item.name}</Text>
	
		<Text>{props.item.quantity > 1 && `${props.item.quantity} x ${props.item.price} =` }{calculatePrice(props.item.price, props.item.quantity)}</Text>
	</View>
	<View style={styles.itemControl}>
		<TouchableOpacity >
			<Icon name="edit" size={17} color="#a8a8a8" style={styles.icon}/>
		</TouchableOpacity>

		<TouchableOpacity>
			<Icon name="trash" size={17} color="#a8a8a8" style={styles.icon} />
		</TouchableOpacity>
	</View>
</View>
)

export default BasketItem