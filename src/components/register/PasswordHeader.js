import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './style';

const PasswordHeader = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Security</Text>

      <TextInput placeholder="Password..." style={styles.passInput} />

      {props.login ? (
        <View style={styles.alertContainer}>
          <Text style={{marginRight: 5}}>box</Text>
          <Text style={styles.alertText}>Remember passwrod</Text>
        </View>
      ) : (
        <TextInput
          placeholder="Confirm Password..."
          style={styles.confirmPassInput}
        />
      )}

      <TouchableOpacity>
        <Text style={styles.loginContainer}>{props.loginBtn}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PasswordHeader;
