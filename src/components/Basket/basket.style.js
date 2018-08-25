import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between'
    },
    items: {
        backgroundColor: '#fff',
        marginHorizontal: 10,
        marginTop: 15
    },
    basketInfo: {
        marginVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        alignItems: 'center'  
    },
    itemAddButton: {
        marginTop: 10,
        paddingHorizontal: 10,
        paddingVertical: 3,
        borderColor: 'orange',
        borderWidth: 1,
    },
    buttonText: {
        textAlign: 'center',
        color: 'orange',
        fontSize: 16
    },
    totalSumText: {
        fontWeight: '800',
        fontSize: 20
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
    errMessage: {
        marginTop: 10,
        fontSize: 22,
        textAlign: 'center'
    }
})