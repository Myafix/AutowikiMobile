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

const MaintenanceData = [
  { id: "1", name: "Об авто" },
  { id: "2", name: "Название раздела" },
  { id: "3", name: "Электроника" },
  { id: "4", name: "Двигатель" },
];

const CarMaintenance = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <AppHeader menu rightFunction navigation={navigation} />
      <View style={styles.pagebg}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Toyota Corolla</Text>
        </View>
        <MaintenanceList data={MaintenanceData} />
      </View>
      <TouchableOpacity
        onPress={() => {}}
        style={styles.addButtonContainer}
      >
        <Text style={styles.addButton}>
          Добавить раздел
        </Text>
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
  titleContainer: {
    marginTop: 50,
    alignItems: "center",
    marginBottom: 50,
  },
  title: {
    fontSize: 28,
    fontWeight: "500",
    color: "#EDEFFD",
    fontFamily: "Rubik-Regular",
  },
  addButtonContainer: {
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "center",
  },
  addButton: {
    marginTop: 100,
    marginBottom: 20,
    textDecorationLine: "underline",
    fontSize: 20,
    textAlign: "center",
    color: "#EDEFFD",
    fontWeight: "500",
    fontFamily: "Rubik-Regular",
  },
});

export default CarMaintenance;