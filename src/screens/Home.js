import React from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import PostList from '../data/PostList.json';
import Detail from '../screens/Detail';

const Home = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <TextInput
          style={styles.search}
          placeholder="검색하시려면 클릭해주세요."
        />

        <View style={styles.view}>
          {PostList.map(data => {
            return (
              <View style={styles.post}>
                <TouchableOpacity
                  title="상세정보 열기"
                  onPress={() => navigation.navigate('Detail')}>
                  <Image
                    style={styles.heart}
                    source={require('./img/heart.fill.png')}
                  />
                  <Image
                    style={styles.profile}
                    source={{uri: data.owner.profileImg}}
                  />
                  <Text style={styles.name}>{data.owner.name}</Text>
                  <View style={styles.heart_count} />
                  <Text style={styles.count}>{data.heart}</Text>
                  <Image style={styles.image} source={{uri: data.imgSrc}} />

                  <Text style={styles.explain1}>{data.rentalPrice}</Text>
                  <Text style={styles.explain2}>{data.title}</Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  search: {
    width: 320,
    height: 43,
    top: 15,
    marginBottom: 25,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    color: 'white',
    padding: 15,
  },

  view: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  select: {
    marginTop: 15,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    left: -70,
    marginBottom: 15,
  },

  text: {
    marginTop: 10,
    fontSize: 25,
  },

  picker: {
    fontSize: 20,
    marginTop: 10,
    marginLeft: 7,
    borderWidth: 0,
    top: -5,
    fontWeight: 'bold',
  },

  post: {},

  image: {
    width: 150,
    height: 200,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  profile: {
    width: 30,
    height: 30,
    marginTop: 15,
    position: 'absolute',
    left: 15,
    zIndex: 2,
    borderRadius: 30,
  },

  name: {
    position: 'absolute',
    top: 20,
    left: 50,
    zIndex: 2,
    color: '#FFFFFF',
  },

  heart: {
    width: 15,
    height: 13,
    position: 'absolute',
    right: 45,
    zIndex: 2,
    marginTop: 20,
  },

  count: {
    position: 'absolute',
    top: 17,
    right: 17,
    color: '#FFFFFF',
    wordSpacing: 5,
    alignItems: 'center',
    zIndex: 2,
  },

  heart_count: {
    letterSpacing: 5,
  },

  explain1: {
    marginLeft: 7,
    fontSize: 14,
    fontWeight: 'bold',
  },

  explain2: {
    marginLeft: 7,
    fontSize: 12,
  },

  background: {
    backgroundColor: 'white',
  },
});

export default Home;
