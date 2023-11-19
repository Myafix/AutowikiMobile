import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Linking, Modal, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import TextModalContent from './TextModalContent';
import termsAndConditionsText from './TermsAndConditionsText';
import Tgsvg from "../assets/svg/tg.svg";
import Vksvg from "../assets/svg/vk.svg";
import Avasvg from "../assets/svg/avatarAcc.svg";

const CustomDrawer = (props) => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const linkvk = () => {
    Linking.openURL('https://vk.com');
  };

  const linktg = () => {
    Linking.openURL("https://telegram.org/");
  };

  return (
    <View style={styles.container}>
      <DrawerContentScrollView contentContainerStyle={{}} {...props}>
        <View
          style={{ flexDirection: "row", alignItems: "center", margin: 20 }}
        >
          <View style={styles.avatarContainer}>
            <Avasvg width={80} height={80} />
          </View>
          <Text style={styles.userName}>Myafix</Text>
        </View>
        <View style={styles.separator}></View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View style={styles.footer}>
        <View style={styles.contactContainer}>
          <Text style={styles.contactLabel}>Контакты:</Text>
          <TouchableOpacity onPress={linkvk} style={styles.contactIcon}>
            <Vksvg height={30} width={30} />
          </TouchableOpacity>
          <TouchableOpacity onPress={linktg}>
            <Tgsvg height={30} width={30} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={openModal} style={styles.conditionsLink}>
          <Text style={styles.conditionsText}>Условия пользования</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.logout}>
          <Text style={styles.logoutText}>Выйти</Text>
        </TouchableOpacity>
      </View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <TextModalContent text={termsAndConditionsText} onClose={closeModal} />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#363949"
  },
  avatarContainer: {
    alignItems: "center",
    justifyContent: "center"
  },
  userName: {
    color: "#F2F2F2",
    fontSize: 18,
    marginLeft: 20,
    alignContent: "center",
    fontFamily: "Rubik-Regular"
  },
  separator: {
    borderTopWidth: 1,
    borderTopColor: "#A3BDCC",
    alignItems: "center"
  },
  footer: {
    paddingBottom: 20,
    borderTopWidth: 1,
    borderTopColor: "#A3BDCC"
  },
  contactContainer: {
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 50
  },
  contactLabel: {
    paddingVertical: 10,
    fontSize: 15,
    color: "#F2F2F2",
    fontWeight: "100",
    fontFamily: "Rubik-Regular"
  },
  contactIcon: {
    paddingHorizontal: 5
  },
  conditionsLink: {
    paddingHorizontal: 50
  },
  conditionsText: {
    paddingVertical: 10,
    fontSize: 15,
    color: "#F2F2F2",
    textDecorationLine: "underline",
    fontWeight: "100",
    fontFamily: "Rubik-Regular"
  },
  logout: {
    paddingVertical: 10,
    paddingHorizontal: 20
  },
  logoutText: {
    fontSize: 15,
    color: "#F2F2F2",
    fontFamily: "Rubik-Regular"
  }
});

export default CustomDrawer;