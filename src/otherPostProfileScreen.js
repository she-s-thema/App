import React from 'react';
import { ScrollView, View, Image, TouchableOpacity, StyleSheet, Text} from 'react-native';


class otherPostProfileScreen extends React.Component{
    render(){
        return(
            <ScrollView style = {styles.container}>
                <View style = {styles.userInfo}>
                    <Image style = {styles.profile} source = {require('./img/pro.png')} />
                    <Text style = {styles.name}>k99._.e</Text>
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

                <View style = {styles.dealReview}>
                    <Image style = {styles.gomak} source = {require('./img/gomak.png')} />
                    <Text style = {styles.deal}>거래 후기</Text>
                </View>

                    <View style = {styles.reviewBox}>
                        <Image source = {require('./img/catprofile.png')} style = {styles.reviewProfile}></Image>
                        <Text style = {styles.reviewName}>쉬스테마</Text>
                        <Text style = {styles.review}>옷 상태가 너무너무 좋고요 천 원 깎아주셔서 저렴하게 인생샷 건졌습니당 희희</Text>
                    </View>

                    <View style = {styles.reviewBox}>
                        <Image source = {require('./img/catprofile.png')} style = {styles.reviewProfile}></Image>
                        <Text style = {styles.reviewName}>쉬스테마</Text>
                        <Text style = {styles.review}>옷 상태가 너무너무 좋고요 천 원 깎아주셔서 저렴하게 인생샷 건졌습니당 희희</Text>
                    </View>

                    <View style = {styles.reviewBox}>
                        <Image source = {require('./img/catprofile.png')} style = {styles.reviewProfile}></Image>
                        <Text style = {styles.reviewName}>쉬스테마</Text>
                        <Text style = {styles.review}>옷 상태가 너무너무 좋고요 천 원 깎아주셔서 저렴하게 인생샷 건졌습니당 희희</Text>
                    </View>

                    <View style = {styles.reviewBox}>
                        <Image source = {require('./img/catprofile.png')} style = {styles.reviewProfile}></Image>
                        <Text style = {styles.reviewName}>쉬스테마</Text>
                        <Text style = {styles.review}>옷 상태가 너무너무 좋고요 천 원 깎아주셔서 저렴하게 인생샷 건졌습니당 희희</Text>
                    </View>
            </ScrollView>
        )
    }
}
export default otherPostProfileScreen;


const styles = StyleSheet.create({
    container : {
        flex : 1,
        marginTop : 30,
    },

    grid : {
        flex : 1,
        flexDirection : 'row',
        flexWrap : 'wrap',
        justifyContent : 'space-evenly',
        alignItems : 'center',
    },

    userInfo : {
        flex : 1,
        flexDirection : 'row',
        flexWrap : 'wrap',
        alignItems : 'center',
        position : 'relative'
    },

    name : {
        display : 'inline-block',
        marginLeft : 10,
        fontSize : 20,
        position : 'absolute',
        left : 40,
    },

    profile : {
        display : 'inline-block',
        width : 30,
        height : 30,
        position : 'absolute',
        left : 10,
    },

    post : {
        width : 110,
        height : 110,
        marginTop : 10,
        top : -40,
        justifyContent : 'center',
        alignItems : 'center',
    },

    dealReview : {
        flex : 1,
        flexDirection : 'row',
        flexWrap : 'wrap',
        alignItems : 'center',
    },

    gomak : {
        position : 'absolute',
        width : 30,
        height : 30,
        display : 'inline-block',
        marginLeft : 20,
        top : 220,
    },

    deal : {
        position : 'absolute',
        display : 'inline-block',
        marginLeft : 10,
        fontSize : 20,
        fontWeight : 'bold',
        top : 220,
        left : 50,
    },

    reviewBox : {
        width : 330,
        height : 70,
        backgroundColor : '#F6F6F6',
        borderRadius : 5,
        marginTop : 15,
        marginLeft : 20,
        position : 'relative',
        top : 125
    },

    reviewProfile : {
        position : 'absolute',
        width : 30,
        height : 30,
        borderRadius : 30,
        top : 10,
        left : 20,
    },

    reviewName : {
        position : 'absolute',
        top : 35,
        left : 7,
        marginTop : 5,
    },

    review : {
        position : 'absolute',
        top : 15,
        left : 75,
    }

})