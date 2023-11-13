/* eslint-disable prettier/prettier */
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    height: height,
    backgroundColor: '#1C1C1E',
  },
});
