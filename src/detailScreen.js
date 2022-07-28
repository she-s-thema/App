import React from 'react'
import {View, Text, Image, StyleSheet, ScrollView, TouchableOpacity} from 'react-native'

class detailScreen extends React.Component{
    render() {
        return(
            <ScrollView>
                <View style = {styles.container}>
                    <Image 
                        source = {require('./img/clothes.png')} 
                        style = {styles.img} />

                        <View style = {styles.view}>
                            <View style = {styles.userInfo}>
                                <Image
                                    source = {require('./img/pro.png')} 
                                    style ={styles.profile} />
                                <Text style = {styles.name}>k99._.e</Text>
                            </View>

                            <Text style = {styles.product_name}>검정 싱글 크롭 자켓</Text>
                            <Text style = {styles.product_price}>3000원</Text>
                            <Text style = {styles.product_explain}>제 친구랑 카페 갈 때 한 번 입고 장롱에 박아놨어요... 근데 치마랑 세트로 입으면 존예임 진심 ㄹㅇ 트루</Text>

                            <Text style = {styles.product_state}>상품 상태</Text>
                            <View style = {styles.state}>
                                <Text style = {styles.states}>오염 X</Text>
                                <Text style = {styles.states}>변색 X</Text>
                                <Text style = {styles.states}>찢어짐 X</Text>
                                <Text style = {styles.states}>구겨짐 X</Text>
                            </View>
                        </View>
                </View>
            </ScrollView>
        )

    }
}

const styles = StyleSheet.create ({
    container : {
        flex : 1,
        marginTop : 50,
        justifyContent : 'left',
        alignItems : 'left',
    },

    view : {
        marginLeft : 10,
    },

    img : {
        width : 380,
        height : 380,
        marginTop : 100,
    },

    userInfo : {
        marginTop : 10,
        flex : 1,
        flexDirection : 'row',
        flexWrap : 'wrap',
        alignItems : 'center',
    },

    name : {
        marginLeft : 10,
        fontSize : 20,
        display : 'inline-block',
    },

    profile : {
        width : 40,
        height : 40,
        display : 'inline-block',
    },

    product_name : {
        marginTop : 20,
        fontSize : 23,
        fontWeight: "bold",
    },

    product_price : {
        fontSize : 23,
        fontWeight: "bold",
    },

    product_explain : {
        marginTop : 5,
        fontSize : 17
    },
    
    product_state : {
        marginTop : 10,
        fontSize : 23,
        fontWeight: "bold",
    },

    state : {
        flex : 1,
        flexDirection : 'row',
        flexWrap : 'wrap',
        alignItems : 'center',
        position : 'relative',
    },
    
    states : {
        marginLeft : 10,
        display : 'inline-block',
    },

})

export default detailScreen;