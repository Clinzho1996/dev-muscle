/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import StatusBarHeader from '../components/StatusBar';
import {RadioButton} from 'react-native-paper';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Subscribe = ({navigation}) => {
  const [checked, setChecked] = useState('first');
  return (
    <ScrollView style={styles.card}>
      <StatusBarHeader />
      <ImageBackground
        source={require('../assets/bg16.png')}
        style={styles.bg}
        resizeMode="cover">
        <View style={styles.bgHero}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon
              name="arrow-back"
              color="#fff"
              size={25}
              style={{
                backgroundColor: '#00000033',
                width: 35,
                textAlign: 'center',
                padding: 5,
                borderRadius: 20,
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.details}>
          <Text style={styles.rookie}>Be Premium</Text>
          <Text style={styles.info}>Get unlimited access</Text>
          <Text style={{color: '#fff'}}>
            When you subscribe, you’ll get {'\n'}instant unlimited access
          </Text>
        </View>
      </ImageBackground>
      <View style={{marginTop: 20}}>
        <View
          style={{
            backgroundColor: '#2C2C2E',
            padding: 20,
            borderRadius: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 20,
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              gap: 10,
            }}>
            <View>
              <RadioButton
                value="first"
                status={checked === 'first' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('first')}
                color="#D0FD3E"
                uncheckedColor="#D0FD3E"
              />
            </View>
            <View>
              <Text style={{color: '#fff', fontSize: 15}}>Monthly</Text>
              <Text style={{color: '#fff', fontSize: 9}}>
                Pay monthly, cancel any time
              </Text>
            </View>
          </View>
          <View>
            <Text style={{color: '#fff', fontSize: 20}}>$19.99/m</Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#2C2C2E',
            padding: 20,
            borderRadius: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 20,
            alignItems: 'center',
            marginTop: 20,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              gap: 10,
            }}>
            <View>
              <RadioButton
                value="second"
                status={checked === 'second' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('second')}
                color="#D0FD3E"
                uncheckedColor="#D0FD3E"
              />
            </View>
            <View>
              <Text style={{color: '#fff', fontSize: 15}}>Yearly</Text>
              <Text style={{color: '#fff', fontSize: 9}}>
                Pay for a full year
              </Text>
            </View>
          </View>
          <View>
            <Text style={{color: '#fff', fontSize: 20}}>$129.99/y</Text>
          </View>
        </View>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('Trainers')}>
          <Text style={styles.btnText}>Subscribe Now</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Subscribe;

const styles = StyleSheet.create({
  bg: {
    backgroundColor: '#1C1C1E',
    width: width,
    height: 450,
    paddingHorizontal: 30,
  },
  card: {
    height: height,
    backgroundColor: '#1C1C1E',
  },
  bgHero: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 20,
    alignItems: 'center',
    paddingTop: 30,
  },
  Subscribe: {
    color: '#fff',
    fontWeight: '600',
  },
  signup: {
    color: '#fff',
    fontWeight: '600',
    borderBottomWidth: 2,
    borderBottomColor: '#D0FD3E',
    paddingBottom: 10,
  },
  details: {
    marginTop: 150,
  },
  rookie: {
    fontSize: 32,
    color: '#fff',
    fontFamily: 'integralcf-bold',
  },
  info: {
    fontSize: 32,
    color: '#fff',
    fontFamily: 'integralcf-regular',
    marginTop: 30,
    lineHeight: 46,
  },
  btnContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingTop: 30,
  },
  btn: {
    backgroundColor: '#D0FD3E',
    paddingVertical: 15,
    paddingHorizontal: 30,
    width: width - 60,
    borderRadius: 30,
  },
  btnText: {
    color: '#000',
    fontWeight: '600',
    fontSize: 17,
    textAlign: 'center',
  },
  btnBack: {
    backgroundColor: '#2C2C2E',
    paddingVertical: 15,
    width: 60,
    borderRadius: 40,
    padding: 10,
    alignItems: 'center',
  },
});
