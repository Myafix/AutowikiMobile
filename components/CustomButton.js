import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

const CustomButton = ({ label, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.buttonContainer}
    >
      <Text style={styles.buttonText}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#363949",
    padding: 20,
    borderRadius: 10,
    marginBottom: 30,
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "600",
    color: "#EDEFFD",
    fontFamily: "Rubik-Regular",
  },
});

export default CustomButton;