import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

class HeartScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={[{ fontSize : 20, color : "gray"}]}>
                    찜한 상품
                </Text>
                <View style={styles.line} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        marginTop : 50,
        justifyContent : 'top',
        alignItems : 'center',
    },

    line : {
        width : 344,
        marginTop : 18,
        borderBottomWidth : 1,
        borderColor : 'gray',
    },
});

export default HeartScreen;
