import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function MedList(){
    return(
        <View style={styles.container}>
            <Text>Medication List Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 24
    }
})