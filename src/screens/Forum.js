import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

//Страница форума
const Forum = () => {
    return (
        <View style={styles.container}>
            <Text>Форум</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      marginTop:32,
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  

export default Forum