// import React, { useState } from 'react'
import { Provider } from 'react-redux'
import Routes from './src/navigation/Routes'
import store, { persist } from './src/redux/store'
import {PersistGate} from 'redux-persist/integration/react';
import Loading from './src/screen/Loading';

export default function App() {

  return (
    <Provider store={store}>
      <PersistGate loading={<Loading/>} persistor={persist}>
        <Routes />
      </PersistGate>
    </Provider>
  );
}
