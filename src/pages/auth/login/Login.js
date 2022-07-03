import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import LoginHeader from '../../../components/login/loginHeader';

const Login = ({navigation}) => {
  const [change, setChange] = useState(true);

  const changeHandler = () => {
    setChange(!change);
  };

  return (
    <LoginHeader
      goPassword={() =>
        navigation.navigate({name: 'Password', params: {change: change}})
      }
      loginTitle={change ? 'Login' : 'Register'}
      changeHandler={changeHandler}
      loginBtn={change ? 'register' : 'login'}
    />
  );
};

export default Login;
