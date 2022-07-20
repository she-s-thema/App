import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Image} from 'react-native';
import Pro from './img/pro.png';
import { SafeAreaView, TextInput, onChangeText} from "react-native";

class SettingScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    source = {require('./img/profile.png')}
                    style={styles.img} />
                <Text style={styles.name}>k99._.e</Text>
                <View>
                    <TextInput
                        placeholder="상태 메세지를 입력해"
                        style = {styles.memo} />
                    <Image
                        source = {require('./img/Vector.png')}
                        style={styles.use} />
                </View>
                <View style={styles.buttons} />
                <Text style={styles.recent}>최근 본 상품</Text>
                <Image
                    source = {require('./img/cute.png')}
                    style={styles.postone} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        marginTop : 50,
        justifyContent : 'top',
    },

    img : {
        width : 51,
        height : 51,
        marginLeft : 50,
        marginTop : 90,
        position : 'absolute',
    },

    name : {
        fontSize : 17,
        marginLeft : 50,
        marginTop : 144,
        position : 'absolute',
    },

    memo : {
        borderColor : '#9BA3EB',
        borderRadius : 10,
        borderWidth : 1,
        backgroundColor : '#DFE6FF',
        width : 180,
        height : 104,
        alignSelf : 'flex-end',
        marginRight : 25,
        marginTop : 80,
        position : 'relative',
        padding : 10,
    },

    use : {
        width : 12,
        height : 12.52,
        alignSelf: 'flex-end',
        position : 'absolute',
        marginTop : 160,
        marginRight : 40,
        marginLeft : 340,
    },

    buttons : {
        width : 305,
        height : 106,
        borderWidth : 1,
        marginTop : 22,
        alignSelf : 'center',
        borderRadius: 10,
        borderColor : '#D8D8D8',
    },

    recent : {
        fontSize : 15,
        marginLeft : 50,
        marginTop : 28,
    },

    postone : {
        width : 74,
        height : 89,
        marginTop : 15,
        marginLeft : 50,
    }
});

export default SettingScreen;
