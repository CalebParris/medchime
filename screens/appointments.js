import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Appointments(){
    return(
        <View style={styles.container}>
            <Text>Appointments Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 24
    }
})