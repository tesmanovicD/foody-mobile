import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between'
    },
    orderTop: {
      marginVertical: 20,
      marginHorizontal: 30,
      borderWidth: 1,
      borderColor: '#d3d3d3',
      backgroundColor: '#fff',
      paddingBottom: 20
    },
    orderInfo: {
        padding: 20,
        paddingBottom: 10
    },
    headingText: {
        textAlign: 'center',
        fontSize: 30,
        letterSpacing: 2,
        fontWeight: "800"
    },
    orderText: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '600',
        marginTop: 30
    },
    orderNumber: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: '800',
        paddingTop: 10,
        borderTopWidth: 1,
        borderColor: '#d3d3d3'
    },
    thanksWindow: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    thanksMessage: {
        fontSize: 25,
        fontWeight: '800',
        color: 'orange'
    },
    submitButton: {
        backgroundColor: 'orange',
        paddingVertical: 10,
        marginBottom: 20,
        marginHorizontal: 10
    },
    submitText: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center'
    },
})