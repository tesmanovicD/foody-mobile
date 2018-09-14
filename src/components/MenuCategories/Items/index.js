import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image, ToastAndroid } from 'react-native'
import Modal from 'react-native-modal'
import NumericInput,{ calcSize } from 'react-native-numeric-input'
import { connect } from 'react-redux'

import styles from './items.style'
import actions from '../../../modules/actions'

class Items extends Component {

    state = {
        showModal: false,
        quantity: 0
    }

    hideModal = () => this.setState({ showModal: false })
    showModal = () => this.setState({ showModal: true })

    addToCart = () => {
        if (this.state.quantity < 1) {
            return ToastAndroid.show('Quantity must be minimum 1', ToastAndroid.SHORT)
        }
        const item = {
            id: this.props.item.id,
            name: this.props.item.name,
            price: this.props.item.price,
            quantity: this.state.quantity
        }

        this.props.dispatch(actions.basket.addItem(item))
        this.setState({ quantity: 0 })
        this.hideModal()
    }

    render() {
        return (
        <View style={styles.container}>
            <Image
                style={{width: 90, height: 60, alignSelf: 'center', borderRadius: 20}}
                source={{uri: `https://sheltered-coast-98280.herokuapp.com/uploads/food/${this.props.item.image}`}}
                resizeMode="stretch" 
            />
            <View style={styles.test}>
                <View>       
                    <Text style={styles.itemTitle}>{this.props.item.name}</Text>
                    <Text style={styles.itemDescription}>{this.props.item.description}</Text>
                </View>
                
                <View>
                    <Text style={styles.itemPrice}>$ {this.props.item.price.toFixed(2)}</Text>
                    <TouchableOpacity style={styles.itemAddButton} onPress={this.showModal}>
                        <Text style={styles.buttonText}>Add</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Modal isVisible={this.state.showModal} onBackButtonPress={this.hideModal} onBackdropPress={this.hideModal}>
                <View style={styles.itemPreview}>
                    <View style={{height: 150}}>
                        <Image
                            style={{flex:1, position: 'relative'}}
                            source={{uri: `https://sheltered-coast-98280.herokuapp.com/uploads/food/${this.props.item.image}`}}
                            resizeMode="stretch"
                        />
                        <Text style={[styles.itemPrice, {flex: 0.5, position: 'absolute', 'top': 20}]}>$ {this.props.item.price.toFixed(2)}</Text>
                    </View>
                    <View>
                        <View style={styles.itemContent}>
                            <Text style={styles.itemPreviewHeader}>{this.props.item.name}</Text>
                            <Text>{this.props.item.description}</Text>
                        </View>
                        <View style={styles.quantity}>
                            <Text style={styles.itemPreviewHeader}>Quantity</Text>
                            <NumericInput 
                                value={this.state.quantity} 
                                onChange={quantity => this.setState({quantity})}
                                minValue={0}
                                maxValue={this.props.item.quantity}
                                containerStyle={{marginLeft: 20}} 
                                totalWidth={calcSize(240)} 
                                totalHeight={calcSize(50)} 
                                iconSize={calcSize(25)}
                                step={1}
                                valueType='real'
                                rounded 
                                iconStyle={{ color: 'black' }} />
                        </View>

                        <View style={styles.itemButtons}>
                            <TouchableOpacity style={styles.itemCloseButton} onPress={this.hideModal}>
                                <Text>Close</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.itemBuyButton} onPress={this.addToCart}>
                                <Text style={styles.buyText}>Add to cart</Text>
                            </TouchableOpacity>
                        </View>
                    </View>                    
                 </View>
            </Modal>
        </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        basket: state.basket
    }
}

export default connect(mapStateToProps)(Items)