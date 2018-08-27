import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    order: {
        backgroundColor: '#fff',
        margin: 10,
        paddingVertical: 10
    },
    orderDetails: {
        flexDirection: 'row',
        padding: 10,
        paddingTop: 0
    },
    orderTop: {
        flexGrow: 1,
        marginLeft: 5
    },
    orderHeading: {
        fontSize: 15,
        fontWeight: '800'
    },
    orderPrice: {
        flex: 1,
        textAlign: 'right',
        color: 'orange',
        fontSize: 15,
        fontWeight: '800'
    },
    item: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#d3d3d3',
        paddingVertical: 3,
        paddingHorizontal: 10,
        marginBottom: 10
    },
    itemDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderWidth: 1,
        borderColor: '#d3d3d3',
        alignSelf: 'center'
    },
    buttonText: {
        fontWeight: '600'
    }
})