
import React from 'react';
import {View, Text, Image} from 'react-native';

import styles from './style';
import { useLocal } from '../../hook/useLocal';

const SplashScreen = () => {
  const local = useLocal();
  return (
    <View style={styles.container}>
      {/* <Text style={styles.Text}>One Piece...</Text> */}
      <Image
        style={styles.image}
        source={require('../../../assets/images/onepiece.png')}
      />
      <Image 
      style={styles.pirateImage}
      source={require('../../../assets/images/pirate.png')}/>
      <Text style={styles.footer}>{local.getStart}</Text>
    </View>
  );
};

export default SplashScreen;
