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
  ImageBackground,
  Dimensions,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import StatusBarHeader from '../components/StatusBar';
import {Modal, Portal} from 'react-native-paper';
import {useState} from 'react';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const Appointment = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <StatusBarHeader />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          gap: 30,
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.goBack()}>
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
        <Text
          style={{
            color: '#fff',
            fontSize: 20,
            textAlign: 'center',
            fontFamily: 'integralcf-bold',
          }}>
          appointment
        </Text>
      </View>
      <View style={{paddingVertical: 20}}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('TrainerDetails')}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              gap: 10,
            }}>
            <View>
              <Image source={require('../assets/t2.png')} />
            </View>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  gap: 10,
                  alignItems: 'center',
                }}>
                <Text style={{color: '#FFFFFF', fontSize: 17}}>
                  Jennifer James
                </Text>
                <Text
                  style={{
                    backgroundColor: '#D0FD3E',
                    color: '#000',
                    fontSize: 12,
                    paddingHorizontal: 6,
                    fontWeight: '700',
                    borderRadius: 6,
                  }}>
                  4.6
                </Text>
              </View>
              <Text style={{color: '#FFFFFF', fontSize: 11}}>
                Functional Strength
              </Text>
              <Text style={{color: '#D0FD3E', fontSize: 11, paddingTop: 10}}>
                4 years experience
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Appointment;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1C1C1E',
    paddingHorizontal: 30,
    paddingVertical: 30,
    width: width,
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
});
