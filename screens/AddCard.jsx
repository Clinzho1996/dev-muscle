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
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import StatusBarHeader from '../components/StatusBar';
import {Checkbox} from 'react-native-paper';

import {useState} from 'react';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const AddCard = ({navigation}) => {
  const [checked, setChecked] = useState(false);
  const [holderName, setHolderName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [formattedText, setFormattedText] = useState('');

  const formatExpireDate = text => {
    const formattedText = text.replace(/\s/g, ''); // Remove white spaces if any
    if (formattedText.length <= 2) {
      // If the user has entered the month (MM) only, add the slash
      return formattedText.replace(/(\d{2})/, '$1/');
    } else if (formattedText.length > 2) {
      // If the user has entered both month and year (MMYY), add the slash after MM
      return formattedText.replace(/(\d{2})(\d{0,2})/, '$1/$2');
    }
    return formattedText;
  };
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
          Add new card
        </Text>
      </View>
      <View style={{paddingVertical: 20}}>
        <View contentContainerStyle={{marginTop: 15}}>
          <View>
            <ImageBackground
              source={require('../assets/card6.png')}
              style={{
                padding: 20,
              }}
              imageStyle={{borderRadius: 10}}
              resizeMode="cover">
              <View
                style={{
                  paddingLeft: 60,
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                }}>
                <Image
                  source={require('../assets/visa.png')}
                  style={{width: 80, height: 50, objectFit: 'contain'}}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    paddingTop: 50,
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                  }}>
                  <Text
                    style={{color: '#fff', fontSize: 15, fontWeight: '400'}}>
                    {holderName ? holderName : ' HOLDER NAME'}
                  </Text>
                  <Text
                    style={{color: '#fff', fontSize: 20, fontWeight: '600'}}>
                    {cardNumber ? cardNumber : '0000 0000 0000 0000'}
                  </Text>
                </View>
                <View style={{marginTop: 40}}>
                  <Text
                    style={{color: '#fff', fontSize: 20, fontWeight: '600'}}>
                    {formattedText ? formattedText : '00/00'}
                  </Text>
                </View>
              </View>
            </ImageBackground>
          </View>
        </View>
        <View
          style={{
            paddingTop: 10,
            borderBottomWidth: 1,
            borderBottomColor: '#3A3A3C',
            paddingBottom: 10,
          }}>
          <TextInput
            placeholder="Card Holder Name"
            color="#fff"
            placeholderTextColor="#fff"
            style={{fontSize: 15}}
            onChangeText={text => setHolderName(text)}
          />
        </View>
        <View
          style={{
            paddingTop: 10,
            borderBottomWidth: 1,
            borderBottomColor: '#3A3A3C',
            paddingBottom: 10,
          }}>
          <TextInput
            placeholder="Card Number"
            color="#fff"
            placeholderTextColor="#fff"
            style={{fontSize: 15}}
            keyboardType="numeric"
            onChangeText={text => setCardNumber(text)}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 20,
          }}>
          <View
            style={{
              paddingTop: 10,
              borderBottomWidth: 1,
              borderBottomColor: '#3A3A3C',
              paddingBottom: 10,
              width: width - 200,
            }}>
            <TextInput
              placeholder={'Expire (MM/YY)'}
              color="#fff"
              placeholderTextColor="#fff"
              style={{fontSize: 15}}
              keyboardType="numeric"
              maxLength={5}
              onChangeText={text => {
                const formattedExpireDate = formatExpireDate(text);
                setFormattedText(formattedExpireDate);
              }}
            />
          </View>
          <View
            style={{
              paddingTop: 10,
              borderBottomWidth: 1,
              borderBottomColor: '#3A3A3C',
              paddingBottom: 10,
              width: 150,
            }}>
            <TextInput
              placeholder="CVC"
              color="#fff"
              placeholderTextColor="#fff"
              style={{fontSize: 15}}
              keyboardType="numeric"
              maxLength={3}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: 10,
            paddingTop: 20,
          }}>
          <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked(!checked);
            }}
            color="#D0FD3E"
            uncheckedColor="#D0FD3E"
          />
          <Text style={{color: '#fff', fontSize: 11}}>
            Set as default payment card
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.btnWork}
        onPress={() => navigation.navigate('Payment')}>
        <Text style={styles.btnText}>Done</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default AddCard;

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
    marginTop: 100,
  },
  btnText: {
    color: '#000',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '600',
  },
});
