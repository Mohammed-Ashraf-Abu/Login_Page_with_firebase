import React from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import PreStack from './PreStack';
import PostStack from './PostStack';

export default function Routes() {
  const isLogIn = useSelector(state => state.isLogIn);
  console.log(isLogIn);
  return (
    <SafeAreaView style={styles.container}>
      {isLogIn ? <PostStack /> : <PreStack />}
      {/* <PreStack/> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
});
