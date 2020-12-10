import  { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'black'
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20,
    },
    header: {
        backgroundColor: 'blue',
        padding: 40,
    },
    headerText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 30
    }
    })