import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'pink',
    alignItems: 'center',
  },
  infoContainer: {
    // backgroundColor: 'yellow',
    marginTop: hp(10),
    width: wp(80),
    height: hp(30),
    borderWidth: wp(0.5),
    borderColor: '#ddd',
    alignItems: 'center',
  },
  name: {
    // backgroundColor: 'pink',
    marginTop: hp(8),
    fontSize: wp(5.5),
    color: '#000',
  },
  email: {
    // backgroundColor: 'grey',
    marginTop: hp(4),
    color: '#000',
  },
  logoutBtn: {
    backgroundColor: '#A9CE97',
    marginTop: hp(45),
    paddingHorizontal: wp(5),
    paddingVertical: hp(1.5),
    borderRadius: wp(0.5),
    color: '#fff',
  },
});

export default styles;
