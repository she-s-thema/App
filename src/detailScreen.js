import React from 'react'
import {View, Text, Image, StyleSheet,ScrollView } from 'react-native'

class detailScreen extends React.Component{
    render() {
        return(
            <ScrollView>
                <View>
                    <Image 
                        source = {require('./img/clothes.png')} 
                        style = {styles.img} />
                        <Image
                            source = {require('./img/profile.png')} 
                            style ={styles.profile} />
                            <Text>k99._.e</Text>
                        <Text style = {styles.explain}>검정 싱글 크롭 자켓</Text>
                        <Text style = {styles.explain}>3000원</Text>
                        <Text style = {styles.state}>제 친구랑 카페 갈 때 한 번 입고 장롱에 박아놨어요... 근데 치마랑 세트로 입으면 존예임 진심 ㄹㅇ 트루</Text>
                        <Text style = {styles.explain}>상품 상태</Text>
                        <Text style = {styles.state}>오염</Text>
                        <Text style = {styles.state}>변색</Text>
                        <Text style = {styles.state}>찢어짐</Text>
                        <Text style = {styles.state}>구겨짐</Text>

                </View>
            </ScrollView>
        )

    }
}

const styles = StyleSheet.create ({
    img : {
        width : 380,
        height : 380,
        marginTop : 100,
    },

    profile : {
        width : 30,
        height : 30,
    },

    explain : {
        fontSize : 23,
        fontWeight: "bold",
        marginTop : 5,
    },

    state : {
        fontSize : 15,
        marginTop :5,
    }
})

export default detailScreen;