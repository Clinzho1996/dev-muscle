/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import {Dimensions, StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Notify = () => {
  return (
    <ScrollView style={styles.container}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 20,
          color: '#fff',
          fontFamily: 'integralcf-bold',
          paddingBottom: 20,
        }}>
        Notifications
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 20,
          paddingVertical: 20,
          borderTopColor: '#3A3A3C',
          borderTopWidth: 1,
          borderBottomWidth: 1,
          borderBottomColor: '#3A3A3C',
        }}>
        <View>
          <Text style={{color: '#fff', fontSize: 15, fontWeight: '600'}}>
            <Icon
              name="checkmark-circle"
              color="#D0FD3E"
              style={{paddingRight: 10}}
            />
            Congratulations
          </Text>
          <Text style={{color: '#fff', fontSize: 15, fontWeight: '400'}}>
            35% your daily challenge completed
          </Text>
        </View>
        <View>
          <Text style={{color: '#fff', fontSize: 15, fontWeight: '400'}}>
            9:45 AM
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingVertical: 20,
          borderBottomWidth: 1,
          borderBottomColor: '#3A3A3C',
        }}>
        <View>
          <Text style={{color: '#fff', fontSize: 15, fontWeight: '600'}}>
            Congratulations
          </Text>
          <Text style={{color: '#fff', fontSize: 15, fontWeight: '400'}}>
            35% your daily challenge completed
          </Text>
        </View>
        <View>
          <Text style={{color: '#fff', fontSize: 15, fontWeight: '400'}}>
            9:45 AM
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingVertical: 20,
          borderBottomWidth: 1,
          borderBottomColor: '#3A3A3C',
        }}>
        <View>
          <Text style={{color: '#fff', fontSize: 15, fontWeight: '600'}}>
            Congratulations
          </Text>
          <Text style={{color: '#fff', fontSize: 15, fontWeight: '400'}}>
            35% your daily challenge completed
          </Text>
        </View>
        <View>
          <Text style={{color: '#fff', fontSize: 15, fontWeight: '400'}}>
            9:45 AM
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Notify;

const styles = StyleSheet.create({
  container: {
    height: height,
    backgroundColor: '#1C1C1E',
    paddingHorizontal: 30,
    paddingVertical: 30,
    width: width,
  },
});
