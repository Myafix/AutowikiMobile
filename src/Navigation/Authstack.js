import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {SafeAreaView} from 'react-native'

import OnboardingScreen from "../screens/OnboardingScreen";
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';

const Stack = createNativeStackNavigator();

const Authstack = () => {
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Onboarding" component={OnboardingScreen} />
            <Stack.Screen name= "Login" component={LoginScreen}/>
            <Stack.Screen name="Register" component={RegisterScreen}/>
        </Stack.Navigator>
    );
};

export default Authstack;