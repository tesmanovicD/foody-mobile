import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import Modal from 'react-native-modal'
import NumericInput,{ calcSize } from 'react-native-numeric-input'

import styles from './items.style'

class Items extends Component {

    state = {
        showModal: false,
        quantity: 0
    }

    hideModal = () => this.setState({ showModal: false })
    showModal = () => this.setState({ showModal: true })

    addToCart = () => {
        const item = {
            id: this.props.item.id,
            quantity: this.state.quantity
        }
        console.warn(item)
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
                                maxValue={10}
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


export default Items