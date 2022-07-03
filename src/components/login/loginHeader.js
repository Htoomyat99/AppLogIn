import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';

import styles from './style';

const LoginHeader = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.langText}>
        <Text style={{color: '#000'}}>English</Text>
      </TouchableOpacity>

      <Text style={styles.title}>{props.loginTitle}</Text>

      <TextInput
        value={props.emailValue}
        placeholder="Email..."
        style={styles.emailInput}
        onChangeText={props.onChangeEmail}
      />

      <TouchableOpacity onPress={props.goPassword}>
        <Text style={styles.next}>Next</Text>
      </TouchableOpacity>

      <View style={styles.remindContainer}>
        <Text style={styles.remindText}>You don't have an account please</Text>
        <TouchableOpacity onPress={props.changeHandler}>
          <Text style={styles.text}>{props.loginBtn}</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.footer}>
        Developed by <Text style={{color: 'red'}}>Zenth Kai</Text>
      </Text>
    </View>
  );
};

export default LoginHeader;
