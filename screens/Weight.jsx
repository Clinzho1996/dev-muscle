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
import {RulerPicker} from 'react-native-ruler-picker';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Weight = ({navigation}) => {
  return (
    <View style={styles.card}>
      <StatusBarHeader />
      <Text style={styles.textBold}>What’s your weight ?</Text>
      <Text style={styles.text}>You can always change this later</Text>
      <View>
        <RulerPicker
          min={0}
          max={240}
          step={1}
          fractionDigits={0}
          initialValue={0}
          //   onValueChange={number => console.log(number)}
          //   onValueChangeEnd={number => console.log(number)}
          unit="kg"
          valueTextStyle={{color: '#D0FD3E'}}
          unitTextStyle={{color: '#D0FD3E'}}
          indicatorColor="#D0FD3E"
        />
      </View>

      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.btnBack}
          onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={25} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('Height')}>
          <Text style={styles.btnText}>
            Next <Icon name="caret-forward" color="#000" />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Weight;

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
  btnContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  btn: {
    backgroundColor: '#D0FD3E',
    paddingVertical: 15,
    paddingHorizontal: 30,
    width: 150,
    borderRadius: 30,
  },
  btnBack: {
    backgroundColor: '#2C2C2E',
    paddingVertical: 15,
    width: 60,
    borderRadius: 40,
    padding: 10,
    alignItems: 'center',
  },
  btnText: {
    color: '#000',
    fontWeight: '600',
    fontSize: 17,
    textAlign: 'center',
  },
});
