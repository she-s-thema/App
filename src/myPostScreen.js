import React from 'react';
import { ScrollView, View, Image, TouchableOpacity, StyleSheet, Text, Picker} from 'react-native';
import { RollInRight } from 'react-native-reanimated';

class otherPostScreen extends React.Component{
    render() {
        return(
            <ScrollView style = {styles.container}>
                <View style = {styles.userInfo}>
                    <Image  style = {styles.profile} source = {require('./img/pro.png')} />
                    <Text style = {styles.name}>k99._.e</Text>
                    <Picker 
                        style = {styles.picker}>
                        <Picker.Item label = "거래중" value = "거래중" />
                        <Picker.Item label = "거래가능" value = "거래가능" />
                    </Picker>
                </View>


                <View style = {styles.grid}>
                    <TouchableOpacity>
                        <Image source = {require('./img/clothes.png')} style = {styles.post} />
                    </TouchableOpacity>

                    <TouchableOpacity>                        
                        <Image source = {require('./img/clothes.png')} style = {styles.post} />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image source = {require('./img/clothes.png')} style = {styles.post} />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image source = {require('./img/clothes.png')} style = {styles.post} />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image source = {require('./img/clothes.png')} style = {styles.post} />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image source = {require('./img/clothes.png')} style = {styles.post} />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image source = {require('./img/clothes.png')} style = {styles.post} />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image source = {require('./img/clothes.png')} style = {styles.post} />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image source = {require('./img/clothes.png')} style = {styles.post} />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}
export default otherPostScreen;

const styles = StyleSheet.create({
    container : {
        flex : 1,
    },

    grid : {
        flex : 1,
        flexDirection : 'row',
        flexWrap : 'wrap',
        justifyContent : 'space-evenly',
        alignItems : 'center',
    },

    post : {
        width : 110,
        height : 110,
        justifyContent : 'center',
        alignItems : 'center',
        marginTop : 10,
        top : -70,
    },

    userInfo : {
        flex : 1,
        flexDirection : 'row',
        flexWrap : 'wrap',
        alignItems : 'center',
        marginLeft : 15,
        position : 'relative'
    },

    profile : {
        display : 'inline-block',
        width : 40,
        height : 40,
    },

    name : {
        display : 'inline-block',
        marginLeft : 10,
        fontSize : 25,
    },

    picker : {
        position : 'absolute',
        top : 80,
        right : 20,
        fontSize : 20,
    }


})