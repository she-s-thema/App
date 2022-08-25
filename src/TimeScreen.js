import React from 'react';
import {StyleSheet, ScrollView, View, Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

class TimeScreen extends React.Component{
    render(){
        return(
            <ScrollView>
                <View style = {styles.container}>
                    <View style = {styles.title}>
                        <TouchableOpacity><Text style = {styles.back}>{'<'}</Text></TouchableOpacity>
                        <Text style = {styles.screen}>약속잡기</Text>
                    </View>
                
                    <Text style = {styles.select}>약속 시간을 설정해주세요</Text>
                    <View>
                        
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
            top : -24,
            position : 'absolute'
        }, 
        screen : {
            fontSize : 25,
            fontWeight : 'bold',
            display : 'inline-block',
            marginLeft : 35,
        },

        select : {
            fontSize : 20,
            fontWeight : 'bold',
            position : 'absolute',
            top : 70,
            color : '#797979'
        }
    }
)
export default TimeScreen;