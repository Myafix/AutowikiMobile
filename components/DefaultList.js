import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableHighlight } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Список с функией нажатия
const DefaultList = ({ data,}) => {
    const renderItem = ({ item }) => {
      return (
        <View style={styles.item}>
          <Text style={styles.itemTitle}>{item.name}</Text>
          <View style={styles.line} />
        </View>
      );
    };
    return (
      <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
      </View>
    );
  };

const styles = StyleSheet.create({
  listContainer: {
    marginTop:10
    // alignItems: 'center',
  },
  item: {
    width: 300,
    borderBottomWidth: 1,
    borderBottomColor: '#7D8DA1',
  },
  itemTitle: {
    fontSize: 20,
    fontWeight: '300',
    color: '#EDEFFD',
    fontFamily:"Rubik-Regular"
  },
  line: {
    marginTop: 5,
    width: '50%',
    alignSelf: 'center',
  },
  touchable: {
    borderRadius: 5,
    padding:1,
  },
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
});

export default DefaultList;
