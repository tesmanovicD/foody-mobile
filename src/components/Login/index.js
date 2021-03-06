import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, TextInput, View, Image, KeyboardAvoidingView, TouchableOpacity, Platform, ToastAndroid } from 'react-native'

import styles from './login.style'
import actions from '../../modules/actions'

class Login extends Component {
	
	static navigationOptions = {
		header: null,
	}

	state = {
		email: '',
		password: ''
	}

	authenticateUser = () => {
		
		const { email, password } =this.state
		this.props.dispatch(actions.user.authenticateUser(email, password))
		.then(() => {
			this.props.navigation.navigate('home')
		})
		.catch(err => ToastAndroid.show(err.data, ToastAndroid.SHORT))
	}

	render() {
		const platformOffset = Platform.select({
			ios: () => 0,
			android: () => -210
		})()
		 
		return (
			<KeyboardAvoidingView behavior='padding' style={styles.container} keyboardVerticalOffset={platformOffset}>
				<View style={styles.logoContainer}>
					<Image style={styles.logo}
						source={require('../../../public/img/foody_logo.png')}
						/>
				</View>

				<View style={styles.infoContainer}>
					<Text style={styles.title}>Account Informaion</Text>
					<TextInput
						style={styles.textInput}
						onChangeText={email => this.setState({ email })}
						returnKeyType="next"
						underlineColorAndroid={'transparent'}
						placeholder="Enter your e-mail"
						placeholderTextColor="#000"
						onSubmitEditing={() => this.refs.txtPassword.focus()}/> 

					<TextInput
						style={styles.textInput}
						secureTextEntry
						onChangeText={password => this.setState({ password })}
						underlineColorAndroid={'transparent'}
						placeholder='Enter your password' 
						placeholderTextColor='#000'
						ref={'txtPassword'}/>

					<TouchableOpacity style={styles.buttonContainer} onPress={this.authenticateUser}>
						<Text style={styles.buttonText}>SIGN IN</Text>
					</TouchableOpacity>
				</View>
			</KeyboardAvoidingView>
		)
	}
}

export default connect()(Login)