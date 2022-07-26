import React from 'react';
import { ScrollView, View, Image, TouchableOpacity, StyleSheet, Text} from 'react-native';

class otherPostScreen extends React.Component{
    render() {
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
            </ScrollView>
        )
    }
}
export default otherPostScreen;

const styles = StyleSheet.create({
    
    profile : {
        width : 30,
        height : 30
    },

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
})