import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

class SettingScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={[{ fontSize : 20, color : "gray"}]}>
                    마이 페이지
                </Text>
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
});

export default SettingScreen;
