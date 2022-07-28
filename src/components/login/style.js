import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  langText: {
    // backgroundColor: 'yellow',
    alignSelf: 'flex-end',
    marginHorizontal: wp(6),
    marginVertical: wp(4),
    padding: wp(1),
  },
  title: {
    // backgroundColor: 'white',
    color: '#000',
    fontSize: hp(5),
    fontWeight: '350',
    textAlign: 'center',
    padding: wp(2),
    marginTop: hp(5),
  },
  emailInput: {
    height: hp(7),
    width: wp(80),
    alignSelf: 'center',
    borderWidth: wp(0.5),
    borderColor: '#ddd',
    paddingHorizontal: wp(5),
    fontSize: wp(5),
    marginTop: hp(10),
    color: '#000',
  },
  next: {
    // backgroundColor: 'red',
    color: '#000',
    alignSelf: 'center',
    paddingHorizontal: wp(15),
    paddingVertical: hp(1.3),
    fontSize: wp(5),
    marginTop: hp(18),
    borderWidth: wp(0.5),
    borderColor: '#ddd',
  },
  remindContainer: {
    // backgroundColor: 'yellow',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp(5),
    padding: wp(1),
  },
  remindText: {
    fontSize: wp(3.5),
    marginRight: wp(1),
    color: '#000',
  },
  text: {
    color: 'red',
    fontSize: wp(3.4),
  },
  footer: {
    // backgroundColor: 'grey',
    alignSelf: 'center',
    padding: wp(1),
    marginTop: hp(20),
    color: '#000',
  },
});

export default styles;
