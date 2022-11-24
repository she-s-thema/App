import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const Detail = () => {
  return (
    <ScrollView>
      <View style={styles.background}>
        <View style={styles.container}>
          <Image
            source={require('./img/brown.png')}
            style={styles.picture}
          />
          <View style={styles.view}>
            <View style={styles.userInfo}>
              <Image
                source={require('./img/brown.png')}
                style={styles.profile}
              />
              <Text style={styles.name}>k99._.e</Text>
            </View>

            <Text style={styles.product_name}>브라운 후드 집업</Text>
            <Text style={styles.product_price}>2300원</Text>
            <Text style={styles.product_explain}>
              한번 입어보고 컬러가 저랑 안 맞아서 안 입고 있어요. 꾸안꾸로
              딱이에요.
            </Text>

            <View style={styles.product}>
              <Text style={styles.product_state}>상품 상태</Text>
              <View style={styles.state}>
                <Text style={styles.states}>오염 X </Text>
                <Text style={styles.states}>변색 X </Text>
                <Text style={styles.states}>찢어짐 X </Text>
                <Text style={styles.states}>구겨짐 X </Text>
              </View>
            </View>
          </View>
          <View style={styles.conversation}>
            <View style={styles.show}>
              {/* <Image style = {styles.heart} source = {require('../img/heart.png')}/> */}
              <Text style={styles.count}>20</Text>
            </View>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.converBtn}>대화하기</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  picture : {
    height : 400,
    width : 390,
  },

  background: {
    backgroundColor: 'white',
    height: '100%',
  },

  container: {
    flex: 1,
    marginTop: 50,
    justifyContent: 'left',
    alignItems: 'left',
  },
  borroBtn: {
    color: '#646FD4',
  },

  view: {
    marginLeft: 10,
  },

  userInfo: {
    marginTop: 10,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },

  name: {
    marginLeft: 10,
    fontSize: 20,
    display: 'inline-block',
  },

  profile: {
    width: 40,
    height: 40,
    display: 'inline-block',
    borderRadius: 30,
  },

  product_view: {
    top: 10,
  },

  product_name: {
    marginTop: 20,
    fontSize: 23,
    fontWeight: 'bold',
  },

  product_price: {
    fontSize: 23,
  },

  product_explain: {
    marginTop: 10,
    fontSize: 17,
  },

  product_state: {
    marginTop: 10,
    fontSize: 23,
    fontWeight: 'bold',
  },

  state: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    position: 'relative',
    marginTop: 10,
  },

  states: {
    display: 'inline-block',
    color: '#797979',
  },

  conversation: {
    width: 450,
    height: 60,
    borderWidth: 1,
    borderTopRightRadius: 14,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginTop: 10,
  },

  show: {
    display: 'inline-block',
    left: 35,
    top: -5,
    position: 'relative',
  },

  heart: {
    width: 20,
    height: 20,
  },

  count: {
    position: 'absolute',
    left: 2,
  },

  btn: {
    display: 'inline-block',
    right: 30,
    borderWidth: 1,
    borderRadius: 20,
    width: 260,
    height: 37,
    position: 'absolute',
    backgroundColor: '#7886FF',
    color: '#FFFFFF',
    textAlign: 'center',
    padding: 5,
  },

  converBtn: {
    color: '#FFFFFF',
    fontSize: 12,
    top: 5,
  },

  ing: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    position: 'relative',
    top: 50,
  },

  back: {
    position: 'absolute',
    display: 'inline-block',
    fontWeight: 3,
    fontSize: 30,
    left: 20,
    top: -23,
  },

  trading: {
    display: 'inline-block',
    color: '#797979',
    position: 'absolute',
    left: 55,
  },

  borrow: {
    position: 'absolute',
    display: 'inline-block',
    right: 15,
  },

  product: {
    top: 5,
    marginBottom: 10,
  },
});

export default Detail;
