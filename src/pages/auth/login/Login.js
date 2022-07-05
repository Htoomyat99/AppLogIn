import React, {useState, useContext} from 'react';
import {View, Text, TouchableOpacity, ToastAndroid} from 'react-native';
import RNSecureKeyStore, {ACCESSIBLE} from 'react-native-secure-key-store';

import LoginHeader from '../../../components/login/loginHeader';
import {AuthContext} from '../../../context/context';
import {useLocal} from '../../../hook/useLocal';
import AlertModal from '../../../components/alert/alertModal';
import styles from './style';

const Login = ({navigation}) => {
  const [change, setChange] = useState(true);
  const [email, setEmail] = useState('');
  const [shwoModal, setShowModal] = useState(false);
  const [english, setEnglish] = useState(true);
  const [myanmar, setMyanmar] = useState(false);

  const local = useLocal();
  const {getUserInfo, lang, getLang} = useContext(AuthContext);

  const changeHandler = () => {
    setChange(!change);
  };

  const regHandler = () => {
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
        if (userData.email) {
          navigation.navigate({name: 'Password', params: {change: change}});
          getUserInfo(userData);
          console.log('email >>>', userData.email);
        } else {
          ToastAndroid.show(`Email can't be empty`, ToastAndroid.SHORT);
          alert(local.alert);
        }
      },
      err => {
        console.log(err);
      },
    );
  };

  const loginHandler = () => {
    // let userToken = '1234567890';
    const loginData = RNSecureKeyStore.get('@user.data').then(
      res => {
        console.log(res);
        navigation.navigate({name: 'Password', params: {change: change}});
        console.log('register data >>>', loginData);
        console.log('login data >>>', email);
        // if (email === loginData) {
        //   console.log('tu tl');
        // } else {
        //   navigation.navigate({name: 'Password', params: {change: change}});
        //   console.log('login >>>', email);
        //   console.log(res);
        // }
      },
      err => {
        console.log(err);
      },
    );
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
