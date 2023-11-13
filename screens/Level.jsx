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
import RNPickerSelect from 'react-native-picker-select';
import StatusBarHeader from '../components/StatusBar';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Level = ({navigation}) => {
  return (
    <View style={styles.card}>
      <StatusBarHeader />
      <Text style={styles.textBold}>Your regular physical activity level?</Text>
      <Text style={styles.text}>
        This helps us create your personalized plan
      </Text>
      <View style={styles.age}>
        <RNPickerSelect
          placeholder={{label: 'Select your current level', value: null}}
          onValueChange={value => console.log(value)}
          items={[
            {label: 'Rookie', value: 'Rookie'},
            {label: 'Beginner', value: 'Beginner'},
            {label: 'Intermediate', value: 'Intermediate'},
            {label: 'Advance', value: 'Advance'},
            {label: 'True Beast', value: 'True Beast'},
          ]}
          style={{
            inputAndroid: {
              fontSize: 20,
              paddingHorizontal: 10,
              paddingVertical: 30,
              borderWidth: 2,
              borderColor: '#D0FD3E',
              borderRadius: 8,
              color: '#D0FD3E',
              paddingRight: 30,
            },
            inputIOS: {
              fontSize: 16,
              paddingHorizontal: 10,
              paddingVertical: 12,
              borderWidth: 1,
              borderColor: '#2C2C2E',
              borderRadius: 8,
              color: '#2C2C2E',
              paddingRight: 30,
            },
          }}
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
          onPress={() => navigation.navigate('Register')}>
          <Text style={styles.btnText}>
            Next <Icon name="caret-forward" color="#000" />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Level;

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
  age: {
    marginTop: 130,
    marginBottom: 300,
    borderWidth: 2,
    borderColor: '#D0FD3E',
    borderRadius: 6,
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
