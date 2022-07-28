import React, {useState, useContext} from 'react';
import {View, Text, TouchableOpacity, ToastAndroid} from 'react-native';

import LoginHeader from '../../../components/login/loginHeader';
import {AuthContext} from '../../../context/context';
import {useLocal} from '../../../hook/useLocal';
import AlertModal from '../../../components/alert/alertModal';
import {appStorage} from '../../../utils/appStorage';

import styles from './style';

const Login = ({navigation}) => {
  const [change, setChange] = useState(true);
  const [email, setEmail] = useState('');
  const [shwoModal, setShowModal] = useState(false);
  const [english, setEnglish] = useState(true);
  const [myanmar, setMyanmar] = useState(false);

  const local = useLocal();
  const {getUserEmail, getLang} = useContext(AuthContext);

  const changeHandler = () => {
    setChange(!change);
  };

  const regHandler = () => {
    let userToken = 1234567890;

    try {
      appStorage.setItem('@user.email', email);
      appStorage.setItem('@user.userToken', userToken);
      if (email) {
        navigation.navigate({name: 'Password', params: {change: change}});
        getUserEmail(email);
      } else {
        ToastAndroid.show(`Email can't be empty`, ToastAndroid.SHORT);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const loginHandler = () => {
    const loginEmail = appStorage.getItem('@user.email');
    if (email) {
      if (loginEmail === email) {
        navigation.navigate({name: 'Password', params: {change: change}});
        getUserEmail(loginEmail);
      } else {
        ToastAndroid.show('Email Incorrect!', ToastAndroid.SHORT);
      }
    } else {
      ToastAndroid.show('Please fill the input field', ToastAndroid.SHORT);
    }
  };

  const languageHandler = () => {
    setShowModal(true);
  };

  const changeEnglish = () => {
    setEnglish(true);
    setMyanmar(false);
    setShowModal(false);
    getLang('en');
  };

  const changeMyanmar = () => {
    setMyanmar(true);
    setEnglish(false);
    setShowModal(false);
    getLang('mm');
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerStyle}>
        <TouchableOpacity style={{padding: 5}} onPress={languageHandler}>
          <Text>Language</Text>
        </TouchableOpacity>
      </View>
      <LoginHeader
        login={change}
        loginHandler={loginHandler}
        loginTitle={change ? local.Login : local.Register}
        changeHandler={changeHandler}
        loginBtn={change ? local.register : local.login}
        emailValue={email}
        onChangeEmail={value => setEmail(value)}
        regHandler={regHandler}
        alertText={change ? local.noAccount : local.haveAccount}
      />

      {shwoModal && (
        <AlertModal
          changeEnglish={changeEnglish}
          changeMyanmar={changeMyanmar}
          english={english}
          myanmar={myanmar}
        />
      )}
    </View>
  );
};

export default Login;
