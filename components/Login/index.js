import React, { Component } from 'react'
import { Text, TextInput, View, Image, KeyboardAvoidingView, TouchableOpacity, Platform } from 'react-native'
import styles from './login.style'

export class Login extends Component {
	
  render() {
		const platformOffset = Platform.select({
			ios: () => 0,
			android: () => -150
	 	})()
    return (
				<KeyboardAvoidingView behavior='padding' style={styles.container} keyboardVerticalOffset={platformOffset}>
						<View style={styles.logoContainer}>
							<Image style={styles.logo}
								source={require('../../public/img/foody_logo.png')}
								/>
							
						</View>
						<View style={styles.infoContainer}>
							<Text style={styles.title}>Account Informaion</Text>
							<TextInput
								style={styles.textInput}
								keyboardType="email-address"
								returnKeyType="next"
								underlineColorAndroid={'transparent'}
								placeholder="Enter your e-mail"
								placeholderTextColor="#000" 
								onSubmitEditing={() => this.refs.txtPassword.focus()}/>

							<TextInput
								style={styles.textInput}
								secureTextEntry
								underlineColorAndroid={'transparent'}
								placeholder='Enter your password' 
								placeholderTextColor='#000'
								ref={'txtPassword'}/>

							<TouchableOpacity style={styles.buttonContainer}>
								<Text style={styles.buttonText}>SIGN IN</Text>
							</TouchableOpacity>
						</View>
				</KeyboardAvoidingView>
    )
  }
}

export default Login