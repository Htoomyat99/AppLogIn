import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    // backgroundColor: 'yellow',
    fontSize: hp(4.5),
    fontWeight: '400',
    color: '#000',
    marginLeft: wp(5),
    marginTop: hp(13),
  },
  passInput: {
    height: hp(7),
    width: wp(80),
    alignSelf: 'center',
    borderWidth: wp(0.5),
    borderColor: '#ddd',
    paddingHorizontal: wp(5),
    fontSize: wp(5),
    marginTop: hp(12),
    color: '#ddd',
  },
  confirmPassInput: {
    height: hp(7),
    width: wp(80),
    alignSelf: 'center',
    borderWidth: wp(0.5),
    borderColor: '#ddd',
    paddingHorizontal: wp(5),
    fontSize: wp(4.8),
    marginTop: hp(5),
    color: '#ddd',
  },
  alertContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    // backgroundColor: 'grey',
    marginLeft: wp(15),
    marginTop: hp(2.5),
  },
  alertText: {
    color: '#000',
  },
  loginContainer: {
    // backgroundColor: 'red',
    color: '#000',
    alignSelf: 'center',
    paddingHorizontal: wp(15),
    paddingVertical: hp(1.3),
    fontSize: wp(5),
    marginTop: hp(15),
    borderWidth: wp(0.5),
    borderColor: '#ddd',
  },
});

export default styles;
