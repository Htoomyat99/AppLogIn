import React, {useState, useContext, useEffect} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import AuthStack from './stack/authStack';
import DashboardStack from './stack/dashboardStack';
import {AuthContext} from '../context/context';
import SplashScreen from '../components/splashScreen/splashScreen';
import {appStorage} from '../utils/appStorage';

const AppNavigator = () => {
  const [auth, setAuth] = useState(false);
  const [userEmail, setUserEmail] = useState(null);
  const [userPass, setUserPass] = useState(null);
  const [splash, setSplash] = useState(true);
  const [lang, setLang] = useState('en');

  useEffect(() => {
    getData();
  }, []);

  const context = {
    lang,
    userEmail,
    getAuth: value => {
      setAuth(value);
    },
    getUserEmail: value => {
      setUserEmail(value);
    },
    getUserPass: value => {
      setUserPass(value);
    },
    getLang: value => {
      setLang(value);
    },
  };

  const getData = () => {
    try {
      const loginToken = appStorage.getItem('@user.token');
      const logoutToken = appStorage.getItem('@user.passToken');
      const emailData = appStorage.getItem('@user.email');
      const passData = appStorage.getItem('@user.pass');
      if (loginToken || logoutToken) {
        setAuth(true);
        setUserEmail(emailData);
        setUserPass(passData);
        setTimeout(() => {
          setSplash(false);
        }, 1000);
      } else {
        setAuth(false);
        setTimeout(() => {
          setSplash(false);
        }, 1000);
      }
    } catch (error) {
      console.log(error);
      setAuth(false);
    }
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
