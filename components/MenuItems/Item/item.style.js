import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderColor: '#d6d7da',
        borderBottomWidth: 2,
        padding: 10,
        alignItems: 'center'
    },
    itemTitle: {
        fontSize: 18,
        fontWeight: "800",
    },
    itemDescription: {
        color: '#f00'
    },
    itemPrice: {
        alignSelf: 'flex-end'
    },
    test: {
        flexGrow: 2,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
})