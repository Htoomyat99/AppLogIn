import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

// Components
import {useLocal} from '../../hook/useLocal';
import LanguageData from '../../data/language';

// Styles
import styles from './style';

const alertModal = props => {
  const local = useLocal();

  return (
    <View style={styles.container}>
      <View style={styles.modalContainer}>
        <Text style={styles.headerTitle}>{local.language} </Text>
        <View style={styles.langContainer}>
          <CheckBox
            disabled={false}
            value={props.english}
            onValueChange={props.changeEnglish}
          />
          <Text style={styles.lang}>English</Text>
        </View>
        <View style={styles.langContainer}>
          <CheckBox
            disabled={false}
            value={props.myanmar}
            onValueChange={props.changeMyanmar}
          />
          <Text style={styles.lang}>Myanmar</Text>
        </View>
      </View>
    </View>
  );
};

export default alertModal;
