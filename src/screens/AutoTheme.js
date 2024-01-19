import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
  StatusBar,
  document,
} from 'react-native';
import Colors from '../../constants/Colors';
import AppHeader from '../../components/AppHeader';
import DefaultList from '../../components/DefaultList';
import Ionicons from 'react-native-vector-icons/Ionicons';

const MaintenanceData = [
  { id: '1', name: 'Toyota Corolla' },
  { id: '2', name: 'Электроника' },
  { id: '3', name: 'Замена лампочки в салоне' },
];

const AutoTheme = ({ navigation }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(
    'Подготовка:Убедитесь, что машина выключена, и вытащите ключ из зажигания. Ожидайте некоторое время, чтобы дать лампочке остыть, если она недавно горела. Откройте дверь: Это облегчит доступ к месту расположения лампочки. Найдите место лампочки: Чаще всего, лампочка салона находится вблизи потолочного светильника. Он может быть защищен пластиковым колпаком или другим кожухом. Удалите кожух: Осторожно снимите кожух, используя отвертку или другой подходящий инструмент. Извлеките старую лампочку: Поверните лампочку против часовой стрелки (обычно) и аккуратно вытащите ее из гнезда. Установите новую лампочку: Вставьте новую лампочку в гнездо и поверните ее по часовой стрелке для фиксации. Проверьте работу: Закройте кожух и проверьте работу лампочки, закрывая и открывая дверь. Закройте все: Убедитесь, что все компоненты находятся на своих местах, и закройте дверь.'
  );

  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };

  const onSave = () => {
    setIsEditing(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <AppHeader menu rightFunction navigation={navigation} />
      <View style={styles.pagebg}>
        <View style={styles.headerContainer}>
          <DefaultList data={MaintenanceData} />
          <TouchableOpacity onPress={toggleEditing}>
            <Ionicons
              style={{ paddingTop: 10 }}
              name={isEditing ? "save-outline" : "create-outline"}
              size={35}
              color="#EDEFFD"
            />
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.contentContainer}>
          <View>
            {isEditing ? (
              <TextInput
                style={styles.textInput}
                multiline
                value={text}
                onChangeText={(value) => setText(value)}
              />
            ) : (
              <View>
                <Text style={styles.text}>{text}</Text>
                <Image
                  source={require("../../assets/images/Lampa.jpg")}
                  style={styles.image}
                />
              </View>
            )}
          </View>
        </ScrollView>
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
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  contentContainer: {
    marginTop: 20,
    marginBottom: 20,
  },
  text: {
    fontSize: 24,
    color: '#EDEFFD',
    marginBottom: 20,
    fontFamily:"Rubik-Regular",
  },
  textInput: {
    fontSize: 16,
    color: '#EDEFFD',
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 200,
    resizeMode: 'cover',
    marginBottom: 20,
  },
});

export default AutoTheme;
