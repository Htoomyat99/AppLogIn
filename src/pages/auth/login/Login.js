import React, {useState, useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import RNSecureKeyStore, {ACCESSIBLE} from 'react-native-secure-key-store';

import LoginHeader from '../../../components/login/loginHeader';
import {AuthContext} from '../../../context/context';

const Login = ({navigation}) => {
  const [change, setChange] = useState(true);
  const [email, setEmail] = useState('');

  // const {} = useContext(AuthContext);

  const changeHandler = () => {
    setChange(!change);
  };

  const passwordHandler = () => {
    let token = '123456790';

    const userData = {
      email: email,
    };

    RNSecureKeyStore.set('@user.token', JSON.stringify(token), {
      accessible: ACCESSIBLE.ALWAYS_THIS_DEVICE_ONLY,
    });
    RNSecureKeyStore.set('@user.data', JSON.stringify(userData), {
      accessible: ACCESSIBLE.ALWAYS_THIS_DEVICE_ONLY,
    }).then(
      res => {
        console.log(res);
        console.log('usreData', userData);
        console.log('usertoken', token);
      },
      err => {
        console.log(err);
      },
    );
  };

  // console.log('emailValue >>' , email);

  return (
    <LoginHeader
      goPassword={passwordHandler}
      loginTitle={change ? 'Login' : 'Register'}
      changeHandler={changeHandler}
      loginBtn={change ? 'register' : 'login'}
      emailValue={email}
      onChangeEmail={value => setEmail(value)}
    />
  );
};

export default Login;
