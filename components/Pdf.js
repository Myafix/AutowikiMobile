import React from 'react';
import { StyleSheet,View,} from 'react-native';
import Pdf from 'react-native-pdf';
import Colors from '../constants/Colors';

const PdfRead = () => {
    const PdfResource = { uri: 'http://xn----7sbbahrrfof0b1abme6p.xn--p1ai/wp-content/uploads/2012/08/001_%D0%92%D0%92%D0%95%D0%94%D0%95%D0%9D%D0%98%D0%95.pdf', caches: true};
    return (
      <View style={styles.container}>
        <Pdf
          trustAllCerts={false}
          source={PdfResource}
          style={styles.pdf}
          // onLoadComplete={(numberOfPages, filePath) => {
          //   console.log(`number of pages: ${numberOfPages}`);
          // }}
        />
        </View>
    );
}

export default PdfRead

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    flex: 1,
  },
  pdf: {
    // width: Dimensions.get("window").width,
    // height: Dimensions.get("window").height,
    backgroundColor: Colors.bgcolor,
    borderRadius: 10,
    flex: 1,
  },
});