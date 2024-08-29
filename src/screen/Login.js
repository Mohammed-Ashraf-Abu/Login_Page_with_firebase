import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Alert, KeyboardAvoidingView, StyleSheet, Text} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {isEmailSuccess, isGoogleSuccess} from '../redux/action/action_Type';
import Google from '../auth/Google';

export default function Login() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const nav = useNavigation();
  const dispatch = useDispatch();

  const handleEmail = () => {
    if (email === '' || pass === '') {
      Alert.alert('Enter the email and password');
    } else {
      dispatch(isEmailSuccess(email, pass));
    }
  };

  const handleGoogle = () => {
    dispatch(isGoogleSuccess());
  }

  return (
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={100}
      style={styles.container}>
      <TextInput
        onChangeText={text => {
          setEmail(text);
        }}
        style={styles.textBox}
        label="Email"
      />
      <TextInput
        onChangeText={text => {
          setPass(text);
        }}
        style={styles.textBox}
        label="Password"
      />
      <Button style={styles.loginButton} mode="contained" onPress={handleEmail}>
        Login
      </Button>
      <Text
        style={{color: 'blue', paddingTop: 10, textDecorationLine: 'underline'}}
        onPress={() => {
          nav.navigate('Forget');
        }}>
        ForgetPassword ..?
      </Text>
      <Text
        style={{color: 'blue', paddingTop: 10, textDecorationLine: 'underline'}}
        onPress={() => {
          nav.navigate('Signup');
        }}>
        Sig-Up{' '}
      </Text>
      <Button
        style={styles.loginButton}
        mode="contained"
        title="Google Sign-in"
        onPress={handleGoogle}>
        Google Sign-in
      </Button>
      {/* <Google /> */}
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    height: 400,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBox: {
    width: 300,
    marginBottom: 5,
  },
  loginButton: {
    width: 250,
    marginTop: 10,
    alignSelf: 'center',
    textAlign: 'center',
  },
});
