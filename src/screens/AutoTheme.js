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
    'Здесь может быть ваш текст статьи или информации о машинеЗдесь может быть ваш текст статьи или информации о машинеЗдесь может быть ваш текст статьи или информации о машинеЗдесь может быть ваш текст статьи или информации о машинеЗдесь может быть ваш текст статьи или информации о машинеЗдесь может быть ваш текст статьи или информации о машинеЗдесь может быть ваш текст статьи или информации о машинеЗдесь может быть ваш текст статьи или информации о машинеЗдесь может быть ваш текст статьи или информации о машинеЗдесь может быть ваш текст статьи или информации о машинеЗдесь может быть ваш текст статьи или информации о машинеЗдесь может быть ваш текст статьи или информации о машинеЗдесь может быть ваш текст статьи или информации о машинеЗдесь может быть ваш текст статьи или информации о машинеЗдесь может быть ваш текст статьи или информации о машинеЗдесь может быть ваш текст статьи или информации о машинеЗдесь может быть ваш текст статьи или информации о машинеЗдесь может быть ваш текст статьи или информации о машинеЗдесь может быть ваш текст статьи или информации о машинеЗдесь может быть ваш текст статьи или информации о машинеЗдесь может быть ваш текст статьи или информации о машинеЗдесь может быть ваш текст статьи или информации о машинеЗдесь может быть ваш текст статьи или информации о машинеЗдесь может быть ваш текст статьи или информации о машинеЗдесь может быть ваш текст статьи или информации о машинеЗдесь может быть ваш текст статьи или информации о машинеЗдесь может быть ваш текст статьи или информации о машинеЗдесь может быть ваш текст статьи или информации о машинеЗдесь может быть ваш текст статьи или информации о машинеЗдесь может быть ваш текст статьи или информации о машинеЗдесь может быть ваш текст статьи или информации о машинеЗдесь может быть ваш текст статьи или информации о машинеЗдесь может быть ваш текст статьи или информации о машинеЗдесь может быть ваш текст статьи или информации о машинеЗдесь может быть ваш текст статьи или информации о машинеЗдесь может быть ваш текст статьи или информации о машинеЗдесь может быть ваш текст статьи или информации о машинеЗдесь может быть ваш текст статьи или информации о машинеЗдесь может быть ваш текст статьи или информации о машинеЗдесь может быть ваш текст статьи или информации о машинеЗдесь может быть ваш текст статьи или информации о машинеЗдесь может быть ваш текст статьи или информации о машинеЗдесь может быть ваш текст статьи или информации о машинеЗдесь может быть ваш текст статьи или информации о машинеЗдесь может быть ваш текст статьи или информации о машинеЗдесь может быть ваш текст статьи или информации о машинеЗдесь может быть ваш текст статьи или информации о машинеЗдесь может быть ваш текст статьи или информации о машинеЗдесь может быть ваш текст статьи или информации о машинеЗдесь может быть ваш текст статьи или информации о машинеЗдесь может быть ваш текст статьи или информации о машинеЗдесь может быть ваш текст статьи или информации о машинеЗдесь может быть ваш текст статьи или информации о машинеЗдесь может быть ваш текст статьи или информации о машинеЗдесь может быть ваш текст статьи или информации о машинеЗдесь может быть ваш текст статьи или информации о машинеЗдесь может быть ваш текст статьи или информации о машинеЗдесь может быть ваш текст статьи или информации о машинеЗдесь может быть ваш текст статьи или информации о машинеЗдесь может быть ваш текст статьи или информации о машинеЗдесь может быть ваш текст статьи или информации о машинеЗдесь может быть ваш текст статьи или информации о машинеЗдесь может быть ваш текст статьи или информации о машинеЗдесь может быть ваш текст статьи или информации о машинеЗдесь может быть ваш текст статьи или информации о машинеЗдесь может быть ваш текст статьи или информации о машинеЗдесь может быть ваш текст статьи или информации о машинеЗдесь может быть ваш текст статьи или информации о машинеЗдесь может быть ваш текст статьи или информации о машинеЗдесь может быть ваш текст статьи или информации о машинеЗдесь может быть ваш текст статьи или информации о машинеЗдесь может быть ваш текст статьи или информации о машине'
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
                  source={require("../../assets/images/Defaultimg.png")}
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
    resizeMode: 'cover',
    marginBottom: 20,
  },
});

export default AutoTheme;
