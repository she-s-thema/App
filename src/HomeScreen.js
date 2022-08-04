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
                        <View style = {styles.select}>
                            <Text style = {styles.text}>최근</Text>
                            <Picker 
                                style = {styles.picker}>
                                <Picker.Item label = "신성동 1가" value = "신성동 1가" />
                                <Picker.Item label = "전포동" value = "전포동" />
                                <Picker.Item label = "부암동" value = "부암동" />
                                <Picker.Item label = "가락동" value = "가락동" />
                            </Picker>
                        </View>
        
                        <View style={styles.view}>
                                <TouchableOpacity
                                    onPress={() => {
                                        }}>
                                        <View style = {styles.post}>
                                            <Image 
                                                style = {styles.profile}
                                                source = {require('./img/pro.png')}  />
                                            <Text style = {styles.name}>yyu._.e</Text>
                                            <Image style ={styles.image}
                                                source = {require('./img/clothes.png')}/>
                                            <Image style = {styles.heart}
                                                source = {require('./img/heart.fill.png')} />
                                            <Text style = {styles.count}>15</Text>
                                        </View>
    
                                        <Text style = {styles.explain}>2000원</Text>
                                        <Text  style = {styles.explain}>검정 싱글 크롭 자켓</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    onPress={() => {
                                        }}>
                                        <View style = {styles.post}>
                                            <Image 
                                                style = {styles.profile}
                                                source = {require('./img/pro.png')}  />
                                            <Text style = {styles.name}>yyu._.e</Text>
                                            <Image style ={styles.image}
                                                source = {require('./img/clothes.png')}/>
                                            <Image style = {styles.heart}
                                                source = {require('./img/heart.fill.png')} />
                                            <Text style = {styles.count}>15</Text>
                                        </View>
    
                                        <Text style = {styles.explain}>2000원</Text>
                                        <Text  style = {styles.explain}>검정 싱글 크롭 자켓</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={styles.view}>
                                <TouchableOpacity
                                        onPress={() => {
                                            }}>
                                            <View style = {styles.post}>
                                                <Image 
                                                    style = {styles.profile}
                                                    source = {require('./img/pro.png')}  />
                                                <Text style = {styles.name}>yyu._.e</Text>
                                                <Image style ={styles.image}
                                                    source = {require('./img/clothes.png')}/>
                                                <Image style = {styles.heart}
                                                    source = {require('./img/heart.fill.png')} />
                                                <Text style = {styles.count}>15</Text>
                                            </View>
        
                                            <Text style = {styles.explain}>2000원</Text>
                                            <Text  style = {styles.explain}>검정 싱글 크롭 자켓</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        onPress={() => {
                                            }}>
                                            <View style = {styles.post}>
                                                <Image 
                                                    style = {styles.profile}
                                                    source = {require('./img/pro.png')}  />
                                                <Text style = {styles.name}>yyu._.e</Text>
                                                <Image style ={styles.image}
                                                    source = {require('./img/clothes.png')}/>
                                                <Image style = {styles.heart}
                                                    source = {require('./img/heart.fill.png')} />
                                                <Text style = {styles.count}>15</Text>
                                            </View>
        
                                            <Text style = {styles.explain}>2000원</Text>
                                            <Text  style = {styles.explain}>검정 싱글 크롭 자켓</Text>
                                    </TouchableOpacity>      
                            </View>               

                            <View style={styles.view}>
                                <TouchableOpacity
                                        onPress={() => {
                                            }}>
                                            <View style = {styles.post}>
                                                <Image 
                                                    style = {styles.profile}
                                                    source = {require('./img/pro.png')}  />
                                                <Text style = {styles.name}>yyu._.e</Text>
                                                <Image style ={styles.image}
                                                    source = {require('./img/clothes.png')}/>
                                                <Image style = {styles.heart}
                                                    source = {require('./img/heart.fill.png')} />
                                                <Text style = {styles.count}>15</Text>
                                            </View>
        
                                            <Text style = {styles.explain}>2000원</Text>
                                            <Text  style = {styles.explain}>검정 싱글 크롭 자켓</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        onPress={() => {
                                            }}>
                                            <View style = {styles.post}>
                                                <Image 
                                                    style = {styles.profile}
                                                    source = {require('./img/pro.png')}  />
                                                <Text style = {styles.name}>yyu._.e</Text>
                                                <Image style ={styles.image}
                                                    source = {require('./img/clothes.png')}/>
                                                <Image style = {styles.heart}
                                                    source = {require('./img/heart.fill.png')} />
                                                <Text style = {styles.count}>15</Text>
                                            </View>
        
                                            <Text style = {styles.explain}>2000원</Text>
                                            <Text  style = {styles.explain}>검정 싱글 크롭 자켓</Text>
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
        justifyContent : 'center',
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
        flex : 1,
        flexDirection : 'row',
        flexWrap : 'wrap',
        justifyContent : 'space-evenly',
        alignItems : 'center',
    },

    select : {
        marginTop : 15,
        flexDirection : 'row',
        flexWrap : 'wrap',
        alignItems : 'center',
        left : -70,
        marginBottom : 15,
    },

    text : {
        marginTop : 10,
        fontSize : 25,
        display : 'inline-block'
    },

    picker : {
        fontSize : 20,
        display : 'inline-block',
        marginTop : 10,
        marginLeft : 10,
    },

    post : {
        position : 'relative',
    },

    image : {
        width : 150,
        height : 200,
        margin : 10,
        justifyContent : 'center',
        alignItems : 'center',
        },

    profile : {
        width : 30,
        height : 30,
        marginTop : 15,
        position : 'absolute',
        left : 15,
        zIndex : 2,
    },

    name : {
        position : 'absolute',
        top : 20,
        left : 50,
        zIndex : 2,
        color : '#FFFFFF',
        fontWeight : 'bold'
    },

    heart : {
        width : 20,
        height : 20,
        position : 'absolute',
        right : 35,
        top : 20,
        zIndex : 2,
    },

    count : {
        position : 'absolute',
        top : 19,
        right : 15,
        color : '#FFFFFF',
        fontWeight : 'bold'
    },

    explain : {
        marginLeft : 8,
        fontWeight: "bold",
    },

});

export default HomeScreen;