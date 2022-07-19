import React from 'react'
import {StyleSheet, SafeAreaView, Image, Text,  TouchableOpacity} from 'react-native';

class loginScreen extends React.Component{
    render(){
        return(
            <SafeAreaView style={styles.container}>
                <Image 
                    style = {styles.logo} 
                    source = {require('./img/Logo.png')} />
                        <TouchableOpacity
                            style={styles.kakao}
                            onPress={this.onPress}>
                            <Text><b>카카오톡으로 로그인</b></Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.apple}
                            onPress={this.onPress}>
                            <Text style = {styles.text}><b>Apple로 로그인</b></Text>
                        </TouchableOpacity>
                        
                        <Text style = {styles.social}> 소셜로그인으로 꼬꼬막을 이용하실 수 있습니다.</Text>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
    },

    logo : {
        width : 129.74,
        height : 104.72,
        top : -20,
    },

    kakao : {
        width : 300,
        height : 40,
        fontSize : 20,
        borderRadius : 10,
        marginTop : 20,
        backgroundColor : '#F7E600',
        alignItems : 'center',
        padding : 10,
    },

    apple : {
        width : 300,
        height : 40,
        fontSize : 20,
        borderRadius : 10,
        marginTop : 10,
        backgroundColor : '#000000',
        alignItems : 'center',
        padding : 9,
    },

    text : {
        color : '#fff',
    },

    social : {
        fontSize : 10,
        marginTop : 10,
        color : '#A6A6A6',
    }
});

export default loginScreen;