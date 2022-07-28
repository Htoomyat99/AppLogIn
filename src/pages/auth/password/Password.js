import {ToastAndroid} from 'react-native';
import React, {useState, useContext} from 'react';
import RNSecureKeyStore, {ACCESSIBLE} from 'react-native-secure-key-store';

import PasswordHeader from '../../../components/register/PasswordHeader';
import {AuthContext} from '../../../context/context';
import {appStorage} from '../../../utils/appStorage';

const Password = ({route}) => {
  const [pass, setPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');

  const {getAuth, getUserPass} = useContext(AuthContext);

  const registerHandler = () => {
    let passToken = '1234567890';

    try {
      appStorage.setItem('@user.pass', pass);
      appStorage.setItem('@user.passToken', passToken);
      if (pass && confirmPass) {
        if (pass === confirmPass) {
          getAuth(true);
          getUserPass(pass);
          ToastAndroid.show('Login Successful!', ToastAndroid.SHORT);
        } else {
          ToastAndroid.show(
            'password and confirm password must be same!',
            ToastAndroid.SHORT,
          );
        }
      } else {
        ToastAndroid.show('Please fill the input fields', ToastAndroid.SHORT);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const loginHandler = () => {
    let token = '1234567890';
    const loginPass = appStorage.getItem('@user.pass');
    if (pass) {
      if (loginPass === pass) {
        getAuth(true);
        getUserPass(loginPass);
        appStorage.setItem('@user.token', token);
        ToastAndroid.show('Login Successful!', ToastAndroid.SHORT);
      } else {
        ToastAndroid.show('Incorrect Password!', ToastAndroid.SHORT);
      }
    } else {
      ToastAndroid.show('Please fill the input field', ToastAndroid.SHORT);
    }
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
