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

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const PaymentSuccess = ({navigation}) => {
  const [showBell, setShowBell] = useState(true);

  const toggleNotificationIcon = () => {
    setShowBell(!showBell);
    // Perform any other actions related to the icon change here if needed
  };
  return (
    <ScrollView style={styles.container}>
      <StatusBarHeader />
      <View style={{flex: 1, paddingVertical: 100}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: 10,
          }}>
          <Icon name="checkbox" color="#D0FD3E" size={25} />
          <Text style={{color: '#fff', fontSize: 22, fontWeight: '600'}}>
            Payment Completed!
          </Text>
        </View>
        <Text
          style={{
            color: '#fff',
            fontSize: 15,
            fontWeight: '400',
            marginTop: 10,
          }}>
          You’ve book a new appointment {'\n'}with your trainer.
        </Text>
        <View
          style={{
            backgroundColor: '#2C2C2E',
            padding: 20,
            borderRadius: 10,
            marginTop: 40,
          }}>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: '#3A3A3C',
              paddingBottom: 20,
            }}>
            <Text style={{color: '#fff', fontSize: 11, fontWeight: '400'}}>
              Trainer
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                gap: 10,
                marginTop: 10,
              }}>
              <View>
                <Image
                  source={require('../assets/t2.png')}
                  style={{width: 50, height: 50}}
                />
              </View>
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    gap: 10,
                    alignItems: 'center',
                  }}>
                  <Text style={{color: '#FFFFFF', fontSize: 15}}>
                    Jennifer James
                  </Text>
                  <Text
                    style={{
                      backgroundColor: '#D0FD3E',
                      color: '#000',
                      fontSize: 11,
                      paddingHorizontal: 6,
                      fontWeight: '700',
                      borderRadius: 6,
                    }}>
                    4.6
                  </Text>
                </View>
                <Text style={{color: '#D0FD3E', fontSize: 11, marginTop: 10}}>
                  Functional Strength
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              paddingTop: 10,
            }}>
            <Text style={{color: '#fff', fontSize: 11, fontWeight: '400'}}>
              Date
            </Text>
            <Text
              style={{
                color: '#fff',
                fontSize: 15,
                fontWeight: '600',
                paddingVertical: 10,
              }}>
              20 October 2021 - Wednesday
            </Text>
            <Text style={{color: '#fff', fontSize: 11, fontWeight: '400'}}>
              Time
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 15,
                  fontWeight: '600',
                  paddingVertical: 10,
                }}>
                09:30 AM
              </Text>
              <TouchableOpacity onPress={toggleNotificationIcon}>
                <Icon
                  name={
                    showBell ? 'notifications-sharp' : 'notifications-off-sharp'
                  }
                  color={showBell ? '#fff' : 'red'}
                  size={25}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={styles.btnWork}
        onPress={() => navigation.navigate('Video')}>
        <Text style={styles.btnText}>Done</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default PaymentSuccess;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1C1C1E',
    paddingHorizontal: 30,
    paddingVertical: 30,
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
