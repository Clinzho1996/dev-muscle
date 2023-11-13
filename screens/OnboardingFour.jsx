/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';
import StatusBarHeader from '../components/StatusBar';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const OnboardingFour = ({navigation}) => {
  const [backgroundColor, setBackgroundColor] = useState('#2C2C2E');
  const [colorMale, setColorMale] = useState('#fff');
  const [backgroundColorFemale, setBackgroundColorFemale] = useState('#2C2C2E');

  const handlePress = () => {
    // Change the background color when TouchableOpacity is clicked
    setBackgroundColor('#D0FD3E');
    setColorMale('#000');
    setBackgroundColorFemale('#2C2C2E');
  };

  const handlePressFemale = () => {
    setBackgroundColorFemale('#D0FD3E');
    setBackgroundColor('#2C2C2E');
    setColorMale('#fff');
  };
  return (
    <View style={styles.card}>
      <StatusBarHeader />
      <Text style={styles.textBold}>Tell us about yourself!</Text>
      <Text style={styles.text}>
        To give you a better experience we need to know your gender
      </Text>
      <View style={styles.genderContainer}>
        <TouchableOpacity
          style={{
            ...styles.gender,
            backgroundColor: backgroundColor,
            color: colorMale,
          }}
          onPress={handlePress}>
          <Foundation name="male-symbol" size={50} color="#fff" />
          <Text style={styles.genderText}>Male</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{...styles.gender, backgroundColor: backgroundColorFemale}}
          onPress={handlePressFemale}>
          <Foundation name="female-symbol" size={50} color="#fff" />
          <Text style={styles.genderText}>Female</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('Age')}>
          <Text style={styles.btnText}>
            Next <Icon name="caret-forward" color="#000" />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OnboardingFour;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1C1C1E',
    width: width,
    height: height,
    paddingHorizontal: 30,
  },
  text: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 14,
    textTransform: 'uppercase',
    fontFamily: 'integralcf-medium',
    marginTop: 30,
  },
  textBold: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    marginTop: 30,
    textTransform: 'uppercase',
    fontFamily: 'integralcf-heavy',
  },
  genderContainer: {
    paddingVertical: 60,
    alignItems: 'center',
  },
  gender: {
    backgroundColor: '#2C2C2E',
    width: 115,
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    margin: 20,
    padding: 20,
    borderRadius: 100,
  },
  genderText: {
    color: '#fff',
    fontSize: 15,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    position: 'absolute',
    bottom: 30,
    right: 30,
  },
  btn: {
    backgroundColor: '#D0FD3E',
    paddingVertical: 15,
    paddingHorizontal: 30,
    width: 150,
    marginTop: 50,
    borderRadius: 30,
  },
  btnText: {
    color: '#000',
    fontWeight: '600',
    fontSize: 17,
    textAlign: 'center',
  },
});
