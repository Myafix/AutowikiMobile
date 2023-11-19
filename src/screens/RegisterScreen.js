import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../../constants/Colors';
import InputField from '../../components/InputField';
import CustomButton from '../../components/CustomButton';

const RegisterScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.pagebg}>
          <View style={styles.logoContainer}>
            <Text style={styles.logoText}>Auto</Text>
            <Text style={[styles.logoText, styles.logoTextPink]}>Wiki</Text>
          </View>
          <Text style={styles.registerText}>Регистрация</Text>
          <InputField
            label={"Введите логин"}
            icon={<Ionicons name="person-outline" size={20} color="#EDEFFD" />}
          />
          <InputField
            label={"Введите почту"}
            icon={<Ionicons name="at-outline" size={20} color="#EDEFFD" />}
            keyboardType={"email-address"}
          />
          <InputField
            label={"Введите пароль"}
            icon={<Ionicons name="ios-lock-closed-outline" size={20} color="#EDEFFD" />}
            inputType="password"
          />
          <InputField
            label={"Подтвердите пароль"}
            icon={<Ionicons name="ios-lock-closed-outline" size={20} color="#EDEFFD" />}
            inputType="password"
          />
          <CustomButton
            label={"Создать аккаунт"}
            onPress={() => navigation.navigate("Login")}
          />
          <View style={styles.loginContainer}>
            <Text style={styles.loginText}>Есть аккаунт?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={[styles.loginText, styles.loginTextBold]}>Войти</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.bgcolor,
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  pagebg: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  logoContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 100,
  },
  logoText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 50,
    color: "#EDEFFD",
    marginBottom: 20,
    fontFamily:"Righteous-Regular"
  },
  logoTextPink: {
    color: "#FF0060",
  },
  registerText: {
    fontSize: 30,
    fontWeight: "500",
    color: "#EDEFFD",
    marginBottom: 20,
    marginTop: 30,
    fontFamily:"Rubik-Regular"
  },
  loginContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 30,
  },
  loginText: {
    marginRight: 5,
    color: "#EDEFFD",
    fontWeight: "200",
    fontFamily:"Rubik-Regular"
  },
  loginTextBold: {
    fontWeight: "500",
    fontFamily:"Rubik-Regular"
  },
});

export default RegisterScreen;