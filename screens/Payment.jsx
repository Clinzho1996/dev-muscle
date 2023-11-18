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
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import StatusBarHeader from '../components/StatusBar';
import {RadioButton} from 'react-native-paper';
import {useState} from 'react';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Payment = ({navigation}) => {
  const [checked, setChecked] = useState('first');
  return (
    <ScrollView style={styles.container}>
      <StatusBarHeader />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
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
          payment
        </Text>
      </View>
      <View style={{paddingVertical: 20}}>
        <Text style={{color: '#fff', fontSize: 17, fontWeight: '600'}}>
          Payment Method
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{marginTop: 15}}>
          <TouchableOpacity
            style={{
              backgroundColor: '#2C2C2E',
              paddingVertical: 55,
              paddingHorizontal: 25,
              alignItems: 'center',
              borderRadius: 10,
            }}>
            <Icon name="add" size={30} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity>
            <ImageBackground
              source={require('../assets/card6.png')}
              style={{
                padding: 20,
                marginHorizontal: 10,
              }}
              imageStyle={{borderRadius: 10}}
              resizeMode="cover">
              <View style={{paddingLeft: 60}}>
                <Image source={require('../assets/visa.png')} />
              </View>
              <View
                style={{
                  paddingTop: 50,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Text style={{color: '#fff', fontSize: 15, fontWeight: '600'}}>
                  *****2048
                </Text>
                <RadioButton
                  value="first"
                  status={checked === 'first' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked('first')}
                  color="#fff"
                  uncheckedColor="#fff"
                />
              </View>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity>
            <ImageBackground
              source={require('../assets/card5.png')}
              style={{
                padding: 20,
              }}
              imageStyle={{borderRadius: 10}}
              resizeMode="cover">
              <View style={{paddingLeft: 60}}>
                <Image source={require('../assets/Master.png')} />
              </View>
              <View
                style={{
                  paddingTop: 44,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Text style={{color: '#fff', fontSize: 15, fontWeight: '600'}}>
                  *****2071
                </Text>
                <RadioButton
                  value="first"
                  status={checked === 'second' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked('second')}
                  color="#fff"
                  uncheckedColor="#fff"
                />
              </View>
            </ImageBackground>
          </TouchableOpacity>
        </ScrollView>
        <View
          style={{
            paddingTop: 30,
            borderBottomWidth: 1,
            borderBottomColor: '#3A3A3C',
            paddingBottom: 10,
          }}>
          <Text style={{color: '#fff', fontSize: 17, fontWeight: '600'}}>
            Order Details
          </Text>
        </View>
        <View
          style={{
            paddingTop: 10,
            borderBottomWidth: 1,
            borderBottomColor: '#3A3A3C',
            paddingBottom: 10,
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
            borderBottomWidth: 1,
            borderBottomColor: '#3A3A3C',
            paddingBottom: 10,
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
          <Text
            style={{
              color: '#fff',
              fontSize: 15,
              fontWeight: '600',
              paddingVertical: 10,
            }}>
            09:30 AM
          </Text>
        </View>
        <View
          style={{
            paddingTop: 10,
            borderBottomWidth: 1,
            borderBottomColor: '#3A3A3C',
            paddingBottom: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
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
            $ 175.99
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.btnWork}
        onPress={() => navigation.navigate('Appointment')}>
        <Text style={styles.btnText}>Confirm</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Payment;

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
    marginTop: 30,
  },
  btnText: {
    color: '#000',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '600',
  },
});
