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
        alignSelf: 'flex-end',
        backgroundColor: '#41934c',
        paddingVertical: 4,
        paddingHorizontal: 10,
        color: '#fff'
    },
    itemAddButton: {
        marginTop: 10,
        padding: 3,
        borderColor: 'orange',
        borderWidth: 1,
    },
    buttonText: {
        textAlign: 'center'
    },
    itemPreview: {
        backgroundColor: '#fff',
        borderRadius: 2
    },
    itemPreviewHeader: {
        fontSize: 20,
        fontWeight: '800'
    },
    itemContent: {
        paddingLeft: 20,
        paddingVertical: 15,
        borderColor: 'gray',
        borderBottomWidth: 1,
    },
    quantity: {
        flexDirection: 'row',
        paddingLeft: 20,
        paddingTop: 20
    },
    itemButtons: {
        marginVertical: 30,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    itemCloseButton: {
        borderRadius: 3,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 50,
        paddingVertical: 5
    },
    itemBuyButton: {
        borderRadius: 3,
        borderColor: 'orange',
        borderWidth: 1,
        backgroundColor: 'orange',
        paddingHorizontal: 50,
        paddingVertical: 5,
    },
    buyText: {
        color: '#fff'
    },
    test: {
        flexGrow: 2,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
})