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
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import StatusBarHeader from '../components/StatusBar';

const Details = ({navigation}) => {
  return (
    <ScrollView>
      <StatusBarHeader />
      <ImageBackground
        source={require('../assets/bg10.png')}
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
        <View>
          <Text style={styles.day}>Day 01 - Warm Up</Text>
          <Text style={styles.work}>04 Workouts for Beginner</Text>
        </View>
        <View style={styles.details}>
          <View style={styles.play}>
            <Icon name="play-circle" color="#fff" size={25} />
            <Text style={styles.text}>60 mins</Text>
          </View>
          <View style={styles.play}>
            <Icon name="flame" color="#fff" size={25} />
            <Text style={styles.text}>350 Cal</Text>
          </View>
        </View>
        <View style={styles.info}>
          <Text style={styles.textInfo}>
            Want your body to be healthy. Join our program with directions
            according to body’s goals. Increasing physical strength is the goal
            of strenght training. Maintain body fitness by doing physical
            exercise at least 2-3 times a week.
          </Text>
        </View>
        <View style={styles.warmup}>
          <View style={styles.card}>
            <Image source={require('../assets/img2.png')} />
            <View>
              <Text style={styles.textInfo}>Simple Warm-Up Exercises</Text>
              <Text style={styles.work}>0:30</Text>
            </View>
            <Icon name="caret-down" size={20} color="#fff" />
          </View>
          <View style={styles.card}>
            <Image source={require('../assets/img.png')} />
            <View>
              <Text style={styles.textInfo}>Stability Training Basics</Text>
              <Text style={styles.work}>0:30</Text>
            </View>
            <Icon name="caret-down" size={20} color="#fff" />
          </View>
        </View>
        <TouchableOpacity style={styles.btnWork}>
          <Text style={styles.btnText}>Start Workout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Details;

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
  play: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 10,
    alignItems: 'center',
    backgroundColor: '#2C2C2E',
    width: 100,
    padding: 5,
    borderRadius: 20,
  },
  text: {
    color: '#fff',
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 10,
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 20,
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
});
