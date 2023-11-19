import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Modal
} from "react-native";
import Colors from '../../constants/Colors';
import AppHeader from "../../components/AppHeader";
import Avasvg from "../../assets/svg/avatarAcc.svg"
import TextModalContent from '../../components/TextModalContent';
import termsAndConditionsText from '../../components/TermsAndConditionsText';

//Страница профиля
const Myprofile = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  return (
    <SafeAreaView style={styles.container}>
      <AppHeader menu rightFunction navigation={navigation} />
      <View style={styles.pagebg}>
        <View style={styles.avatarContainer}>
          <Avasvg width={120} height={120}/>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Профиль</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("PersonalDataEditor")}
          >
            <Text style={styles.buttonText}>Мои данные</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("MyTopics")}
          >
            <Text style={styles.buttonText}>Мои вопросы</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text
              style={styles.buttonText}
              onPress={() => navigation.navigate("Favorities")}
            >
              Избранное
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={openModal} style={styles.button}>
            <Text style={styles.buttonText}>Условия пользования</Text>
          </TouchableOpacity>
        </View>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={closeModal}
        >
          <TextModalContent
            text={termsAndConditionsText}
            onClose={closeModal}
          />
        </Modal>
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
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  titleContainer: {
    alignItems: "center",
    marginBottom: 50,
  },
  title: {
    fontSize: 28,
    fontWeight: "500",
    color: "#EDEFFD",
    fontFamily: "Rubik-Regular",
  },
  avatarContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 30,
    flexWrap: "wrap",
  },
  button: {
    marginBottom: 20,
    height: 150,
    width: 150,
    borderRadius: 20,
    backgroundColor: "#EDEFFD",
    justifyContent: "center",
    padding: 10,
    marginHorizontal: 10,
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "600",
    color: "#363949",
    fontSize: 20,
    fontFamily: "Rubik-Regular",
  },
});

export default Myprofile;