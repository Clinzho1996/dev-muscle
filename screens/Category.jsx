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
  ImageBackground,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import StatusBarHeader from '../components/StatusBar';
import {Modal, Portal} from 'react-native-paper';
import {useState} from 'react';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const Category = ({navigation}) => {
  const [visible, setVisible] = useState(false);
  const [visiblePremium, setVisiblePremium] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const showPremiumModal = () => setVisiblePremium(true);
  const hidePremiumModal = () => setVisiblePremium(false);

  const containerStyle = {
    padding: 20,
    backgroundColor: '#00000080',
    height: height,
  };

  const navigateToSubscribe = () => {
    hidePremiumModal();
    hideModal();
    navigation.navigate('Subscribe');
  };

  return (
    <ScrollView style={styles.container}>
      <StatusBarHeader />
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}>
          <View style={{borderRadius: 20}}>
            <ImageBackground
              source={require('../assets/bg14.png')}
              imageStyle={{
                backgroundColor: '#000',
                opacity: 0.7,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
              }}
              resizeMode="cover"
              style={styles.bgPop}>
              <View>
                <Text style={styles.day}>Lower Body Strength</Text>
                <View style={styles.proFeat}>
                  <Text style={styles.timePro}>04 Workouts for Beginner</Text>
                  <Text style={styles.pro}>PRO</Text>
                </View>
              </View>
            </ImageBackground>
            <View
              style={{
                backgroundColor: '#2C2C2E',
                padding: 30,
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
              }}>
              <TouchableOpacity
                style={styles.btnPremium}
                onPress={showPremiumModal}>
                <Text style={styles.btnText}>
                  Take Appointment <Icon name="caret-forward" color="#000" />
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={hideModal}>
                <Text
                  style={{
                    color: '#FFFFFF',
                    paddingTop: 20,
                    textAlign: 'center',
                  }}>
                  Cancel
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </Portal>
      <Portal>
        <Modal
          visible={visiblePremium}
          onDismiss={hidePremiumModal}
          contentContainerStyle={containerStyle}>
          <View style={{borderRadius: 20}}>
            <ImageBackground
              source={require('../assets/bg15.png')}
              imageStyle={{
                backgroundColor: '#000',
                opacity: 0.7,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
              }}
              resizeMode="cover"
              style={styles.bgPremium}>
              <View>
                <Text style={styles.day}>Upgrade to Premium</Text>
                <View style={styles.proFeat}>
                  <Text style={styles.time}>
                    Subscribe to take an appointment
                  </Text>
                </View>
              </View>
            </ImageBackground>
            <View
              style={{
                backgroundColor: '#2C2C2E',
                padding: 30,
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
              }}>
              <TouchableOpacity
                style={styles.btnPremium}
                onPress={navigateToSubscribe}>
                <Text style={styles.btnText}>
                  Be Premium <Icon name="caret-forward" color="#000" />
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={hidePremiumModal}>
                <Text
                  style={{
                    color: '#FFFFFF',
                    paddingTop: 20,
                    textAlign: 'center',
                  }}>
                  Cancel
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </Portal>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.goBack()}>
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
          paddingVertical: 20,
        }}>
        Workout Categories
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate('Details')}>
        <ImageBackground
          source={require('../assets/bg13.png')}
          imageStyle={{
            borderRadius: 20,
            backgroundColor: '#000',
            opacity: 0.7,
          }}
          resizeMode="cover"
          style={styles.bg}>
          <View>
            <Text style={styles.day}>Wake Up Call</Text>
            <Text style={styles.time}>04 Workouts for Beginner</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
      <TouchableOpacity onPress={showModal}>
        <ImageBackground
          source={require('../assets/bg12.png')}
          imageStyle={{
            borderRadius: 20,
            backgroundColor: '#000',
            opacity: 0.7,
          }}
          resizeMode="cover"
          style={styles.bg}>
          <View>
            <Text style={styles.day}>Full Body Goal Crusher</Text>
            <View style={styles.proFeat}>
              <Text style={styles.timePro}>07 Workouts for Beginner</Text>
              <Text style={styles.pro}>PRO</Text>
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
      <TouchableOpacity onPress={showModal}>
        <ImageBackground
          source={require('../assets/bg14.png')}
          imageStyle={{
            borderRadius: 20,
            backgroundColor: '#000',
            opacity: 0.7,
          }}
          resizeMode="cover"
          style={styles.bg}>
          <View>
            <Text style={styles.day}>Lower Body Strength</Text>
            <View style={styles.proFeat}>
              <Text style={styles.timePro}>04 Workouts for Beginner</Text>
              <Text style={styles.pro}>PRO</Text>
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
      <TouchableOpacity>
        <ImageBackground
          source={require('../assets/bg6.png')}
          imageStyle={{
            borderRadius: 20,
            backgroundColor: '#000',
            opacity: 0.7,
          }}
          resizeMode="cover"
          style={styles.bg}>
          <View>
            <Text style={styles.day}>Lower Body Strength</Text>
            <View style={styles.proFeat}>
              <Text style={styles.timePro}>04 Workouts for Beginner</Text>
              <Text style={styles.pro}>PRO</Text>
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1C1C1E',
    paddingHorizontal: 30,
    paddingVertical: 30,
    width: width,
  },
  bg: {
    paddingHorizontal: 20,
    paddingTop: 100,
    paddingBottom: 20,
    marginBottom: 20,
  },
  bgPop: {
    paddingHorizontal: 20,
    paddingTop: 100,
    paddingBottom: 20,
  },
  bgPremium: {
    paddingHorizontal: 20,
    paddingTop: 180,
    paddingBottom: 20,
  },
  work: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 20,
  },
  day: {
    fontSize: 17,
    color: '#fff',
    fontWeight: '600',
    paddingRight: 50,
  },
  time: {
    fontSize: 13,
    color: '#D0FD3E',
    marginTop: 10,
    borderLeftColor: '#D0FD3E',
    borderLeftWidth: 2,
    paddingLeft: 10,
  },
  date: {
    fontSize: 13,
    color: '#D0FD3E',
  },
  pro: {
    color: '#fff',
    padding: 5,
    backgroundColor: '#FF2424',
    borderRadius: 6,
  },
  proFeat: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  timePro: {
    fontSize: 13,
    color: '#D0FD3E',
    borderLeftColor: '#FF2424',
    borderLeftWidth: 2,
    paddingLeft: 10,
  },
  category: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 10,
    alignItems: 'center',
  },
  categoryTwo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 10,
    alignItems: 'center',
    paddingBottom: 50,
  },
  btnPremium: {
    backgroundColor: '#D0FD3E',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
  },
  btnText: {
    color: '#000',
    fontWeight: '600',
    fontSize: 17,
    textAlign: 'center',
  },
});
