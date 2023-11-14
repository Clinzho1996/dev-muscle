/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import React, {useEffect} from 'react';
import StatusBarHeader from '../components/StatusBar';
import AsyncStorage from '@react-native-async-storage/async-storage';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Welcome = ({navigation}) => {
  useEffect(() => {
    checkToken();
  }, []);

  const checkToken = async () => {
    try {
      const userToken = await AsyncStorage.getItem('userToken');
      if (userToken) {
        navigation.replace('Main');
      } else {
        navigation.replace('Onboarding');
      }
    } catch (error) {
      console.log('Error checking token:', error);
    }
  };
  return (
    <View style={styles.card}>
      <StatusBarHeader />
      <Image source={require('../assets/logo.png')} />
      <Text style={styles.text}>DEV {'\n'}MUSCLES</Text>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1C1C1E',
    width: width,
    height: height,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  text: {
    textAlign: 'center',
    color: '#D0FD3E',
    fontSize: 60,
    fontFamily: 'integralcf-heavy',
    marginTop: 40,
  },
});
