import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

class HeartScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Heart</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
    },
});

export default HeartScreen;
