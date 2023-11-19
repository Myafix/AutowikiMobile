import React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

const InputField = ({ label, icon, inputType, keyboardType, fieldButtonLabel, fieldButtonFunction }) => {
  return (
    <View style={styles.inputContainer}>
      {icon}
      {inputType === "password" ? (
        <TextInput
          placeholder={label}
          placeholderTextColor={"#EDEFFD"}
          keyboardType={keyboardType}
          style={styles.inputText}
          secureTextEntry={true}
        />
      ) : (
        <TextInput
          placeholder={label}
          placeholderTextColor={"#EDEFFD"}
          keyboardType={keyboardType}
          style={styles.inputText}
        />
      )}
      <TouchableOpacity onPress={fieldButtonFunction}>
        <Text style={styles.fieldButton}>{fieldButtonLabel}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    borderBottomColor: "#A3BDCC",
    borderBottomWidth: 1,
    paddingBottom: 8,
    marginBottom: 25,
  },
  inputText: {
    flex: 1,
    paddingVertical: 0,
    fontWeight: "200",
    fontSize: 13,
    color: "#EDEFFD",
    fontFamily: "Rubik-Regular",
  },
  fieldButton: {
    color: "#EDEFFD",
    fontWeight: "400",
    fontSize: 13,
    fontFamily: "Rubik-Regular",
  },
});

export default InputField;
