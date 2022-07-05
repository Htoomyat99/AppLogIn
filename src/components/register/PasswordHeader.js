import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import CheckBox from '@react-native-community/checkbox';

import styles from './style';
import {useLocal} from '../../hook/useLocal';

const PasswordHeader = props => {
  const [remember, setRemember] = useState(false);
  const local = useLocal();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{local.security}</Text>

      <TextInput
        value={props.passValue}
        placeholder={local.passwordPlaceholder}
        style={styles.passInput}
        secureTextEntry={true}
        onChangeText={props.onChangePass}
      />

      {props.login ? (
        <View style={styles.alertContainer}>
          <CheckBox
            disabled={false}
            value={remember}
            onValueChange={value => setRemember(value)}
          />
          <Text style={styles.alertText}>{local.rememberpass}</Text>
        </View>
      ) : (
        <TextInput
          value={props.confirmPassValue}
          placeholder={local.confirmpass}
          secureTextEntry={true}
          style={styles.confirmPassInput}
          onChangeText={props.onChangeConfirmPass}
        />
      )}

      {props.login ? (
        <TouchableOpacity onPress={props.loginHandler}>
          <Text style={styles.loginContainer}>{local.Login}</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={props.registerHandler}>
          <Text style={styles.loginContainer}>{local.Register}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default PasswordHeader;
