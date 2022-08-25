import React from 'react';
import {StyleSheet, ScrollView, View, Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

class PlaceScreen extends React.Component{
    render(){
        return(
            <ScrollView>
                <View style = {styles.container}>
                    <View style = {styles.title}>
                        <TouchableOpacity><Text style = {styles.back}>{'<'}</Text></TouchableOpacity>
                        <Text style = {styles.screen}>약속잡기</Text>
                    </View>
                
                    <Text style = {styles.check}>선택하신 정보를 확인해주세요</Text>
                    <View style = {styles.confirm}>
                        <View style = {styles.box}>
                            <Text style = {styles.information}>부산광역시 강서구 가락동 에서</Text>
                            <TouchableOpacity style = {styles.edit}>수정</TouchableOpacity>
                        </View>

                        <View style = {styles.box}>
                            <Text style = {styles.information}>오전 9시 41분 에 만나서</Text>
                            <TouchableOpacity style = {styles.edit}>수정</TouchableOpacity>
                        </View>

                        <View style = {styles.box}>
                            <Text style = {styles.information}>2022년 6월 6일까지</Text>
                            <TouchableOpacity style = {styles.edit}>수정</TouchableOpacity>
                        </View>

                        <View style = {styles.button}>
                            <TouchableOpacity style = {styles.commend}><Text style = {styles.commend1}>제안하기</Text></TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>

        )
    }


}
const styles = StyleSheet.create(
    {
        container : {
            flex : 1,
            marginTop : 50,
            justifyContent : 'center',
            alignItems : 'center',
        },

        check : {
            marginTop : 50,
            color : '#797979',
            fontSize : 20,
        },

        box : {
            width : 320,
            height : 45, 
            backgroundColor : '#EBF0FF',
            position : 'relative',
            borderRadius : 14,
            padding : 5,
            marginTop : 10,
        },

        information : {
            fontSize : 15,
            position : 'absolute',
            left : 20,
            color : '#646FD4',
            flexDirection : 'row',
            flexWrap : 'wrap',
            alignItems : 'center',
            top : 13,
        },

        edit : {
            position : 'absolute',
            fontSize : 15,
            color : '#646FD4',
            right : 20,
            top : 10,
        },

        check : {
            marginTop : 50,
            fontWeight : 'bold',
            fontSize : 20,
        },

        button : {
            justifyContent : 'center',
            alignContent : 'center',
            alignItems : 'center',
            top : 30,
        },

        commend : {
            backgroundColor : '#595FFF',
            borderRadius : 10,
            width : 120,
            height : 45,
            position : 'relative'
        },

        commend1 : {
            position : 'absolute',
            left : 10,
            color : '#FFFFFF',
            fontSize : 20,
            padding : 8,
            right : 5,
        },

        confirm : {
            top : 100,
        },
        title : {
            flexDirection : 'row',
            flexWrap : 'wrap',
            alignItems : 'center',
            position : 'relative',
            left : -100,
        },
        back : {
            fontSize : 35,
            fontWeight : 'bold',
            display : 'inline-block',
            top : -25,
            position : 'absolute'
        }, 
        screen : {
            fontSize : 25,
            fontWeight : 'bold',
            display : 'inline-block',
            marginLeft : 35,
        },
    }
)
export default PlaceScreen