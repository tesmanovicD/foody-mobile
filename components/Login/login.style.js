import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column',
    },
    logoContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: 258,
        height: 133
    },
    title: {
        fontSize: 18,
        opacity: 0.9,
        alignSelf: "center",
        marginBottom: 15
    },
    infoContainer: {
        flex: 1,
        padding: 20
    },
    textInput: {
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        height: 40,
        paddingHorizontal: 20,
        color: '#fff',
        marginBottom: 20
    },
    buttonContainer: {
        backgroundColor: '#68482F'
    },
    buttonText: {
        color: '#fff',
        paddingVertical: 10,
        textAlign: 'center',
        fontSize: 15
    }
})