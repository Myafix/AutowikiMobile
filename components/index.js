import React from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import Pdf from 'react-native-pdf';

const PdfRead = () => {
    const PdfResource = { uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf', caches: true};

    return (
        <View style={styles.container}>
            <Pdf 
                trustAllCerts={false}
                source={PdfResource}
                style={styles.pdf}
                onLoadComplete={(numberOfPages, filePath) => {
                    console.log(`number of pages: ${numberOfPages}`);
                }}
            />
        </View>
    )
}

export default PdfRead

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        height: 500,
        alignItems: 'center',
        justifyContent: 'center',
    },
    pdf: {
        flex: 1,
        width: Dimensions.get('window').width,
    }
})