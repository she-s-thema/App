import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Image} from 'react-native';
import { TextInput } from "react-native";

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
                <View>
                    <Image
                        source = {require('./img/cute.png')}
                        style={styles.postone} />
                    <Image
                        source = {require('./img/cute.png')}
                        style={styles.posttwo} />
                    <Image
                        source = {require('./img/cute.png')}
                        style={styles.postthree} />
                    <Image
                        source = {require('./img/cute.png')}
                        style={styles.postfour} />
                </View>
                <View>
                    <Image
                        source = {require('./img/marker.png')}
                        style={styles.marker} />
                    <Text style={styles.location}>위치 다시 설정하기</Text>
                    <Image
                        source = {require('./img/opinion.png')}
                        style={styles.opinion} />
                    <Text style={styles.send}>의견 보내기</Text>
                </View>
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
        flexDirection : 'row',
        position : 'absolute',
    },

    posttwo : {
        width : 74,
        height : 89,
        marginTop : 15,
        marginLeft : 132,
        flexDirection: 'row',
    },

    postthree : {
        width : 74,
        height : 89,
        marginTop : 15,
        marginLeft : 214,
        flexDirection : 'row',
        position : 'absolute',
    },

    postfour : {
        width : 74,
        height : 89,
        marginTop : 15,
        marginLeft : 296,
        flexDirection : 'row',
        position : 'absolute',
    },

    marker : {
        marginLeft : 50,
        marginTop : 36,
        position : 'relative',
    },

    location : {
        fontSize : 12,
        position : 'absolute',
        marginTop : 42,
        marginLeft : 90,
    },

    opinion : {
        marginLeft : 52,
        marginTop : 10,
    },

    send : {
        fontSize : 12,
        position : 'absolute',
        marginTop : 80,
        marginLeft : 90,
    }
});

export default SettingScreen;

