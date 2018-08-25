import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1
    },
    items: {
        backgroundColor: '#fff',
        marginHorizontal: 10,
        marginTop: 15
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
        marginHorizontal: 10
    },
    itemTitle: {
        fontSize: 18,
        fontWeight: "600"
    },
    itemControl: {
        flexDirection: 'row'
    },
    icon: {
        borderRadius: 50,
        borderColor: '#a8a8a8',
        padding: 5,
        borderWidth: 1,
        marginLeft: 10
    }
})