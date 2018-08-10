import React from 'react'
import { Text, View } from 'react-native'

import styles from './item.style'

const Item = (props) => (
    <View style={styles.container}>
        
        <Text>avatar</Text>
        <View style={styles.test}>
            <View>       
                <Text style={styles.itemTitle}>{props.item.name}</Text>
                <Text style={styles.itemDescription}>Description</Text>
            </View>
            
            <View>
                <Text style={styles.itemPrice}>{props.item.price} RSD</Text>
                <Text style={styles.itemPrice}> ADD</Text>
            </View>
        </View>
    </View>
)

export default Item