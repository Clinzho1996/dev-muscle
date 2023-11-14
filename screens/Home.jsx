/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */

import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const Home = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.greeting}>
        <Text style={styles.name}>Hello Clinton,</Text>
        <Text style={styles.subgreet}>Good morning</Text>
      </View>
      <View>
        <View style={styles.work}>
          <Text style={styles.day}>Today's Workout Plan</Text>
          <TouchableOpacity>
            <Text style={styles.date}>Tues 14 Nov</Text>
          </TouchableOpacity>
        </View>
        <ImageBackground
          source={require('../assets/bg7.png')}
          imageStyle={{borderRadius: 20, backgroundColor: '#000', opacity: 0.7}}
          resizeMode="cover"
          style={styles.bg}>
          <View>
            <Text style={styles.day}>Day 01 - Warm Up</Text>
            <Text style={styles.time}>07:00 - 08:00 AM</Text>
          </View>
        </ImageBackground>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    height: height,
    backgroundColor: '#1C1C1E',
    paddingHorizontal: 25,
    paddingVertical: 30,
    width: width,
  },
  name: {
    fontSize: 30,
    color: '#fff',
    fontFamily: 'integralcf-bold',
  },
  subgreet: {
    fontSize: 16,
    color: '#fff',
    marginTop: 10,
  },
  bg: {
    paddingHorizontal: 20,
    paddingTop: 100,
    borderRadius: 20,
    paddingBottom: 20,
  },
  work: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 20,
  },
  day: {
    fontSize: 17,
    color: '#fff',
    fontWeight: '600',
  },
  time: {
    fontSize: 13,
    color: '#D0FD3E',
    marginTop: 10,
    borderLeftColor: '#D0FD3E',
    borderLeftWidth: 2,
    paddingLeft: 10,
  },
  date: {
    fontSize: 13,
    color: '#D0FD3E',
  },
});
