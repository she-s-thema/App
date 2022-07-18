import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

class ChatScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={[{ fontSize : 40, color : "black"}]}>
                    채팅
                </Text>
                <Image
                    source = {require('./img/tune.png')}
                    style={styles.img} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        marginTop : 50,
        marginLeft : 20,
        position : 'relative',
        marginRight : 21,
    },

    img : {
        width : 26.25,
        height : 26.25,
        alignSelf : 'flex-end',
        position : 'absolute',
    },
});

export default ChatScreen;
