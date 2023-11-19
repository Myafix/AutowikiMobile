import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, Text, View, ScrollView, TouchableOpacity, SafeAreaView, StatusBar,RefreshControl } from 'react-native'
import { SelectList } from 'react-native-dropdown-select-list'
import AppHeader from '../../components/AppHeader'
import Colors from '../../constants/Colors';
import CustomButton from '../../components/CustomButton';

//Главная страница
const Home = ({navigation}) => {
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  //Статичный список для проверки
  const carbrand = [
    { key: "1", value: "Toyota" },
    { key: "2", value: "Audi" },
    { key: "3", value: "BMW" },
    { key: "4", value: "Porsche" },
    { key: "5", value: "Volkswagen" },
    { key: "6", value: "Peugeot" },
    { key: "7", value: "Nissan" },
  ];

  const carmodel = [
    { key: "1", value: "Celica" },
    { key: "2", value: "Corolla" },
    { key: "3", value: "Camry" },
    { key: "4", value: "Prius" },
    { key: "5", value: "Supra" },
    { key: "6", value: "GR 86" },
    { key: "7", value: "Land Cruiser Prado" },
  ];
  const toyotayear = [
    { key: "1", value: "2001 - 2004 (V поколение/XV30)" },
    { key: "2", value: "2014 - 2017 (VII поколение/XV50 (FL)" },
    { key: "3", value: "2011 - 2014 (VII поколение/XV50)" },
    { key: "4", value: "2009 - 2011 (VI поколение/XV40 (FL)" },
    { key: "5", value: "2006 - 2009 (VI поколение/XV40)" },
    { key: "6", value: "2004 - 2006 (V поколение/XV30 (FL)" },
    { key: "7", value: "2017 - 2020 (VIII поколение/XV70)" },
  ];

  //Обновление страницы
  const onRefresh = async () => {
    setRefreshing(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSelectedBrand(null);
      setSelectedModel(null);
      setSelectedYear(null);
    } finally {
      setRefreshing(false);
    }
  };
  useEffect(() => {
    if (refreshing) {
      onRefresh();
    }
  }, [refreshing]);

  return (
    <SafeAreaView style={styles.container}>
      <AppHeader menu rightFunction navigation={navigation} />
      <FlatList
        contentContainerStyle={styles.pagebg}
        data={[
          { key: refreshing ? "prikol" + new Date().getTime() : "prikol" },
        ]}
        keyExtractor={(item) => item.key}
        renderItem={() => (
          <>
            <View style={styles.centeredView}>
              <Text style={styles.title}>Поиск автомобиля</Text>
            </View>
            <View style={styles.vibor}>
              <View style={styles.list}>
                <SelectList
                  setSelected={(val) => setSelectedBrand(val)}
                  selected={selectedBrand}
                  data={carbrand}
                  save="value"
                  dropdownStyles={styles.dropdownStyles}
                  boxStyles={styles.boxStyles}
                  inputStyles={styles.inputStyles}
                  searchPlaceholder="введите марку авто"
                  placeholder="Марка"
                />
              </View>
              {selectedBrand && (
                <View style={styles.list}>
                  <SelectList
                    setSelected={(val) => setSelectedModel(val)}
                    selected={selectedModel}
                    data={carmodel}
                    save="value"
                    dropdownStyles={styles.dropdownStyles}
                    boxStyles={styles.boxStyles}
                    inputStyles={styles.inputStyles}
                    searchPlaceholder="введите модель авто"
                    placeholder="Модель"
                  />
                </View>
              )}
              {selectedModel && (
                <View style={styles.list}>
                  <SelectList
                    setSelected={(val) => setSelectedYear(val)}
                    selected={selectedYear}
                    data={toyotayear}
                    save="value"
                    dropdownStyles={styles.dropdownStyles}
                    boxStyles={styles.boxStyles}
                    inputStyles={styles.inputStyles}
                    searchPlaceholder="введите поколение авто"
                    placeholder="Поколение"
                  />
                </View>
              )}
            </View>
            <View style={styles.buttonContainer}>
              <CustomButton
                label={"Найти"}
                onPress={() => navigation.navigate("CarMaintenance")}
              />
            </View>
          </>
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
      <TouchableOpacity
        onPress={() => navigation.navigate("Caradd")}
        style={styles.addButton}
      >
        <Text style={styles.addButtonLabel}>Добавить авто</Text>
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
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  centeredView: {
    alignItems: 'center',
  },
  title: {
    fontFamily:"Rubik-Regular",
    fontSize: 28,
    fontWeight: '500',
    color: '#EDEFFD',
    marginTop: 100,
    marginBottom: 50,
  },
  vibor: {
    justifyContent: 'center',
  },
  list: {
    justifyContent: 'center',
    marginBottom: 40,
  },
  dropdownStyles: {
    backgroundColor: '#EDEFFD',
    fontFamily:"Rubik-Regular",
    
  },
  boxStyles: {
    backgroundColor: '#EDEFFD',
    alignItems: 'center',
    fontFamily:"Rubik-Regular",
  },
  inputStyles: {
    fontSize: 20,
    color: '#363949',
  },
  buttonContainer: {
    marginHorizontal: 40,
  },
  addButton: {
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  addButtonLabel: {
    marginTop: 100,
    marginBottom: 20,
    textDecorationLine: 'underline',
    fontSize: 20,
    textAlign: 'center',
    color: '#EDEFFD',
    fontWeight: '500',
    fontFamily:"Rubik-Regular",
  },
});

export default Home;