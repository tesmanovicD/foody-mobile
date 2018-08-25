import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Button } from 'react-native'
import { connect } from 'react-redux'

import styles from './basket.style'
import actions from '../../modules/actions'
import Header from '../Header'
import BasketItem from './BasketItem';

class Basket extends Component {

	static navigationOptions = {
		header: null
	}
	
	goBack = () => this.props.navigation.goBack()

	goToBasket = () => this.props.navigation.navigate('basket')

	backToMenu = () => this.props.navigation.navigate('home')

	completeOrder = () => this.props.navigation.navigate('completeOrder')

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
								<BasketItem item={p} key={p.id} />
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
		basket: state.basket
	}
}

export default connect(mapStateToProps)(Basket)