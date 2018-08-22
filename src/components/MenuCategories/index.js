import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'

import styles from './menuCategories.style'
import Items from './Items'
import actions from '../../modules/actions'
import Header from '../Header'

class MenuCategories extends Component {

	static navigationOptions = {
		header: null
	}

	state = {
		errMessage: ''
	}

	componentDidMount() {
		const menuId = this.props.navigation.state.params.id

		this.getMenuItems(menuId)
	}
	
	goBack = () => this.props.navigation.goBack()

	getMenuItems = (id) => {
		this.props.dispatch(actions.food.getItemsFromCategory(id))
		.catch(err => this.setState({ errMessage: err.data }))
	}

  render() {
		const categoryName = this.props.navigation.state.params.name

    return (
      <View style={styles.container}>
				<Header action={this.goBack} iconName="arrow-bold-left" title={ categoryName } navigation={this.props.navigation} />
				<View>
					{
						this.state.errMessage ?
						<Text style={styles.errMessage}>{this.state.errMessage}</Text>
						:
						this.props.menuItems.map(item => <Items key={item.id} item={item} />)
					}
				</View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
	return {
		menuItems: state.food.filteredItems,
		totalProducts: state.basket.totalProducts
	}
}

export default connect(mapStateToProps)(MenuCategories)