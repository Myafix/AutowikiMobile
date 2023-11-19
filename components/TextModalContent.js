import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";

//Карточка условия использования
const TextModalContent = ({ text, onClose }) => {
  return (
    <View style={styles.modalContainer}>
      <View style={styles.modalView}>
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Ionicons name="close-outline" size={30} color="#EDEFFD"/>
        </TouchableOpacity>
        <Text style={styles.modalText}>{text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 10,
    backgroundColor: "#677483",
    borderRadius: 10,
    padding: 25,
    alignItems: "center",
    position: "relative",
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  modalText: {
    color: "#EDEFFD",
    fontSize: 20,
    marginTop: 10,
    fontFamily:"Rubik-Regular"
  },
});

export default TextModalContent;
