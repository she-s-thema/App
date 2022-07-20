import React from 'react'
import {StyleSheet, SafeAreaView, Image, Text, TouchableOpacity, View} from 'react-native';

class loadingScreen extends React.Component{
    render(){
        return(
            <SafeAreaView style = {styles.container}>
                <Image
                    style = {styles.logo}
                    source = {require('./img/Logo.png')} />
                <Text style = {styles.text}>선사시대로 돌아가는 중...</Text>
            </SafeAreaView>
        )
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
    },

    text : {
        fontSize : 10,
        marginTop : 30,
        color : '#A7BDDD',
    }

})

export default loadingScreen
