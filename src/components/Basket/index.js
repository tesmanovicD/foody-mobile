import React, { Component } from 'react'
import { Text, View, TouchableOpacity, TextInput, ToastAndroid } from 'react-native'
import { connect } from 'react-redux'

import styles from './basket.style'
import actions from '../../modules/actions'
import Header from '../Header'
import BasketItem from './BasketItem'

class Basket extends Component {

	static navigationOptions = {
		header: null
	}
	
	state = {
		coupon: '',
	}

	goBack = () => this.props.navigation.goBack()

	goToBasket = () => this.props.navigation.navigate('basket')

	backToMenu = () => this.props.navigation.navigate('home')

	verifyCoupon = () => {
		if (this.state.coupon.length < 1) {
			ToastAndroid.show('You must provide discount code', ToastAndroid.SHORT)
			return
		} else if (this.props.basket.usedCoupon === true) {
			ToastAndroid.show('You already used coupon discount', ToastAndroid.SHORT)
			return
		} else if (this.props.basket.products.length === 0) {
			ToastAndroid.show('You must add items to basket', ToastAndroid.SHORT)
			return
		}

		this.props.dispatch(actions.basket.verifyCoupon(this.state.coupon))
		.then(() => this.setState({ usedCoupon: true }))	
		.catch(err => ToastAndroid.show(err.data, ToastAndroid.SHORT))
	}

	completeOrder = () => {
		if (!this.props.basket.products.length) {
			return ToastAndroid.show('You must add items to basket', ToastAndroid.SHORT)
		}

		const basket = this.props.basket

		this.props.dispatch(actions.basket.addOrder(basket.products, this.props.activeUser.id, basket.totalSum, this.state.coupon))
		.then((orderNo) => {
			this.props.navigation.navigate('completeOrder', {orderNo})
		})

		
	}

	deleteItem = (item) => {
		this.props.dispatch(actions.basket.deleteItem(item))
	}

  render() {
    return (
      <View style={styles.container}>
				<View>
				<Header
					leftAction={this.goBack} leftIconName="arrow-bold-left"
					rightAction={this.backToMenu} rightIconName="home" 
					title="Your Cart"
				/>
					<View style={styles.items}>
						{this.props.basket.products.length > 0 ?
							this.props.basket.products.map(p => (
								<BasketItem item={p} key={p.id} deleteItem={this.deleteItem} />
							))
							:
							<Text style={styles.errMessage}>No items in basket</Text>
						}
						<View style={styles.basketInfo}>
							<View>
								<TouchableOpacity style={styles.itemAddButton} onPress={this.backToMenu}>
									<Text style={styles.buttonText}>Add more items</Text>
								</TouchableOpacity>
							</View>
							<View>
								<Text style={styles.totalSumText}>Total: $ {this.props.basket.totalSum}</Text>
							</View>
						</View>

						<View style={styles.couponInfo}>
							<TextInput
								style={styles.textInput}
								onChangeText={coupon => this.setState({ coupon })}
								returnKeyType="done"
								underlineColorAndroid={'transparent'}
								placeholder="Enter your discount code"
								placeholderTextColor="#000"
								maxLength={20}/> 
							<TouchableOpacity style={styles.verifyButton} onPress={this.verifyCoupon}>
								<Text style={styles.verifyText}>Verify</Text>
							</TouchableOpacity>
						</View>
					</View>
					</View>
						<TouchableOpacity style={styles.submitButton} onPress={this.completeOrder}>
							<Text style={styles.submitText}>Continue</Text>
						</TouchableOpacity>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
	return {
		basket: state.basket,
		activeUser: state.user.userInfo
	}
}

export default connect(mapStateToProps)(Basket)