import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#A9CE97',
    flex: 1,
    alignItems: 'center',
  },
  Text: {
    fontSize: wp(10),
    color: '#61DBFB',
    marginTop: hp(20),
    fontWeight: 'bold',
  },
  image: {
    width: wp(80),
    height: hp(20),
    resizeMode: 'contain',
    marginTop: hp(10),
  },
  pirateImage: {
    width: wp(100),
    height: hp(70),
    resizeMode: 'contain',
    marginTop: hp(-10)
  },
  footer: {
    // marginTop: hp(28),
    paddingHorizontal: wp(5),
    paddingVertical: wp(2),
    fontSize: wp(4.5),
    backgroundColor: '#61DBFB',
  },
});

export default styles;
