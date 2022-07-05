import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

import styles from './style';
import {useLocal} from '../../hook/useLocal';

const Dashboard = props => {
  const local = useLocal();
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>User Name</Text>
        <Text style={styles.email}>Email: example@gmail.com</Text>
      </View>
      <TouchableOpacity onPress={props.dashboardHandler}>
        <Text style={styles.logoutBtn}>{local.logout}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Dashboard;
