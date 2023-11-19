import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Pdf from './components/Pdf';
import { NavigationContainer } from '@react-navigation/native';
import Appstack from './src/Navigation/Appstack';
import Colors from './constants/Colors';
import Authstack from './src/Navigation/Authstack';



export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      {/* <Authstack /> */}
      <Appstack />
    </NavigationContainer>
  );
};