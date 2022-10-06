import React from 'react';
import {Text, TouchableOpacity, View, Image, StyleSheet} from 'react-native';
import {ImageBackground} from 'react-native-web';
import Swiper from 'react-native-swiper';

export default class imageSlider extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 1}}>
          <Swiper
            from={1}
            minDistanceForAction={0.1}
            controlsProps={{
              dotsTouchable: true,
              prevPos: 'left',
              nextPos: 'right',
              nextTitle: '>',
              nextTitleStyle: {color: 'white', fontSize: 24, fontWeight: '500'},
              PrevComponent: ({onPress}) => (
                <TouchableOpacity onPress={onPress}>
                  <Text
                    style={{color: 'white', fontSize: 24, fontWeight: '500'}}>
                    {'<'}
                  </Text>
                </TouchableOpacity>
              ),
            }}>
            <ImageBackground
              style={styles.image}
              source={require('./img/clothes.png')}
            />
            <ImageBackground
              style={styles.image}
              source={require('./img/clothes.png')}
            />
            <ImageBackground
              style={styles.image}
              source={require('./img/clothes.png')}
            />
          </Swiper>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 380,
    height: 380,
    marginLeft: -10,
    marginTop: 30,
  },
  image: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
});
