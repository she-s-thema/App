import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

class HomeScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.search}
                    placeholder="검색하시려면 클릭해주세요." />
            </View>
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
        height : 38,
        backgroundColor : '#F5F5F5',
        borderRadius : 5,
        color : 'gray',
    }


});

export default HomeScreen;