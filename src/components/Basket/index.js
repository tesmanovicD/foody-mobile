import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'

import styles from './basket.style'
import actions from '../../modules/actions'
import Header from '../Header'

class Basket extends Component {

	static navigationOptions = {
		header: null
	}
	
	goBack = () => this.props.navigation.goBack()

	calculatePrice = (price, quantity) => {
		return `$${price * quantity}`;
	}

  render() {

    return (
      <View style={styles.container}>
				<Header action={this.goBack} iconName="arrow-bold-left" title="Your Cart" navigation={this.props.navigation} />
					<View style={styles.items}>
						{this.props.basket.products.map(p => (
							<View>
								<View>
									<Text>{p.quantity > 1 && `${p.quantity} x`} {p.name}</Text>
									
									<Text>{p.quantity > 1 && `${p.quantity} x ${p.price} =` }{this.calculatePrice(p.price, p.quantity)}</Text>
								</View>
								<View></View>
							</View>
						))}
						<Text>Total: $ {this.props.basket.totalSum}</Text>
					</View>
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