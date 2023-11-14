/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import {createStackNavigator} from '@react-navigation/stack';
import {
  Age,
  Details,
  ForgotPassword,
  Goal,
  Height,
  Home,
  Level,
  Login,
  Main,
  Onboarding,
  OnboardingFour,
  OnboardingThree,
  OnboardingTwo,
  Profile,
  Register,
  Weight,
  Welcome,
} from '../screens';

const AppStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerShown: false,
        DrawerNavigatorBarVisible: false,
      }}>
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Onboarding-three" component={OnboardingThree} />
      <Stack.Screen name="Onboarding-two" component={OnboardingTwo} />
      <Stack.Screen name="Age" component={Age} />
      <Stack.Screen name="Goal" component={Goal} />
      <Stack.Screen name="Level" component={Level} />
      <Stack.Screen name="Height" component={Height} />
      <Stack.Screen name="Weight" component={Weight} />
      <Stack.Screen name="Onboarding-Four" component={OnboardingFour} />
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};

export default AppStack;
