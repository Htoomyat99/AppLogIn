import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState, useContext} from 'react';
import RNSecureKeyStore, {ACCESSIBLE} from 'react-native-secure-key-store';

import DashboardScreen from '../../components/dashboard/DashboardScreen';
import {AuthContext} from '../../context/context';

const Dashboard = () => {
  const {getAuth} = useContext(AuthContext);

  const dashboardHandler = () => {
    // RNSecureKeyStore.remove('@user.token');
    // RNSecureKeyStore.remove('@user.passToken');
    getAuth(false);
  };

  return <DashboardScreen dashboardHandler={dashboardHandler} />;
};

export default Dashboard;
