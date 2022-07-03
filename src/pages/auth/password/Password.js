import {View, Text} from 'react-native';
import React, {useState} from 'react';

import PasswordHeader from '../../../components/register/PasswordHeader';

const Password = ({route}) => {
  // const {change} = route.params;

  return (
    <PasswordHeader
      loginBtn={route.params.change ? 'Login' : 'Register'}
      login={route.params.change}
    />
  );
};

export default Password;
