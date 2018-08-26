import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1
    },
    headerNavigation: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        paddingVertical: 10
    },
    navItem: {
        flex: 1,
        alignItems: 'center'
    },
    navText: {
        fontSize: 17,
        fontWeight: '600'
    },
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
    orderStatus: {
        color: 'orange'
    },
    orderPrice: {
        flex: 1,
        textAlign: 'right',
        color: 'orange',
        fontSize: 15,
        fontWeight: '800'
    },
    itemDetails: {
        flexDirection: 'row',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#d3d3d3',
        paddingVertical: 3,
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        marginBottom: 10
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