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
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Switch} from 'react-native-paper';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Notifications = ({navigation}) => {
  const [isSwitchOn, setIsSwitchOn] = useState(true);
  const [isSwitchOnTwo, setIsSwitchOnTwo] = useState(false);
  const [isSwitchOnThree, setIsSwitchOnThree] = useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  const onToggleSwitchTwo = () => setIsSwitchOnTwo(!isSwitchOnTwo);
  const onToggleSwitchThree = () => setIsSwitchOnThree(!isSwitchOnThree);
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
          Notifications
        </Text>
      </View>
      {/* forms for registration */}
      <View style={{paddingTop: 30}}>
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
                Program Notifications
              </Text>
            </View>
          </View>
          <Switch
            value={isSwitchOn}
            onValueChange={onToggleSwitch}
            color="#D0FD3E"
          />
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
                Insight alert
              </Text>
            </View>
          </View>
          <Switch
            value={isSwitchOnTwo}
            onValueChange={onToggleSwitchTwo}
            color="#D0FD3E"
          />
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
                Workout Reminders
              </Text>
            </View>
          </View>
          <Switch
            value={isSwitchOnThree}
            onValueChange={onToggleSwitchThree}
            color="#D0FD3E"
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

export default Notifications;
