import React from 'react';
import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  headerStyle: {
    width: wp(100),
    alignItems: 'flex-end',
    padding: 10,
  },
});

export default styles;
