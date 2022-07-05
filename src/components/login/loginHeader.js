import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';

import styles from './style';
import {useLocal} from '../../hook/useLocal';

const LoginHeader = props => {
  const local = useLocal();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.loginTitle}</Text>

      <TextInput
        value={props.emailValue}
        placeholder={local.emailPlaceholder}
        style={styles.emailInput}
        onChangeText={props.onChangeEmail}
      />

      {props.login ? (
        <TouchableOpacity onPress={props.loginHandler}>
          <Text style={styles.next}>{local.next}</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={props.regHandler}>
          <Text style={styles.next}>{local.next}</Text>
        </TouchableOpacity>
      )}

      <View style={styles.remindContainer}>
        <Text style={styles.remindText}>{props.alertText}</Text>
        <TouchableOpacity onPress={props.changeHandler}>
          <Text style={styles.text}>{props.loginBtn}</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.footer}>
        Developed by <Text style={{color: 'red'}}>Louis Moses</Text>
      </Text>
    </View>
  );
};

export default LoginHeader;
