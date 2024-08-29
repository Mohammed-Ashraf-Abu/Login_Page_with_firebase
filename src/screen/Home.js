import React from 'react';
import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {isLogoutAction} from '../redux/action/action_Type';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home() {
  const dispatch = useDispatch();
  const status = useSelector(state => state.isLogIn);
  console.log(status);

  const showStorage = () => {
    AsyncStorage.getItem('persist:root')
      .then(data => console.log(data))
      .catch(error => {
        console.log(error)
      })
    
    
  }
  const handleClear = () => {
    AsyncStorage.clear()
      .then(() => {
        console.log('AsyncStorage has been cleared.');
      })
      .catch(error => {
        console.log('Error clearing AsyncStorage:', error);
      });
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: 'cyan',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>Home screen</Text>
      <Button
        onPress={() => {
          dispatch(isLogoutAction());
        }}
        title="Sign-Out"></Button>
      <View style={style.buttonContainer}>
        <Button
          style={style.button}
          onPress={handleClear}
          title="Clear Storage"
        />
        <Button
          style={style.button}
          onPress={showStorage}
          title="Show Storage"
        />
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create(
  {
    buttonContainer: {
      flexDirection:"row"
    },
    button: {
      
    }
  }
)
