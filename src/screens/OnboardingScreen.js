import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Modal,
} from 'react-native';
import CustomButton from '../../components/CustomButton';
import Colors from '../../constants/Colors';
import TextModalContent from '../../components/TextModalContent';
import termsAndConditionsText from '../../components/TermsAndConditionsText';


const OnboardingScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.pagebg}>
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>Auto</Text>
          <Text style={[styles.logoText, styles.logoTextPink]}>Wiki</Text>
        </View>
        <Text style={styles.description}>
          Вся библиотека эксплуатации авто в твоём кармане!
        </Text>
        
        <View style={styles.buttonContainer}>
          <CustomButton
            label={'Начать'}
            onPress={() => navigation.navigate('Login')}
          />
        </View>
      </View>
      <TouchableOpacity onPress={openModal} style={styles.termsTextContainer}>
        <Text style={styles.termsTextFirstPart}>При входе вы принимаете</Text>
        <Text style={styles.termsTextUnderline}>условия использования</Text>
        <Text style={styles.termsTextLastPart}>сайта.</Text>
      </TouchableOpacity>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <TextModalContent text={termsAndConditionsText} onClose={closeModal} />
      </Modal>
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
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  logoText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 50,
    color: '#EDEFFD',
    marginBottom: 20,
    fontFamily:"Righteous-Regular"
  },
  logoTextPink: {
    color: '#FF0060',
  },
  description: {
    textAlign: 'center',
    fontSize: 20,
    color: '#EDEFFD',
    marginTop: 30,
    marginBottom: 30,
    fontWeight: '300',
    fontFamily:"Rubik-Regular",
  },
  buttonContainer: {
    marginHorizontal: 40,
  },
  termsTextContainer: {
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  termsTextFirstPart: {
    fontSize: 10,
    textAlign: 'center',
    color: '#EDEFFD',
    fontWeight: '100',
    fontFamily:"Rubik-Regular",
  },
  termsTextUnderline: {
    textDecorationLine: 'underline',
    fontSize: 10,
    textAlign: 'center',
    color: '#EDEFFD',
    fontWeight: '100',
    paddingHorizontal: 3,
    fontFamily:"Rubik-Regular",
  },
  termsTextLastPart: {
    fontSize: 10,
    textAlign: 'center',
    color: '#EDEFFD',
    fontWeight: '100',
    fontFamily:"Rubik-Regular",
  },
});

export default OnboardingScreen;