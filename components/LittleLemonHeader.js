import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function LittleLemonHeader() {
    return (
        <View style=
        {styles.background}>
            <Text style={styles.headerText}>
             Little Lemon    
        </Text></View>
    );
}
const styles = StyleSheet.create({
    background: {
        backgroundColor: '#EE9972'
    },
    headerText: {
        padding:40,fontWeight:'bold', fontSize: 30, color:'black', textAlign:'center'
    }
})