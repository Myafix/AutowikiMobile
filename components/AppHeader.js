import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Surface, Title } from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';
import Colors from '../constants/Colors';

// Размер значков в шапке
const IconSize = 24;

const AppHeader = ({
  menu,
  rightFunction,
  navigation,
  iconColor,
  titleAlight,
}) => {
  return (
    <Surface style={[styles.header, { backgroundColor: "#363949"}]}>
      {/* Кнопки в левой части шапки */}
      <View style={styles.view}>
        {menu && (
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Feather name="menu" size={IconSize} color="#EDEFFD" />
          </TouchableOpacity>
        )}
      </View>
      {/* Название в шапке */}
      <View style={styles.titleView}>
        <Title style={{ color: iconColor, textAlign: titleAlight }}>
          <Text style={[styles.headerText, { color: "#EDEFFD" }]}>Auto</Text>
          <Text style={[styles.headerText, { color: "#FF0060" }]}>Wiki</Text>
        </Title>
      </View>
      {/* Кнопки в правой части шапки */}
      <View style={[styles.view, styles.rightView]}>
        {rightFunction && (
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Feather name="home" size={IconSize} color="#EDEFFD" />
          </TouchableOpacity>
        )}
      </View>
    </Surface>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 50,
    alignItems: "center",
    flexDirection: "row",
  },
  view: {
    marginHorizontal: 10,
  },
  titleView: {
    alignItems: "center",
    flex: 1,
  },
  rightView: {
    justifyContent: "flex-end",
  },
  headerText: {
    fontSize: 24,
    textAlign: "center",
    fontFamily: "Poppins-Regular",
  },
});

export default AppHeader;