import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../screens/Home';
import Myprofile from '../screens/Myprofile';
import Favorites from '../screens/Favorites';
import Forum from '../screens/Forum';
import CustomDrawer from '../../components/CustomDrawer';
import Caradd from '../screens/Caradd';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import CarMaintenance from '../screens/CarMaintenance';
import AboutAuto from '../screens/AboutAuto';
import PersonalDataEditor from '../screens/PersonalDataEditor';
import Favorities from '../screens/Favorites';
import MyTopics from '../screens/MyTopics';
import ForgotPassword from '../screens/ForgotPassword';
import AutoTheme from '../screens/AutoTheme';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

//Стэк меню для переходов между экранами
const StackNavigatorHome = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Myprofile" component={Myprofile} />
      <Stack.Screen name="Caradd" component={Caradd} />
      <Stack.Screen name="CarMaintenance" component={CarMaintenance}/>
      <Stack.Screen name="AboutAuto" component={AboutAuto}/>
      <Stack.Screen name="PersonalDataEditor" component={PersonalDataEditor}/>
      <Stack.Screen name="Favorities" component={Favorities}/>
      <Stack.Screen name="MyTopics" component={MyTopics}/>
      <Stack.Screen name="ForgotPassword" component={ForgotPassword}/>
      <Stack.Screen name="AutoTheme" component={AutoTheme}/>
    </Stack.Navigator>
  );
}

//Боковое меню
const Appstack = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: "#A3BDCC",
        drawerActiveTintColor: "#363949",
        drawerInactiveTintColor: "#F2F2F2",
        drawerLabelStyle: { marginLeft: -20, fontSize: 15, fontFamily:"Rubik-Regular" },
      }}
    >
      <Drawer.Screen
        name="Главная"
        component={StackNavigatorHome}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Мой профиль"
        component={Myprofile}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="person-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Избранное"
        component={Favorites}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="star-outline" size={22} color={color} />
          ),
        }}
      />
      {/* <Drawer.Screen
        name="Форум"
        component={Forum}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="book-outline" size={22} color={color} />
          ),
        }}
      /> */}
    </Drawer.Navigator>
  );
}

export default Appstack;
