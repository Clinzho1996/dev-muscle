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
  TextInput,
  Alert,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {ActivityIndicator} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Password = ({navigation}) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChangePassword = async () => {
    const userId = await AsyncStorage.getItem('userId');
    const token = await AsyncStorage.getItem('userToken');

    setIsLoading(true);

    try {
      const response = await axios.post(
        'https://spendtrack.wtglaundrymanagement.com/api/users/changepassword',
        {
          user_id: userId,
          password: password,
          password_confirmation: confirmPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      console.log('Response: ', response.data);
      Alert.alert('Success', response.data);
      navigation.navigate('Login');
    } catch (error) {
      console.log('Error:', error.response.data); // Log the error response
      Alert.alert('Error', error.response.data.message); // Show the error message to the user
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
            fontSize: 20,
            fontFamily: 'integralcf-bold',
          }}>
          Password
        </Text>
      </View>
      {/* forms for registration */}
      <View style={{paddingTop: 30}}>
        <View
          style={{
            paddingHorizontal: 20,
            borderRadius: 35,
            marginTop: 20,
            borderBottomColor: '#2C2C2E',
            borderBottomWidth: 1,
          }}>
          <Text
            style={{
              color: '#D0FD3E',
              fontSize: 12,
              fontFamily: 'Inter-Bold',
              paddingTop: 10,
            }}>
            New Password
          </Text>
          <TextInput
            placeholder="Enter new password"
            placeholderTextColor="#fff"
            style={{
              color: '#fff',
              fontFamily: 'Inter-Medium',
              fontSize: 17,
            }}
            secureTextEntry={true}
            onChangeText={text => setPassword(text)}
          />
        </View>
        <View
          style={{
            paddingHorizontal: 20,
            borderRadius: 35,
            marginTop: 20,
            borderBottomColor: '#2C2C2E',
            borderBottomWidth: 1,
          }}>
          <Text
            style={{
              color: '#D0FD3E',
              fontSize: 12,
              fontFamily: 'Inter-Bold',
              paddingTop: 10,
            }}>
            Retype New Password
          </Text>
          <TextInput
            placeholder="Confirm new password"
            placeholderTextColor="#fff"
            style={{
              color: '#fff',
              fontFamily: 'Inter-Medium',
              fontSize: 17,
            }}
            secureTextEntry={true}
            onChangeText={text => setConfirmPassword(text)}
          />
        </View>
      </View>
      <View
        style={{
          marginTop: 280,
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={handleChangePassword}
          style={{
            backgroundColor: '#D0FD3E',
            paddingHorizontal: 80,
            paddingVertical: 20,
            borderRadius: 30,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 10,
          }}>
          <Text style={{color: '#000', fontSize: 18, fontFamily: 'Inter-Bold'}}>
            Update Password
          </Text>
          {isLoading && (
            <ActivityIndicator
              size="small"
              color="#000"
              style={{marginRight: 5}}
            />
          )}
        </TouchableOpacity>
        <Text
          style={{color: '#9EA3AE', fontFamily: 'Inter-Medium', marginTop: 30}}>
          Dev-Muscle &copy; 2023 v1.0
        </Text>
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

export default Password;
