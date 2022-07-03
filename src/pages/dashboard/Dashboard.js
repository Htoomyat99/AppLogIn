import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

import styles from './style';

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>User Name</Text>
        <Text style={styles.email}>Email: example@gmail.com</Text>
      </View>
      <TouchableOpacity>
        <Text style={styles.logoutBtn}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Dashboard;
