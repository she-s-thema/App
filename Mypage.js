import { StyleSheet, Image, Text, View } from 'react-native';

export default function Mypage() {
    return (
        <View>
            <View>
                <Image  style = {styles.profile} source = {require('../img/profile.png')} />
                <Text style = {styles.nickname}>k99._.e</Text>
                <Text style = {styles.location}>부산광역시 강서구 가락동</Text>
                <Text style = {styles.edit}>정보 수정</Text>
            </View>
            <View style = {styles.container}>
                <View style = {styles.gomak}>
                    <Text style = {styles.gomaktext}>보유 꼬막</Text>
                    <View style = {styles.container}>
                        <Text style = {styles.have}>1,000,000</Text>
                        <Image  style = {styles.minigomak} source = {require('../img/mini_gomak.png')} />
                        <Image  style = {styles.next} source = {require('../img/next.png')} />
                    </View>
                </View>
                <View style = {styles.deal}>
                    <Text style = {styles.dealtext}>거래 내역</Text>
                    <View style = {styles.container}>
                        <Text style = {styles.count}>12</Text>
                        <Image  style = {styles.next} source = {require('../img/next.png')} />
                    </View>
                </View>
            </View>
            <View style = {styles.container}>
                <Image style = {styles.heart} source = {require('../img/heart.png')}/>
                <Text style = {styles.hpost}>쨈한 게시물</Text>
                <Image style = {styles.nexttwo} source = {require('../img/next.png')}/>
            </View>
            <View style = {styles.container}>
                <Image style = {styles.picture} source = {require('../img/picture.png')}/>
                <Image style = {styles.picture} source = {require('../img/picture.png')}/>
                <Image style = {styles.picture} source = {require('../img/picture.png')}/>
            </View>
            <View style = {styles.container}>
                <Text style = {styles.posttitle}>검정 싱글 크롭 자켓</Text>
                <Text style = {styles.posttitle}>검정 싱글 크롭 자켓</Text>
                <Text style = {styles.posttitle}>검정 싱글 크롭 자켓</Text>
            </View>
            <View style = {styles.container}>
                <Text style = {styles.postcost}>10,500원</Text>
                <Text style = {styles.postcost}>10,500원</Text>
                <Text style = {styles.postcost}>10,500원</Text>
            </View>
            <View style = {styles.container}>
                <Image style = {styles.mypost} source = {require('../img/mypost.png')}/>
                <Text style = {styles.hpost}>내 게시물</Text>
                <Image style = {styles.nexttwo} source = {require('../img/next.png')}/>
            </View>
            <View style = {styles.container}>
                <Image style = {styles.picture} source = {require('../img/picture.png')}/>
                <Image style = {styles.picture} source = {require('../img/picture.png')}/>
                <Image style = {styles.picture} source = {require('../img/picture.png')}/>
            </View>
            <View style = {styles.container}>
                <Text style = {styles.posttitle}>검정 싱글 크롭 자켓</Text>
                <Text style = {styles.posttitle}>검정 싱글 크롭 자켓</Text>
                <Text style = {styles.posttitle}>검정 싱글 크롭 자켓</Text>
            </View>
            <View style = {styles.container}>
                <Text style = {styles.postcost}>10,500원</Text>
                <Text style = {styles.postcost}>10,500원</Text>
                <Text style = {styles.postcost}>10,500원</Text>
            </View>
            <View style={styles.pic}>
                <Image style = {styles.please} source = {require('../img/please.png')}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    profile : {
        width : 93,
        height : 93,
        borderRadius : 50,
        marginTop : 58,
        marginLeft : 20,
        position : 'relative',
        alignItem : 'stretch',
    },

    nickname : {
        fontSize : 24,
        marginLeft : 130,
        marginTop : 68,
        position : 'absolute',
    },

    location : {
        fontSize : 14,
        marginLeft : 130,
        marginTop : 100,
        position : 'absolute',
    },

    edit : {
        Color : "gray",
        fontSize : 10,
        marginLeft : 130,
        marginTop : 125,
        position : 'absolute',
    },

    container : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        marginRight : 20,
    },

    gomak : {
        marginTop : 28,
        marginLeft : 20,
        borderRadius : 14,
        width : 155,
        height : 60,
        backgroundColor : '#F6F8FF',
    },

    gomaktext : {
        fontSize : 10,
        marginTop : 15,
        marginLeft : 14,
    },

    have : {
        fontSize : 16,
        marginTop : 4,
        marginLeft : 14,
    },

    minigomak : {
        width : 15,
        height : 14,
        marginTop : 5.5,
        marginRight : 24,
    },

    next : {
        width : 5,
        height : 8.69,
        marginTop : 8,
    },

    deal : {
        marginTop : 28,
        marginLeft : 20,
        borderRadius : 14,
        width : 155,
        height : 60,
        backgroundColor : '#F6F8FF',
    },

    dealtext : {
        fontSize : 10,
        marginTop : 15,
        marginLeft : 14,
    },

    count : {
        fontSize : 16,
        marginTop : 4,
        marginLeft : 14,
    },

    heart : {
        width : 15,
        height : 14,
        marginLeft : 20,
        marginTop : 28,
    },

    hpost : {
        fontSize : 14,
        marginTop : 26,
        marginRight : 250,

    },

    nexttwo : {
        width : 6.91,
        height : 12,
        marginTop : 28,
    },

    picture : {
        marginTop : 18,
        marginLeft : 20,
    },

    posttitle : {
        fontSize : 10,
        marginTop : 9,
        marginLeft : 20,
        marginRight : 20,
    },

    postcost : {
        fontSize : 8,
        marginTop : 2,
        marginLeft : 20,
        marginRight : 62,
    },

    mypost : {
        width : 15,
        height : 14,
        marginLeft : 20,
        marginTop : 28,
    },

    please : {
        width : 320,
        height : 58,
        marginTop : 28,
    },

    pic : {
        alignItems : 'center',
    }

});
