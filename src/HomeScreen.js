import React from 'react';
import {StyleSheet, Picker, TextInput, View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import { block } from 'react-native-reanimated';




class HomeScreen extends React.Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <TextInput
                        style={styles.search}
                        placeholder="검색하시려면 클릭해주세요." />
                        <Text style = {styles.text}>최근</Text>
                        <Picker 
                            style = {styles.picker}>
                            <Picker.Item label = "신성동 1가" value = "신성동 1가" />
                            <Picker.Item label = "전포동" value = "전포동" />
                            <Picker.Item label = "부암동" value = "부암동" />
                            <Picker.Item label = "가락동" value = "가락동" />
                        </Picker>

                        <View style={styles.view}>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => {
                                    }}>
                                    <Image 
                                        style = {styles.profile}
                                        source= {require('./img/profile.png')} />
                                    <Text style = {styles.name}>yyu._.e</Text>
                                    <Image style={styles.image}
                                        source={require('./img/clothes.png')}/>
                                        <Text style = {styles.explain}>2000원</Text>
                                        <Text style = {styles.explain}>검정 싱글 크롭 자켓</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => {
                                    }}>
                                    <Image 
                                        style = {styles.profile}
                                        source= {require('./img/profile.png')} />
                                    <Text style = {styles.name}>yyu._.e</Text>
                                    <Image style={styles.image}
                                        source={require('./img/clothes.png')}/>
                                        <Text style = {styles.explain}>2000원</Text>
                                        <Text style = {styles.explain}>검정 싱글 크롭 자켓</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.view}>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => {
                                    }}>
                                    <Image 
                                        style = {styles.profile}
                                        source= {require('./img/profile.png')} />
                                    <Text style = {styles.name}>yyu._.e</Text>
                                    <Image style={styles.image}
                                        source={require('./img/clothes.png')}/>
                                        <Text style = {styles.explain}>2000원</Text>
                                        <Text style = {styles.explain}>검정 싱글 크롭 자켓</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => {
                                    }}>
                                    <Image 
                                        style = {styles.profile}
                                        source= {require('./img/profile.png')} />
                                    <Text style = {styles.name}>yyu._.e</Text>
                                    <Image style={styles.image}
                                        source={require('./img/clothes.png')}/>
                                        <Text style = {styles.explain}>2000원</Text>
                                        <Text style = {styles.explain}>검정 싱글 크롭 자켓</Text>
                            </TouchableOpacity>
                        </View>
                </View>
            </ScrollView>
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

    search : {
        width : 320,
        height : 43,
        backgroundColor : '#F5F5F5',
        borderRadius : 5,
        color : 'gray',
        padding : 15,
    },

    view : {
        flex: 1, 
        flexDirection: 'row',
        justifyContent: 'center', 
        alignItems: 'center',
    },

    button : { 
        flex : 1,
        justifyContent: 'center', 
        marginTop : 15,
    },

    image : {
        width : 150,
        height : 200,
        margin : 10,
        position : 'relative',
    },

    picker : {
        marginTop : 10,
    },

    text : {
        marginTop : 10,
        fontSize : 20,

    },

    explain : {
        marginLeft : 8,
    },




});

export default HomeScreen;
