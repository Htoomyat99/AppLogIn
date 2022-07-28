import {View, Text, TouchableOpacity, ToastAndroid} from 'react-native';
import React, {useState, useContext} from 'react';

import DashboardScreen from '../../components/dashboard/DashboardScreen';
import {AuthContext} from '../../context/context';
import {appStorage} from '../../utils/appStorage';

const Dashboard = () => {
  const {getAuth} = useContext(AuthContext);

  const dashboardHandler = () => {
    getAuth(false);
    appStorage.removeItem('@user.token');
    appStorage.removeItem('@user.passToken');
    ToastAndroid.show('Logout Successful!', ToastAndroid.SHORT);
  };

  return <DashboardScreen dashboardHandler={dashboardHandler} />;
};

export default Dashboard;
