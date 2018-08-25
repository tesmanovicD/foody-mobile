import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/SimpleLineIcons'

import styles from './completeOrder.style'
import Header from '../Header'

export class CompleteOrder extends Component {

	static navigationOptions = {
		header: null
	}

	goBack = () => this.props.navigation.goBack()

	backToMenu = () => this.props.navigation.navigate('home')

  render() {
    return (
      <View style={styles.container}>
				<View>
					<Header
						rightAction={this.backToMenu} rightIconName="home" 
						title="Your Cart"
					/>
					<View style={styles.orderTop}>
						<View style={styles.orderInfo}>
							<Text style={styles.headingText}>Order Complete</Text>
							<Text>Your order is being processed by Chef, you can follow Your order status at
									"My Orders" section menu. Once your order is processed by Chef you will get notified
									when you can pickup & pay your meal orders. 
							</Text>
							<Text style={styles.orderText}>Your Order Number:</Text>
						</View>
							<Text style={styles.orderNumber}>1140407412</Text>
					</View>
				</View>

				<View style={styles.thanksWindow}>
							<Icon size={40} color="orange" name="emotsmile" />
							<Text style={styles.thanksMessage}>Thank you!</Text>
				</View>

				<TouchableOpacity style={styles.submitButton}>
						<Text style={styles.submitText}>Go to my orders</Text>
				</TouchableOpacity>
      </View>
    )
  }
}

export default CompleteOrder