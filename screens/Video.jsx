/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import StatusBarHeader from '../components/StatusBar';
import {useState} from 'react';
import VideoPlayer from 'react-native-media-console';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Video = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <StatusBarHeader />
      <VideoPlayer
        source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}
        showTimeRemaining
        seekColor="#D0FD3E"
        videoStyle={{height: height}}
      />
    </ScrollView>
  );
};

export default Video;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1C1C1E',
    width: width,
    height: height,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#2C2C2E',
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
  btnWork: {
    backgroundColor: '#D0FD3E',
    zIndex: 10,
    borderRadius: 30,
    bottom: 0,
    padding: 15,
    marginTop: 50,
  },
  btnText: {
    color: '#000',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '600',
  },
});
