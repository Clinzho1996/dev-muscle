/* eslint-disable react/react-in-jsx-scope */
import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper';
import {StyleSheet} from 'react-native';
import AppStack from './navigations/AppStack';
import {AvatarProvider} from './components/AvatarContext';
import {Main} from './screens';

const App = () => {
  const isLoggedIn = true;
  return (
    <PaperProvider>
      <AvatarProvider>
        <NavigationContainer>
          {isLoggedIn ? <AppStack /> : <Main />}
        </NavigationContainer>
      </AvatarProvider>
    </PaperProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
