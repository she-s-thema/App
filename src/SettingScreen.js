import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Image} from 'react-native';
import Pro from './img/pro.png';
import { SafeAreaView, TextInput, onChangeText} from "react-native";

class SettingScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={[{ fontSize : 20, color : "gray"}]}>
                    마이 페이지
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

export default SettingScreen;
