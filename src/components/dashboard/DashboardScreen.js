import {View, Text, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';

import styles from './style';
import {useLocal} from '../../hook/useLocal';
import {AuthContext} from '../../context/context';

const Dashboard = props => {
  const local = useLocal();
  const {userEmail} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{userEmail}</Text>
        <Text style={styles.email}>Email: {userEmail}@gmail.com</Text>
      </View>
      <TouchableOpacity onPress={props.dashboardHandler}>
        <Text style={styles.logoutBtn}>{local.logout}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Dashboard;
