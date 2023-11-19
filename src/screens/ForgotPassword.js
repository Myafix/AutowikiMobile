import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import InputField from "../../components/InputField";
import CustomButton from '../../components/CustomButton';
import Colors from '../../constants/Colors';

const ForgotPassword = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.pagebg}>
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>Auto</Text>
          <Text style={[styles.logoText, styles.logoTextPink]}>Wiki</Text>
        </View>
        <Text style={styles.loginText}>Восстановление пароля</Text>
        <InputField
          label={"Введите почту, которую указывали при регистрации"}
          icon={<Ionicons name="at-outline" size={20} color="#EDEFFD" />}
          keyboardType={"email-address"}
        />

        <CustomButton
          label={"Восстановить"}
          onPress={() => navigation.navigate("Home")}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.bgcolor,
    flex: 1,
    marginTop: StatusBar.currentHeight
  },
  pagebg: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  logoContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
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
  loginText: {
    fontSize: 24,
    fontWeight: "500",
    color: "#EDEFFD",
    marginBottom: 30,
    marginTop: 30,
    fontFamily:"Rubik-Regular",
  },
  signupContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 30,
  },
  signupText: {
    marginRight: 5,
    color: "#EDEFFD",
    fontWeight: "200",
  },
  signupTextBold: {
    fontWeight: "500",
  },
});

export default ForgotPassword;