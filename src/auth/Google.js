import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import React from 'react';
import {Button, Text, View} from 'react-native';
import {isLoginAction} from '../redux/action/action_Type';
import {useDispatch} from 'react-redux';

export default function Google() {
  const dispatch = useDispatch();
  GoogleSignin.configure({
    webClientId:
      '1058918694054-siksimc9o0cda7c2cuhnti7bek847ei0.apps.googleusercontent.com',
  });

  async function onGoogleButtonPress() {
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    const {idToken} = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    const sig_in = await auth().signInWithCredential(googleCredential)
    //   .then(dispatch(isLoginAction()))
    // .catch(error => console.log(error));
    dispatch(isLoginAction())

  }

  return (
    <View>
      <Text style={{textAlign: 'center', marginTop: 10, marginBottom: 10}}>
        or
      </Text>
      <Button
        title="Sign-In By Google"
        onPress={() =>
          onGoogleButtonPress().then(() => {
            console.log('Login Successfull');
          })
        }
      />
    </View>
  );
}
