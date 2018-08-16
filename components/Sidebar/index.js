import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import styles from './sidebar.style'

export default class Sidebar extends Component {

	navigate = (route) => {
		this.props.navigation.navigate(route)
	}

  render() {
		const { links } = styles 
    const routes = [
        { title: "Home", route: "home" },
        { title: "Login", route: "login" },
    ]

    return (
      <View>
        {
        	routes.map((r, key) => (
						<TouchableOpacity onPress={() => this.navigate(r.route)} key={key} >
							<Text style={links}>{r.title}</Text>
						</TouchableOpacity>
					))
        }
      </View>
    )
  }
}