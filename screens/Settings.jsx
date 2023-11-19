/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */

import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Material from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Switch} from 'react-native-paper';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Settings = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [biometricEnabled, setBiometricEnabled] = useState(false);

  useEffect(() => {
    // Load the biometric preference from storage
    AsyncStorage.getItem('biometricEnabled').then(value => {
      if (value === 'true') {
        setBiometricEnabled(true);
      }
    });
  }, []);

  const handleBiometricToggle = value => {
    // Store the biometric preference in storage
    setBiometricEnabled(value);
    AsyncStorage.setItem('biometricEnabled', value.toString());
  };

  const handleLogout = async () => {
    setIsLoading(true);
    try {
      await AsyncStorage.removeItem('userToken');
      navigation.navigate('Login');
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon
            name="arrow-back"
            color="#fff"
            size={20}
            style={{backgroundColor: '#2C2C2E', padding: 10, borderRadius: 30}}
          />
        </TouchableOpacity>
        <Text
          style={{
            textAlign: 'center',
            marginLeft: '30%',
            color: '#fff',
            fontSize: 24,
            fontFamily: 'integralcf-bold',
          }}>
          Settings
        </Text>
      </View>
      {/* forms for registration */}
      <View style={{paddingTop: 30}}>
        <Text
          style={{color: '#6C727F', fontFamily: 'Inter-Medium', marginTop: 0}}>
          General
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 10,
            marginTop: 20,
            borderBottomColor: '#2C2C2E',
            borderBottomWidth: 1,
            paddingBottom: 20,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              gap: 15,
            }}>
            <View>
              <Text
                style={{
                  color: '#fff',
                  fontFamily: 'Inter-Bold',
                  fontSize: 16,
                }}>
                Reset Password
              </Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Password')}>
            <Material
              name="arrow-forward-ios"
              color="#fff"
              size={20}
              style={{
                padding: 5,
                borderRadius: 20,
              }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 10,
            marginTop: 20,
            borderBottomColor: '#2C2C2E',
            borderBottomWidth: 1,
            paddingBottom: 20,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              gap: 15,
            }}>
            <View>
              <Text
                style={{
                  color: '#fff',
                  fontFamily: 'Inter-Bold',
                  fontSize: 16,
                }}>
                Notifications
              </Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Notifications')}>
            <Material
              name="arrow-forward-ios"
              color="#fff"
              size={20}
              style={{
                padding: 5,
                borderRadius: 20,
              }}
            />
          </TouchableOpacity>
        </View>
        <Text
          style={{color: '#6C727F', fontFamily: 'Inter-Medium', marginTop: 30}}>
          Security
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 10,
            marginTop: 20,
            borderBottomColor: '#2C2C2E',
            borderBottomWidth: 1,
            paddingBottom: 20,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              gap: 15,
            }}>
            <View>
              <Text
                style={{
                  color: '#fff',
                  fontFamily: 'Inter-Bold',
                  fontSize: 16,
                }}>
                Biometric Authentication
              </Text>
            </View>
          </View>
          <Switch
            value={biometricEnabled}
            onValueChange={handleBiometricToggle}
            color="#fff"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1C1C1E',
    height: height,
    flex: 1,
    width: width,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
});

export default Settings;
