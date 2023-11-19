import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import Colors from '../../constants/Colors';
import AppHeader from '../../components/AppHeader';
import MaintenanceList from '../../components/MaintenanceList';

//Статик данные для списка
const MaintenanceData = [
  { id: "1", name: "Название моей темы" },
  { id: "2", name: "Название моей темы" },
  { id: "3", name: "Название моей темы" },
  { id: "4", name: "Название моей темы" },
  { id: "5", name: "Название моей темы" },
  { id: "6", name: "Название моей темы" },
  { id: "7", name: "Название моей темы" },
  { id: "8", name: "Название моей темы" },
  { id: "9", name: "Название моей темы" },
  { id: "11", name: "Название моей темы" },
  { id: "12", name: "Название моей темы" },
  { id: "13", name: "Название моей темы" },
  { id: "14", name: "Название моей темы" },
  { id: "15", name: "Название моей темы" },
];

//Вопросов пользователя
const MyTopics = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <AppHeader menu rightFunction navigation={navigation} />
      <View style={styles.pagebg}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Мои темы форума</Text>
        </View>
        <MaintenanceList data={MaintenanceData} />
      </View>
      <TouchableOpacity
        onPress={() => {}}
        style={styles.addButton}
      >
        <Text style={styles.addButtonLabel}>Добавить тему</Text>
      </TouchableOpacity>
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
    paddingHorizontal: 20,
  },
  listContainer: {
    alignItems: "center",
  },
  titleContainer: {
    marginTop: 50,
    alignItems: "center",
    marginBottom: 50,
  },
  title: {
    fontSize: 28,
    fontWeight: "500",
    color: "#EDEFFD",
    fontFamily:"Rubik-Regular",
  },
  loginText: {
    fontSize: 20,
    fontWeight: "400",
    color: "#EDEFFD",
    marginBottom: 20,
  },
  addButton: {
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  addButtonLabel: {
    marginTop: 20,
    marginBottom: 20,
    textDecorationLine: 'underline',
    fontSize: 20,
    textAlign: 'center',
    color: '#EDEFFD',
    fontWeight: '500',
    fontFamily:"Rubik-Regular",
  },
});

export default MyTopics;