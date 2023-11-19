import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Image,
} from "react-native";
import Colors from '../../constants/Colors';
import AppHeader from '../../components/AppHeader';
import Pdf from '../../components/Pdf';

//Страница Об авто
const AboutAuto = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <AppHeader menu rightFunction navigation={navigation} />
      <View style={styles.pagebg}>
        <View style={styles.content}>
          <View style={styles.imageContainer}>
            <Image
              source={require("../../assets/images/corolla.jpg")}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Toyota Corolla</Text>
            <Text style={styles.description}>
              11 поколение, 2012-2018 (E170, E180)
            </Text>
          </View>
        </View>
        <Pdf  />
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
  content: {
    marginTop: 50,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  imageContainer: {
    marginRight: 20,
  },
  image: {
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#EDEFFD",
    marginBottom: 10,
    fontFamily:"Rubik-Regular",
  },
  description: {
    fontSize: 16,
    color: "#EDEFFD",
    fontFamily:"Rubik-Regular",
  },
});
  
  export default AboutAuto;