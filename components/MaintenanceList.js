import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableHighlight } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Список с функией нажатия
const MaintenanceList = ({ data,}) => {
    const navigation = useNavigation();
    const renderItem = ({ item }) => {
      return (
        //Тут переход на страницу
        <TouchableHighlight
          // onPress={() => navigation.navigate("AboutAuto")}
          onPress={() => navigation.navigate("AutoTheme")}
          underlayColor="#7D8DA1"
          style={styles.touchable}
        >
          <View style={styles.item}>
            <Text style={styles.itemTitle}>{item.name}</Text>
            <View style={styles.line} />
          </View>
        </TouchableHighlight>
      );
    };
    return (
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    );
  };

const styles = StyleSheet.create({
  listContainer: {
    alignItems: 'center',
  },
  item: {
    width: 300,
    borderBottomWidth: 1,
    borderBottomColor: '#7D8DA1',
  },
  itemTitle: {
    fontSize: 24,
    fontWeight: '300',
    color: '#EDEFFD',
    fontFamily:"Rubik-Regular"
  },
  line: {
    marginTop: 5,
    height: 5,
    width: '50%',
    alignSelf: 'center',
  },
  touchable: {
    borderRadius: 5,
    padding:1,
  },
});

export default MaintenanceList;
