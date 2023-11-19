import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
} from "react-native";
import AppHeader from '../../components/AppHeader'
import InputField from '../../components/InputField';
import CustomButton from '../../components/CustomButton';
import Colors from '../../constants/Colors';

const Caradd = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <AppHeader menu rightFunction navigation={navigation} />
      <View style={styles.pagebg}>
        <View style={styles.heading}>
          <Text style={styles.title}>Добавление авто</Text>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Марка</Text>
          <InputField label={"Введите марку авто"} />
          <Text style={styles.label}>Модель</Text>
          <InputField label={"Введите модель авто"} />
          <Text style={styles.label}>Поколение</Text>
          <InputField label="Введите поколение авто" />
        </View>
        <CustomButton label={"Добавить"} onPress={() => {}} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#C4C4C4',
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  pagebg: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: Colors.bgcolor,
  },
  heading: {
    alignItems: "center",
    marginBottom: 50,
  },
  title: {
    fontSize: 28,
    fontWeight: "500",
    color: "#EDEFFD",
    fontFamily: "Rubik-Regular",
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontWeight: "500",
    color: "#EDEFFD",
    fontFamily: "Rubik-Regular",
  },
});

export default Caradd;