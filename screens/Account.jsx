/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  Alert,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-crop-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {androidCameraPermission} from './permission';
import {useAvatar} from '../components/AvatarContext';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Account = ({navigation}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState(null); // Initialize user data state

  const handlePermissionRequest = async () => {
    const permissionGranted = await androidCameraPermission();
    if (permissionGranted) {
      console.log('Permissions granted');
      // Perform actions that require the granted permissions
    } else {
      console.log('Permissions denied');
      // Handle the case where permissions were denied
    }
  };

  useEffect(() => {
    handlePermissionRequest();
  }, []);

  const {avatarUri, setAvatarUri} = useAvatar();

  const openImagePicker = async () => {
    try {
      const image = await ImagePicker.openPicker({
        width: 300,
        height: 300,
        cropping: true,
      });

      if (image && image.path) {
        setAvatarUri(image.path);
        await AsyncStorage.setItem('avatarUri', image.path);
      }
    } catch (error) {
      console.log('Error picking image:', error);
    }
  };

  const loadSavedAvatar = async () => {
    try {
      const savedAvatarUri = await AsyncStorage.getItem('avatarUri');
      if (savedAvatarUri) {
        setAvatarUri(savedAvatarUri);
      }
    } catch (error) {
      console.log('Error loading saved avatar:', error);
    }
  };

  useEffect(() => {
    loadSavedAvatar();
  }, []);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    const userId = await AsyncStorage.getItem('userId');
    const token = await AsyncStorage.getItem('userToken');
    setIsLoading(true); // Set loading state to true while fetching

    axios
      .get(`https://spendtrack.wtglaundrymanagement.com/api/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => {
        // Handle the successful response here
        console.log('User Profile:', response.data);
        setUserData(response.data); // Set user data in state
      })
      .catch(error => {
        // Handle any errors that occurred during the request
        console.error('Error:', error);
      })
      .finally(() => {
        setIsLoading(false); // Set loading state to false when request completes
      });
  };

  const handleProfileUpdate = async () => {
    const userId = await AsyncStorage.getItem('userId');
    setIsLoading(true);
    try {
      const response = await axios.patch(
        'https://spendtrack.wtglaundrymanagement.com/api/users/update',
        {
          user_id: userId,
        },
      );
      console.log('Register: ', response.data);
      Alert.alert('Success', response.data);
    } catch (error) {
      console.log('Error:', error);
      Alert.alert('Error', error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <ScrollView style={styles.container}>
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
            marginLeft: '20%',
            color: '#fff',
            fontSize: 20,
            fontFamily: 'integralcf-bold',
          }}>
          edit profile
        </Text>
      </View>
      <View
        style={{
          marginTop: 50,
          alignItems: 'center',
          position: 'relative',
        }}>
        {avatarUri ? (
          <Image
            source={{uri: avatarUri}}
            style={{
              width: 100,
              height: 100,
              borderRadius: 75,
            }}
          />
        ) : (
          <Image
            source={require('../assets/avatar.png')}
            style={{width: 100, height: 100}}
          />
        )}

        <TouchableOpacity
          onPress={openImagePicker}
          style={{marginTop: 20, position: 'absolute', bottom: 0, right: 120}}>
          <Image
            source={require('../assets/camera.png')}
            style={{width: 40, height: 40}}
          />
        </TouchableOpacity>
      </View>
      {/* forms for registration */}
      <View style={{paddingTop: 30}}>
        <View
          style={{
            paddingHorizontal: 20,
            borderRadius: 30,
            marginTop: 10,
            borderBottomColor: '#2C2C2E',
            borderBottomWidth: 1,
          }}>
          <Text
            style={{
              color: '#D0FD3E',
              fontSize: 12,
              fontFamily: 'Inter-Medium',
              paddingTop: 10,
            }}>
            Name
          </Text>
          {isLoading ? (
            <Text
              style={{
                color: '#fff',
                fontFamily: 'Inter-Bold',
                textTransform: 'capitalize',
              }}>
              Loading...
            </Text>
          ) : (
            <TextInput
              placeholder={userData && userData.profile.name}
              placeholderTextColor="#fff"
              onChangeText={text => setName(text)}
              style={{
                color: '#fff',
                fontFamily: 'Inter-Medium',
                fontSize: 17,
              }}
            />
          )}
        </View>
        <View
          style={{
            paddingHorizontal: 20,
            borderRadius: 30,
            marginTop: 10,
            borderBottomColor: '#2C2C2E',
            borderBottomWidth: 1,
          }}>
          <Text
            style={{
              color: '#D0FD3E',
              fontSize: 12,
              fontFamily: 'Inter-Medium',
              paddingTop: 10,
            }}>
            Email
          </Text>
          {isLoading ? (
            <Text
              style={{
                color: '#fff',
                fontFamily: 'Inter-Bold',
                textTransform: 'capitalize',
              }}>
              Loading...
            </Text>
          ) : (
            <TextInput
              placeholder={userData && userData.profile.email}
              placeholderTextColor="#fff"
              onChangeText={text => setEmail(text)}
              style={{
                color: '#fff',
                fontFamily: 'Inter-Medium',
                fontSize: 17,
              }}
            />
          )}
        </View>
        <View
          style={{
            paddingHorizontal: 20,
            borderRadius: 30,
            marginTop: 10,
            borderBottomColor: '#2C2C2E',
            borderBottomWidth: 1,
          }}>
          <Text
            style={{
              color: '#D0FD3E',
              fontSize: 12,
              fontFamily: 'Inter-Medium',
              paddingTop: 10,
            }}>
            Phone Number
          </Text>
          {isLoading ? (
            <Text
              style={{
                color: '#fff',
                fontFamily: 'Inter-Bold',
                textTransform: 'capitalize',
              }}>
              Loading...
            </Text>
          ) : (
            <TextInput
              placeholder={userData && userData.profile.phone_number}
              placeholderTextColor="#fff"
              onChangeText={text => setPhone(text)}
              style={{
                color: '#fff',
                fontFamily: 'Inter-Medium',
                fontSize: 17,
              }}
            />
          )}
        </View>
      </View>
      <View
        style={{
          marginTop: 100,
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#D0FD3E',
            paddingHorizontal: 120,
            paddingVertical: 20,
            borderRadius: 40,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 10,
          }}>
          <Text
            style={{
              color: '#000',
              fontSize: 18,
              fontFamily: 'Inter-Bold',
              textAlign: 'center',
              fontWeight: '600',
            }}>
            Save
          </Text>
          {isLoading && <ActivityIndicator size="large" color="#fff" />}
        </TouchableOpacity>
      </View>
    </ScrollView>
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

export default Account;
