import React, {useState, useContext, useEffect} from 'react';
import {View, Text} from 'react-native';
import RNSecureKeyStore, {ACCESSIBLE} from 'react-native-secure-key-store';

import AuthStack from './stack/authStack';
import DashboardStack from './stack/dashboardStack';
import {AuthContext} from '../context/context';

const AppNavigator = () => {
  const [auth, setAuth] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  // const context = {};

  const getData = () => {
    const data = RNSecureKeyStore.get('@user.token');
    const userData = RNSecureKeyStore.get('@user.data').then(
      res => {
        console.log(res);
        if (data) {
          // setAuth(true);
          setUserInfo(userData);
        } else {
          setAuth(false);
        }
      },
      err => {
        console.log(err);
      },
    );
  };

  if (auth) {
    return <DashboardStack />;
  } else {
    return <AuthStack />;
  }
};

export default AppNavigator;
