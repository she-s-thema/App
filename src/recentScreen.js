import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

class recentScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={[{ fontSize : 20, color : "gray"}]}>
                    최근 본 상품
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

export default recentScreen;
