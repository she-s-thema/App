import React from 'react';
import {StyleSheet, Image} from 'react-native';

class SplashScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={require("img/Logo.png")}/>
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

export default SplashScreen;
