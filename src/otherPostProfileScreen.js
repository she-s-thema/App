import React from 'react';
import { ScrollView, View, Image, TouchableOpacity, StyleSheet, Text} from 'react-native';


class otherPostProfileScreen extends React.Component{
    render(){
        return(
            <ScrollView style = {styles.container}>
                <Image  style = {styles.profile} source = {require('./img/profile.png')} />
                <Text>k99._.e</Text>
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

                    <Image style = {styles.gomak} source = {require('./img/gomak.png')} />
                    <Text>거래 후기</Text>

                    <View style = {styles.reviewBox}>
                        <Image source = {require('./img/catprofile.png')} style = {styles.gomak}></Image>
                        <Text>쉬스테마</Text>
                        <Text style = {styles.review}>옷 상태가 너무너무 좋고요 천 원 깎아주셔서 저렴하게 인생샷 건졌습니당 희희</Text>
                    </View>

                    <View style = {styles.reviewBox}>
                        <Image source = {require('./img/catprofile.png')} style = {styles.gomak}></Image>
                        <Text>쉬스테마</Text>
                        <Text style = {styles.review}>옷 상태가 너무너무 좋고요 천 원 깎아주셔서 저렴하게 인생샷 건졌습니당 희희</Text>
                    </View>

                    <View style = {styles.reviewBox}>
                        <Image source = {require('./img/catprofile.png')} style = {styles.gomak}></Image>
                        <Text>쉬스테마</Text>
                        <Text style = {styles.review}>옷 상태가 너무너무 좋고요 천 원 깎아주셔서 저렴하게 인생샷 건졌습니당 희희</Text>
                    </View>

                    <View style = {styles.reviewBox}>
                        <Image source = {require('./img/catprofile.png')} style = {styles.gomak}></Image>
                        <Text>쉬스테마</Text>
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
        marginTop : 50,
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
        marginTop : 10,
        justifyContent : 'center',
        alignItems : 'center',
    },
    
    profile : {
        width : 30,
        height : 30
    },

    reviewBox : {
        width : 330,
        height : 100,
        backgroundColor : '#F6F6F6',
        borderRadius : 5,
        marginTop : 10,
    },


    gomak : {
        width : 30,
        height : 30,
    }


})