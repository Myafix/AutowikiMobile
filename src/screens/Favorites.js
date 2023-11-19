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
  { id: "1", name: "Название автомобиля" },
  { id: "2", name: "Название автомобиля" },
  { id: "3", name: "Название автомобиля" },
  { id: "4", name: "Название автомобиля" },
  
];

const DecisionData = [
  { id: "1", name: "Название темы" },
  { id: "2", name: "Название темы" },
  { id: "3", name: "Название темы" },
  { id: "4", name: "Название темы" },
  
];


//Страница содержания авто
const Favorities = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <AppHeader menu rightFunction navigation={navigation} />
      <View style={styles.pagebg}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Избранное</Text>
        </View>
        <Text style={styles.loginText}>Автомобили</Text>
        <MaintenanceList data={MaintenanceData}/>
        <Text style={styles.loginText}>Решения</Text>
        <MaintenanceList data={DecisionData}/>
      </View>
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
    fontFamily:"Rubik-Regular",
  },
});

export default Favorities;