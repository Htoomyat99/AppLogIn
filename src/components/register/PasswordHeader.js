import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './style';

const PasswordHeader = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Security</Text>

      <TextInput
        value={props.passValue}
        placeholder="Password..."
        style={styles.passInput}
        onChangeText={props.onChangePass}
      />

      {props.login ? (
        <View style={styles.alertContainer}>
          <Text style={{marginRight: 5}}>box</Text>
          <Text style={styles.alertText}>Remember passwrod</Text>
        </View>
      ) : (
        <TextInput
          value={props.confirmPassValue}
          placeholder="Confirm Password..."
          style={styles.confirmPassInput}
          onChangeText={props.onChangeConfirmPass}
        />
      )}

      <TouchableOpacity>
        <Text style={styles.loginContainer}>{props.loginBtn}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PasswordHeader;
