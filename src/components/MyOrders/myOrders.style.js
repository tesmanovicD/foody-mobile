import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1
    },
    headerNavigation: {
        flexDirection: 'row',
        backgroundColor: '#fff',
    },
    navItem: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 10
    },
    activeItem: {
        color: 'orange'       
    },
    activeTab: {
        borderBottomWidth: 3,
        borderColor: 'orange'
    },
    navText: {
        fontSize: 17,
        fontWeight: '600'
    },
    errMessage: {
        marginTop: 10,
        fontSize: 22,
        textAlign: 'center'
    }
})