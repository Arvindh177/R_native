import { View, Text, ScrollView, StyleSheet, TextInput } from "react-native";
import React, {useState} from "react"; 

const FeedbackForm = ()=> {
    const [firstName, onChangeFirstName] = useState('');
    const [lastName, onChangeLastName] = useState('');
    const [message, onChangeMessage] = useState('');
    const [phoneNumber, onChangePhoneNumber] = useState('');
    return (
        <View style={styles.container}>
            <ScrollView indicatorStyle="white">
            <Text style={styles.welcome}> 
            Welcome to Little lemon
            </Text>
            
            <Text style={styles.info}>
            Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!
            </Text>
            <TextInput
            style={styles.input}
            value={firstName}
            onChangeText={onChangeFirstName}
            placeholder="First Name"
            />
            <TextInput
            style={styles.input}
            value={lastName}
            onChangeText={onChangeLastName}
            />
            <TextInput
            style={styles.messageInput}
            value={message}
            onChangeText={onChangeMessage}
            />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems:'flex-start'
    },
    welcome: {
        padding:40,
                fontSize:30,
                color: '#EDEFEE',
                textAlign:'center'
    },
    info: {
        color:'white', 
        fontSize: 23, 
        textAlign:'center', 
        marginVertical:8, 
        padding:20

    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
        borderColor: '#EDEFEE',
        backgroundColor: 'white'
    },
    messageInput: {

        height: 100,
        margin: 12,
        borderWidth: 1,
        fontSize: 16,
        padding: 10,
        backgroundColor: '#F4C414'

    }
}
)
export default FeedbackForm;