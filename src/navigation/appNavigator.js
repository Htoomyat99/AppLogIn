import React, {useState, useContext, useEffect} from 'react';
import {View, Text} from 'react-native';
import RNSecureKeyStore, {ACCESSIBLE} from 'react-native-secure-key-store';
import {NavigationContainer} from '@react-navigation/native';

import AuthStack from './stack/authStack';
import DashboardStack from './stack/dashboardStack';
import {AuthContext} from '../context/context';
import SplashScreen from '../components/splashScreen/splashScreen';

const AppNavigator = () => {
  const [auth, setAuth] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [splash, setSplash] = useState(true);
  const [lang, setLang] = useState('en');

  useEffect(() => {
    getData();
  }, []);

  const context = {
    lang,
    getAuth: value => {
      setAuth(value);
    },
    getUserInfo: value => {
      setUserInfo(value);
    },
    getLang: value => {
      setLang(value);
    },
  };

  const getData = () => {
    const data = RNSecureKeyStore.get('@user.token');
    const userData = RNSecureKeyStore.get('@user.data').then(
      res => {
        console.log(res);
        if (data) {
          // setAuth(true);
          setUserInfo(userData);
          console.log('appnavi register >>>', userData);
          setTimeout(() => {
            setSplash(false);
          }, 1200);
        } else {
          setAuth(false);
          setTimeout(() => {
            setSplash(false);
          }, 1200);
        }
      },
      err => {
        console.log(err);
      },
    );
  };

  if (splash) {
    return (
      <AuthContext.Provider value={context}>
        <SplashScreen />
      </AuthContext.Provider>
    );
  } else if (auth) {
    return (
      <AuthContext.Provider value={context}>
        <NavigationContainer>
          <DashboardStack />
        </NavigationContainer>
      </AuthContext.Provider>
    );
  } else {
    return (
      <AuthContext.Provider value={context}>
        <NavigationContainer>
          <AuthStack />
        </NavigationContainer>
      </AuthContext.Provider>
    );
  }
};

export default AppNavigator;
