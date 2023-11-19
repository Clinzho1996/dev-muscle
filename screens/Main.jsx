/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-hooks/exhaustive-deps */

import {StyleSheet, View, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons';
import Profile from './Profile';
import Home from './Home';
import Notify from './Notify';
import Insight from './Insight';
import {useAvatar} from '../components/AvatarContext';
import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Tab = createBottomTabNavigator();

const Main = () => {
  const {avatarUri, setAvatarUri} = useAvatar();

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
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#1C1C1E',
          height: 80,
          borderTopColor: '#505050',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={styles.nav}>
                <Material
                  name={focused ? 'home-variant' : 'home-variant-outline'}
                  size={focused ? 30 : 30}
                  color={focused ? '#FFF' : '#505050'}
                  style={{borderRadius: 6}}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Insight"
        component={Insight}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={styles.nav}>
                <FontAwesome
                  name={focused ? 'bar-chart-o' : 'bar-chart-o'}
                  size={focused ? 30 : 30}
                  color={focused ? '#fff' : '#505050'}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Notify"
        component={Notify}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={styles.nav}>
                <Icon
                  name={focused ? 'notifications' : 'notifications'}
                  size={focused ? 30 : 30}
                  color={focused ? '#fff' : '#505050'}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View
                style={{
                  padding: 5,
                  borderWidth: 1,
                  borderColor: '#2C2C2E',
                  borderRadius: 33,
                }}>
                {avatarUri ? (
                  <Image
                    source={{uri: avatarUri}}
                    style={{width: 33, height: 33, borderRadius: 75}}
                  />
                ) : (
                  <Image
                    source={require('../assets/avatar.png')}
                    style={{width: 33, height: 33}}
                  />
                )}
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Main;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7f5df0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  text: {
    color: '#000',
  },
  nav: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    height: 100,
  },
});
