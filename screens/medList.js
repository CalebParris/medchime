import React from 'react';
import { Text, View } from 'react-native';
import { globalStyles } from '../styles/global';

export default function MedList(){
    return(
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Medication List Screen</Text>
        </View>
    )
}