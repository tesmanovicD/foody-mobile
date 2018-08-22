import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
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
            return console.warn("Quantity must be minimum 1")
        }
        const item = {
            id: this.props.item.id,
            name: this.props.item.name,
            price: this.props.item.price,
            quantity: this.state.quantity
        }

        this.props.dispatch(actions.basket.addItem(item))
        this.setState({ quantity: 0 })
        this.hideModal();
    }

    render() {
        return (
        <View style={styles.container}>
            <Text>avatar</Text>
            <View style={styles.test}>
                <View>       
                    <Text style={styles.itemTitle}>{this.props.item.name}</Text>
                    <Text style={styles.itemDescription}>Description</Text>
                </View>
                
                <View>
                    <Text style={styles.itemPrice}>{this.props.item.price} RSD</Text>
                    <TouchableOpacity style={styles.itemAddButton} onPress={this.showModal}>
                        <Text style={styles.buttonText}>Add</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Modal isVisible={this.state.showModal} onBackButtonPress={this.hideModal} onBackdropPress={this.hideModal}>
                <View style={styles.itemPreview}>
                    <View>
                        <Text>avatar</Text>
                        <Text style={styles.itemPrice}>{this.props.item.price}</Text>
                    </View>
                    <View>
                        <View style={styles.itemContent}>
                            <Text style={styles.itemPreviewHeader}>{this.props.item.name}</Text>
                            <Text>Description</Text>
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