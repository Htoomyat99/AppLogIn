import {View, Text} from 'react-native';
import React, {useState} from 'react';

import PasswordHeader from '../../../components/register/PasswordHeader';

const Password = ({route}) => {
  // const {change} = route.params;
  const [pass, setPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');

  // console.log('pass >>', pass);
  // console.log('confrimpass >>', confirmPass);

  return (
    <PasswordHeader
      loginBtn={route.params.change ? 'Login' : 'Register'}
      login={route.params.change}
      passValue={pass}
      onChangePass={value => setPass(value)}
      confirmPassValue={confirmPass}
      onChangeConfirmPass={value => setConfirmPass(value)}
    />
  );
};

export default Password;
