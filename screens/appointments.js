import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Appointments(){
    return(
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Appointments Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 24
    }
})