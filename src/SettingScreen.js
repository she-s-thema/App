import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Image} from 'react-native';
import Pro from './img/pro.png';

class SettingScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text1}>마이 페이지</Text>
                <View style={styles.profile}>
                    <Image source={Pro} />
                </View>
                <Text style={styles.text2}>아이디</Text>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'top',
    },

    text1 : {
      fontSize : 20,
      color : "gray",
      marginTop : 50,
      alignItems : 'center',
      marginLeft : 150,
    },

    text2 : {
        fontSize : 19,
        color : "black",
        marginTop : 25,
        marginLeft : 60,

    },

    profile : {
        height : 35,
        width : 35,
        marginTop : 95,
        marginLeft : 60,
    },
});

export default SettingScreen;
