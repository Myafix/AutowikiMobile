import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../../constants/Colors';
import InputField from '../../components/InputField';
import CustomButton from '../../components/CustomButton';

//Экран редактирования данных
const PersonalDataEditor = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <AppHeader menu rightFunction navigation={navigation} />
        <View style={styles.pagebg}>
          <Text style={styles.title}>Редактировать данные</Text>
          <Text style={styles.fieldLabel}>Имя</Text>
          <InputField
            label={"Введите логин"}
            icon={<Ionicons name="person-outline" size={20} color="#EDEFFD" />}
          />
          <Text style={styles.fieldLabel}>Почта</Text>
          <InputField
            label={"Введите почту"}
            icon={<Ionicons name="at-outline" size={20} color="#EDEFFD" />}
            keyboardType={"email-address"}
          />
          <InputField
            label={"Введите текущий пароль"}
            icon={<Ionicons name="lock-closed-outline" size={20} color="#EDEFFD" />}
            inputType="password"
          />
          <Text style={styles.fieldLabel}>Пароль</Text>
          <InputField
            label={"Введите текущий пароль"}
            icon={<Ionicons name="lock-closed-outline" size={20} color="#EDEFFD" />}
            inputType="password"
          />
          <InputField
            label={"Введите новый пароль"}
            icon={<Ionicons name="lock-closed-outline" size={20} color="#EDEFFD" />}
            inputType="password"
          />
          <InputField
            label={"Подтвердите новый пароль"}
            icon={<Ionicons name="lock-closed-outline" size={20} color="#EDEFFD" />}
            inputType="password"
          />
          <CustomButton
            label={"Сохранить"}
            onPress={() => {}}
          />
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
  title: {
    fontSize: 28,
    fontWeight: "500",
    color: "#EDEFFD",
    marginBottom: 50,
    marginTop: 50,
    textAlign: "center",
    fontFamily:"Rubik-Regular"
  },
  fieldLabel: {
    fontSize: 24,
    fontWeight: "500",
    color: "#EDEFFD",
    marginBottom: 10,
    fontFamily:"Rubik-Regular"
  },
});

export default PersonalDataEditor;