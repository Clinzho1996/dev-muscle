/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  Alert,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import StatusBarHeader from '../components/StatusBar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Login = ({navigation}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [checked, setChecked] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      console.log('Name and password are required.');
      Alert.alert('Error', 'Name and email are required.');
      return;
    }
    setIsLoading(true);
    try {
      const response = await axios.post(
        'https://spendtrack.wtglaundrymanagement.com/api/auth/login',
        {
          email: email,
          password: password,
        },
      );
      console.log('Login: ', response.data);

      // Check if response.data.id exists before setting it in AsyncStorage
      if (response.data.user.id) {
        await AsyncStorage.setItem('userId', String(response.data.user.id));
      }

      await AsyncStorage.setItem('userToken', response.data.token);
      navigation.navigate('Main');
    } catch (error) {
      console.log('Error:', error);
      Alert.alert('Error', error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <ScrollView style={styles.card}>
      <StatusBarHeader />
      <ImageBackground
        source={require('../assets/bg2.png')}
        style={styles.bg}
        resizeMode="cover">
        <View style={styles.bgHero}>
          <TouchableOpacity>
            <Text style={styles.signup}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.login}>Sign up</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.details}>
          <Text style={styles.info}>welcome back,</Text>
          <Text style={styles.rookie}>Dev Clinton</Text>
        </View>
      </ImageBackground>
      <View>
        <View
          style={{
            paddingHorizontal: 0,
            borderRadius: 30,
            marginTop: 20,
          }}>
          <View
            style={{
              borderRadius: 30,
              marginTop: 20,
              borderBottomWidth: 1,
              borderBottomColor: '#2C2C2E',
              paddingHorizontal: 20,
            }}>
            <TextInput
              placeholder="Email"
              placeholderTextColor="#8F94A3"
              onChangeText={text => setEmail(text)}
              style={{color: '#8F94A3', fontFamily: 'Inter-Bold', fontSize: 16}}
            />
          </View>
        </View>
        <View
          style={{
            paddingHorizontal: 20,
            borderRadius: 30,
            marginTop: 20,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottomWidth: 1,
              borderBottomColor: '#2C2C2E',
            }}>
            <TextInput
              placeholder="Your Password"
              placeholderTextColor="#8F94A3"
              secureTextEntry={!showPassword}
              onChangeText={text => setPassword(text)}
              style={{color: '#8F94A3', fontSize: 16}}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Icon
                name={showPassword ? 'eye-off' : 'eye'}
                color="#8F94A3"
                size={20}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            paddingHorizontal: 30,
            paddingVertical: 20,
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}>
          <TouchableOpacity>
            <Text style={{color: '#D0FD3E'}}>Forgot Password</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btnBack}>
          <Icon name="logo-google" size={25} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={handleLogin}>
          <Text style={styles.btnText}>
            Login <Icon name="caret-forward" color="#000" />
          </Text>
          {isLoading && (
            <ActivityIndicator
              size="small"
              color="#000"
              style={{marginRight: 5}}
            />
          )}
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  bg: {
    backgroundColor: '#1C1C1E',
    width: width,
    height: 400,
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
    paddingTop: 50,
  },
  login: {
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
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 30,
  },
  btn: {
    backgroundColor: '#D0FD3E',
    paddingVertical: 15,
    paddingHorizontal: 30,
    width: 150,
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    gap: 10,
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
