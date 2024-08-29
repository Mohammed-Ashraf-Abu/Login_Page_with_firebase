import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

import {EmailAuth, GoogleAuth, LogIn_Successful, LogOut_Successful} from './actionTypes';

export const isLoginAction = () => {
  return {
    type: LogIn_Successful,
  };
};

export const isLogoutAction = () => {
  return async dispatch => {
    try {
      const logOut = await auth()
        .signOut()
        .then(
          dispatch({
            type: LogOut_Successful,
          }),
        );
    } catch (error) {
      console.log(error);
    }
  };
};
export const isGoogleSuccess = () => {
  // GoogleSignin.configure({
  //   webClientId:
  //     '1058918694054-siksimc9o0cda7c2cuhnti7bek847ei0.apps.googleusercontent.com',
  // });
  return async dispatch => {
     GoogleSignin.configure({
       webClientId:
         '1058918694054-siksimc9o0cda7c2cuhnti7bek847ei0.apps.googleusercontent.com',
     });
    try {
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
      const {idToken} = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      const sig_in = await auth().signInWithCredential(googleCredential);
      dispatch({
        type: GoogleAuth
      })
      
    } catch (error)
    {
      console.log(error)
    }
  }
}

export const isEmailSuccess = (email, pass) => {
  return async dispatch => {
    try {
      const credential = await auth().signInWithEmailAndPassword(email, pass);
      Alert.alert('Login Successful', `Welcome ${credential.user.email}`);

      dispatch({
        type: EmailAuth,
        payload: credential.user.email,
      });
    } catch (error) {
      console.log('Error during sign-in:', error);
      Alert.alert('Login Error', error.message);
    }
  };
};
