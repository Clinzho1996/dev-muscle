/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  ImageBackground,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import StatusBarHeader from '../components/StatusBar';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const TrainerDetails = ({navigation}) => {
  return (
    <ScrollView>
      <StatusBarHeader />
      <ImageBackground
        source={require('../assets/bg17.png')}
        style={{height: 300}}
        resizeMode="cover">
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
      </ImageBackground>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View>
            <Text style={styles.day}>Jennifer James</Text>
            <Text style={styles.work}>Functional Strength</Text>
          </View>
          <View>
            <TouchableOpacity>
              <Image source={require('../assets/call.png')} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.details}>
          <View>
            <Text
              style={{
                color: '#fff',
                fontWeight: '600',
                fontSize: 22,
                textAlign: 'center',
              }}>
              6
            </Text>
            <Text
              style={{
                color: '#fff',
                fontWeight: '400',
                fontSize: 11,
                textAlign: 'center',
              }}>
              Experience
            </Text>
          </View>
          <View
            style={{
              borderLeftWidth: 1,
              borderLeftColor: '#3A3A3C',
              paddingLeft: 20,
            }}>
            <Text
              style={{
                color: '#fff',
                fontWeight: '600',
                fontSize: 22,
                textAlign: 'center',
              }}>
              45
            </Text>
            <Text
              style={{
                color: '#fff',
                fontWeight: '400',
                fontSize: 11,
                textAlign: 'center',
              }}>
              Completed
            </Text>
          </View>
          <View
            style={{
              borderLeftWidth: 1,
              borderLeftColor: '#3A3A3C',
              paddingLeft: 20,
            }}>
            <Text
              style={{
                color: '#fff',
                fontWeight: '600',
                fontSize: 22,
                textAlign: 'center',
              }}>
              25
            </Text>
            <Text
              style={{
                color: '#fff',
                fontWeight: '400',
                fontSize: 11,
                textAlign: 'center',
              }}>
              Active Clients
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              gap: 10,
            }}>
            <Text style={{fontSize: 17, color: '#fff', fontWeight: '700'}}>
              Reviews
            </Text>
            <Text
              style={{
                paddingHorizontal: 6,
                backgroundColor: '#D0FD3E',
                color: '#000',
                borderRadius: 3,
                fontWeight: '600',
              }}>
              4.6
            </Text>
          </View>
          <TouchableOpacity>
            <Text style={{color: '#D0FD3E', fontSize: 13}}>
              Read all reviews
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.reviews}
            style={{minWidth: Dimensions.get('window').width}}>
            <View
              style={{
                backgroundColor: '#2C2C2E',
                padding: 10,
                borderRadius: 10,
                marginRight: 10,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: 10,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    gap: 10,
                  }}>
                  <Image source={require('../assets/r1.png')} />
                  <Text style={{color: '#fff', fontSize: 15}}>Sharon Jem</Text>
                  <Text
                    style={{
                      paddingHorizontal: 6,
                      backgroundColor: '#D0FD3E',
                      color: '#000',
                      borderRadius: 3,
                      fontWeight: '600',
                    }}>
                    4.8
                  </Text>
                </View>
                <Text style={{color: '#fff', fontSize: 11}}>2d ago</Text>
              </View>
              <Text style={{color: '#fff', fontSize: 13, marginTop: 20}}>
                Had such an amazing session with Maria. She instantly picked up
                on the level of my fitness and adjusted the workout to suit me
                whilst also pushing me to my limits.
              </Text>
            </View>
            <View
              style={{
                backgroundColor: '#2C2C2E',
                padding: 10,
                borderRadius: 10,
                width: width,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: 10,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    gap: 10,
                  }}>
                  <Image source={require('../assets/r1.png')} />
                  <Text style={{color: '#fff', fontSize: 15}}>Sharon Jem</Text>
                  <Text
                    style={{
                      paddingHorizontal: 6,
                      backgroundColor: '#D0FD3E',
                      color: '#000',
                      borderRadius: 3,
                      fontWeight: '600',
                    }}>
                    4.8
                  </Text>
                </View>
                <Text style={{color: '#fff', fontSize: 11}}>2d ago</Text>
              </View>
              <Text style={{color: '#fff', fontSize: 13, marginTop: 20}}>
                Had such an amazing session with Maria. She instantly picked up
                on the level of my fitness and adjusted the workout to suit me
                whilst also pushing me to my limits.
              </Text>
            </View>
          </ScrollView>
        </View>
        <TouchableOpacity
          style={styles.btnWork}
          onPress={() => navigation.navigate('Appointment')}>
          <Text style={styles.btnText}>Book an appointment</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default TrainerDetails;

const styles = StyleSheet.create({
  btn: {
    paddingHorizontal: 30,
    paddingVertical: 40,
  },
  container: {
    backgroundColor: '#1C1C1E',
    paddingHorizontal: 30,
    paddingVertical: 30,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    marginTop: -40,
  },
  day: {
    color: '#fff',
    fontSize: 20,
    textTransform: 'capitalize',
  },
  work: {
    color: '#D0FD3E',
    fontSize: 13,
    paddingTop: 10,
  },
  btnWork: {
    backgroundColor: '#D0FD3E',
    zIndex: 10,
    borderRadius: 30,
    bottom: 0,
    padding: 15,
  },
  btnText: {
    color: '#000',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '600',
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#2C2C2E',
    marginVertical: 20,
    borderRadius: 10,
  },
  info: {
    paddingBottom: 20,
  },
  textInfo: {
    color: '#fff',
    fontSize: 15,
    lineHeight: 21,
  },
  card: {
    backgroundColor: '#2C2C2E',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    alignItems: 'center',
    paddingRight: 20,
    borderRadius: 20,
    marginBottom: 20,
  },
  reviews: {
    marginTop: 15,
    borderRadius: 10,
    width: 330,
    height: 150,
    marginBottom: 15,
    marginRight: 10,
  },
});
