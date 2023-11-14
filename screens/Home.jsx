/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */

import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import StatusBarHeader from '../components/StatusBar';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Home = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <StatusBarHeader />
      <View style={styles.greeting}>
        <Text style={styles.name}>Hello Clinton,</Text>
        <Text style={styles.subgreet}>Good morning</Text>
      </View>
      <View>
        <View style={styles.work}>
          <Text style={styles.day}>Today's Workout Plan</Text>
          <TouchableOpacity>
            <Text style={styles.date}>Tues 14 Nov</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Details')}>
          <ImageBackground
            source={require('../assets/bg7.png')}
            imageStyle={{
              borderRadius: 20,
              backgroundColor: '#000',
              opacity: 0.7,
            }}
            resizeMode="cover"
            style={styles.bg}>
            <View>
              <Text style={styles.day}>Day 01 - Warm Up</Text>
              <Text style={styles.time}>07:00 - 08:00 AM</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
        <View style={styles.work}>
          <Text style={styles.day}>Workout Categories</Text>
          <TouchableOpacity>
            <Text style={styles.date}>See All</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          contentContainerStyle={styles.category}
          horizontal
          showsHorizontalScrollIndicator={false}>
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
                <Text style={styles.day}>Learn the Basic of Training</Text>
                <Text style={styles.time}>06 Workouts for Beginner</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity>
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
          <TouchableOpacity>
            <ImageBackground
              source={require('../assets/bg10.png')}
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
        </ScrollView>
        <View style={styles.work}>
          <Text style={styles.day}>New Workouts</Text>
        </View>
        <ScrollView
          contentContainerStyle={styles.categoryTwo}
          horizontal
          showsHorizontalScrollIndicator={false}>
          <TouchableOpacity>
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
          <TouchableOpacity>
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
          <TouchableOpacity>
            <ImageBackground
              source={require('../assets/bg10.png')}
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
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    height: height,
    backgroundColor: '#1C1C1E',
    paddingHorizontal: 25,
    paddingTop: 30,
    width: width,
    paddingBottom: 100,
  },
  name: {
    fontSize: 30,
    color: '#fff',
    fontFamily: 'integralcf-bold',
  },
  subgreet: {
    fontSize: 16,
    color: '#fff',
    marginTop: 10,
  },
  bg: {
    paddingHorizontal: 20,
    paddingTop: 100,
    borderRadius: 20,
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
});
