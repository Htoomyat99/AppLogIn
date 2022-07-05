import {ToastAndroid} from 'react-native';
import React, {useState, useContext} from 'react';
import RNSecureKeyStore, {ACCESSIBLE} from 'react-native-secure-key-store';

import PasswordHeader from '../../../components/register/PasswordHeader';
import {AuthContext} from '../../../context/context';

const Password = ({route}) => {
  // const {change} = route.params;
  const [pass, setPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');

  const {getAuth, getUserInfo} = useContext(AuthContext);

  const registerHandler = () => {
    console.log('register work');
    let token = '1234567890';

    const userData = {
      pass: pass,
      confirmPass: confirmPass,
    };

    RNSecureKeyStore.set('@user.passToken', JSON.stringify(token), {
      accessible: ACCESSIBLE.ALWAYS_THIS_DEVICE_ONLY,
    });
    RNSecureKeyStore.set('@user.passData', JSON.stringify(userData), {
      accessible: ACCESSIBLE.ALWAYS_THIS_DEVICE_ONLY,
    }).then(
      res => {
        console.log(res);
        if (userData.pass === confirmPass) {
          getAuth(true);
          getUserInfo(userData);
          console.log('passuserData>>>', userData);
        } else {
          ToastAndroid.show(
            'password and confirm password must be same!',
            ToastAndroid.SHORT,
            ToastAndroid.TOP,
          );
          alert('password and confirm password must be same!');
        }
      },
      err => {
        console.log(err);
      },
    );
  };

  const loginHandler = () => {
    const passData = RNSecureKeyStore.get('@user.passData').then(
      res => {
        console.log(res);
        // if check
        getAuth(true);
        getUserInfo(passData);
        console.log('passData >>>', passData);
        console.log('loginpass >>>', pass);
      },
      err => {
        console.log(err);
      },
    );
  };

  return (
    <PasswordHeader
      login={route.params.change}
      passValue={pass}
      onChangePass={value => setPass(value)}
      confirmPassValue={confirmPass}
      onChangeConfirmPass={value => setConfirmPass(value)}
      loginHandler={loginHandler}
      registerHandler={registerHandler}
    />
  );
};

export default Password;
