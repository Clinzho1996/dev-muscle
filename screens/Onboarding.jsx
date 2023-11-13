/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import StatusBarHeader from '../components/StatusBar';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Onboarding = ({navigation}) => {
  return (
    <View style={styles.card}>
      <StatusBarHeader />
      <Image style={styles.img} source={require('../assets/bg11.png')} />
      <Text style={styles.text}>Meet your coach,</Text>
      <Text style={styles.textBold}>start your journey</Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('Onboarding-two')}>
        <Text style={styles.btnText}>
          Next <Icon name="caret-forward" color="#000" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1C1C1E',
    width: width,
    height: height,
    alignItems: 'center',
  },
  img: {
    objectFit: 'cover',
    width: width,
  },
  text: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 24,
    textTransform: 'uppercase',
    fontFamily: 'integralcf-medium',
    marginTop: 50,
  },
  textBold: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 24,
    marginTop: 20,
    textTransform: 'uppercase',
    fontFamily: 'integralcf-heavy',
  },
  btn: {
    backgroundColor: '#D0FD3E',
    paddingVertical: 15,
    paddingHorizontal: 30,
    width: 200,
    textAlign: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 50,
    borderRadius: 30,
  },
  btnText: {
    color: '#000',
    fontWeight: '600',
    fontSize: 17,
  },
});
