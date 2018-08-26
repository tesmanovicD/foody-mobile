import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import styles from './sidebar.style'

class Sidebar extends Component {

	navigate = (route) => {
		this.props.navigation.navigate(route)
	}

  render() {
		const { links } = styles 
    const routes = [
        { title: "Home", route: "home" , display: this.props.loggedIn },
        { title: "Login", route: "login", display: !this.props.loggedIn },
        { title: "Basket", route: "basket", display: this.props.loggedIn },
        { title: "My Orders", route: "myOrders", display: this.props.loggedIn }
    ]

    return (
      <View>
        {
        	routes.map((r, key) => (
            r.display &&
						<TouchableOpacity onPress={() => this.navigate(r.route)} key={key} >
							<Text style={links}>{r.title}</Text>
						</TouchableOpacity>
					))
        }
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.user.loggedIn
  }
}

export default connect(mapStateToProps)(Sidebar)