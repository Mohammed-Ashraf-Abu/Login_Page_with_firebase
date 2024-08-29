import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert, KeyboardAvoidingView, SafeAreaView, StyleSheet } from 'react-native';
import { Button, TextInput } from 'react-native-paper';



export default function Signup() {
    const [email,setEmail]=useState()
    const [pass,setPass]=useState()
    const nav=useNavigation()

 async function handleLogin(email,pass) 
 { 
    try {
        const credential = await auth().createUserWithEmailAndPassword(email, pass);
        Alert.alert('User Created Successfull', `Welcome ${credential.user.email}`);
        // console.log(credential)
        if(credential.user.email)
        {
            nav.navigate("Login")
        }
        else
        {
            Alert.alert("Login Failed ")
        }
    } 
    catch (error) {
        console.log('Error during sign-in:', error);
        Alert.alert('Login Error', error.message);
    }
  };
    
  return (
    <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView></KeyboardAvoidingView>
        <TextInput onChangeText={(text)=>{setEmail(text)}} style={styles.textBox} label="Email"/> 
        <TextInput onChangeText={(text)=>{setPass(text)}} style={styles.textBox} label="Password"/>
        <Button 
        style={styles.loginButton}
        mode="contained"
        onPress={()=>handleLogin(email,pass).then(console.log("Success"))}>Create User</Button> 
 
    </SafeAreaView>
  )}

const styles=StyleSheet.create(
    {
        container:{
            padding:10,
            borderColor:"black",
            borderWidth:1,
            borderRadius:10,
            height:"50%",
            justifyContent:"center",
            alignItems:'center',
        },
        textBox:{
            width:300,
            marginBottom:5,
            
        },
        loginButton:
        {
            width:250,
            alignSelf:"center",
            textAlign:"center",
            marginTop:10,

        }
    }

)
