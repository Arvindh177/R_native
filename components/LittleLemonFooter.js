import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function LittleLemonFooter() {
    return(
        <View style={styles.background}>
            <Text style={styles.footerText}>
                All rights reserved by Little Lemon, 2022
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    background: {
        paddingBottom:10,
        backgroundColor:'#EE9972',
        bottom:0,
        position:'absolute',
        width:'100%',
        alignItems:'center'
    },
    footerText: {
        fontSize:14,
        color:'black'

    }
})