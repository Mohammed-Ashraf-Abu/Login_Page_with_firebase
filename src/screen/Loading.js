import React from 'react'
import { SafeAreaView,Text } from 'react-native';
export default function Loading() {
    return (
      <SafeAreaView
        style={{
          backgroundColor: 'green',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>Loading screen</Text>
      </SafeAreaView>
    );
}
