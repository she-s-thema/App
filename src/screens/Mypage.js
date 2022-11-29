import {StyleSheet, Image, Text, View, ScrollView} from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
  profile: {
    width: 93,
    height: 93,
    borderRadius: 50,
    marginTop: 58,
    marginLeft: 20,
    position: 'relative',
  },

  nickname: {
    fontSize: 24,
    marginLeft: 130,
    marginTop: 68,
    position: 'absolute',
  },

  location: {
    fontSize: 14,
    marginLeft: 130,
    marginTop: 100,
    position: 'absolute',
  },

  edit: {
    color: 'gray',
    fontSize: 10,
    marginLeft: 130,
    marginTop: 125,
    position: 'absolute',
  },

  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 20,
  },

  gomak: {
    marginTop: 28,
    marginLeft: 20,
    borderRadius: 14,
    width: 155,
    height: 60,
    backgroundColor: '#F6F8FF',
  },

  gomaktext: {
    fontSize: 10,
    marginTop: 15,
    marginLeft: 14,
  },

  have: {
    fontSize: 16,
    marginTop: 4,
    marginLeft: 14,
  },

  minigomak: {
    width: 15,
    height: 14,
    marginTop: 5.5,
    marginRight: 24,
  },

  next: {
    width: 5,
    height: 8.69,
    marginTop: 8,
  },

  deal: {
    marginTop: 28,
    marginLeft: 20,
    borderRadius: 14,
    width: 155,
    height: 60,
    backgroundColor: '#F6F8FF',
  },

  dealtext: {
    fontSize: 10,
    marginTop: 15,
    marginLeft: 14,
  },

  count: {
    fontSize: 16,
    marginTop: 4,
    marginLeft: 14,
  },

  heart: {
    width: 15,
    height: 14,
    marginLeft: 20,
    marginTop: 28,
  },

  hpost: {
    fontSize: 14,
    marginTop: 27,
    marginRight: 250,
  },

  nexttwo: {
    width: 6.91,
    height: 12,
    marginTop: 28,
  },

  picture: {
    width: 100,
    height: 100,
    marginTop: 18,
    marginLeft: 20,
    borderRadius: 5,
  },

  posttitle: {
    fontSize: 10,
    marginTop: 9,
    marginLeft: 20,
    marginRight: 25,
  },

  postcost: {
    fontSize: 8,
    marginTop: 2,
    marginLeft: 20,
    marginRight: 62,
    color: 'grey',
  },

  mypost: {
    width: 19,
    height: 19,
    marginLeft: 20,
    marginTop: 28,
  },

  please: {
    width: 320,
    height: 58,
    marginTop: 28,
    marginBottom: 20,
  },

  pic: {
    alignItems: 'center',
  },

  background: {
    backgroundColor: 'white',
    height: '100%',
  },
});

const Mypage = () => {
  return (
    <ScrollView>
      <View style={styles.background}>
        <View>
          <Image style={styles.profile} source={require('./img/ben.jpeg')} />
          <Text style={styles.nickname}>황인준</Text>
          <Text style={styles.location}>부산광역시 강서구 가락동</Text>
          <Text style={styles.edit}>정보 수정</Text>
        </View>
        <View style={styles.container}>
          <View style={styles.gomak}>
            <Text style={styles.gomaktext}>보유 꼬막</Text>
            <View style={styles.container}>
              <Text style={styles.have}>13</Text>
              <Image
                style={styles.minigomak}
                source={require('./img/mini_gomak.png')}
              />
              <Image style={styles.next} source={require('./img/next.png')} />
            </View>
          </View>
          <View style={styles.deal}>
            <Text style={styles.dealtext}>거래 내역</Text>
            <View style={styles.container}>
              <Text style={styles.count}>2</Text>
              <Image style={styles.next} source={require('./img/next.png')} />
            </View>
          </View>
        </View>
        <View style={styles.container}>
          <Image style={styles.heart} source={require('./img/he.png')} />
          <Text style={styles.hpost}>찜한 게시물</Text>
          <Image style={styles.nexttwo} source={require('./img/next.png')} />
        </View>
        <View style={styles.container}>
          <Image
            style={styles.picture}
            source={require('./img/Mypage/picture6.png')}
          />
          <Image
            style={styles.picture}
            source={require('./img/Mypage/padding.png')}
          />
          <Image
            style={styles.picture}
            source={require('./img/onepiece.png')}
          />
        </View>
        <View style={styles.container}>
          <Text style={styles.posttitle}>체크 집업</Text>
          <Text style={styles.posttitle}>아이보리 패딩</Text>
          <Text style={styles.posttitle}>베이지 색 원피스</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.postcost}>10,500원</Text>
          <Text style={styles.postcost}>46,000원</Text>
          <Text style={styles.postcost}>50,500원</Text>
        </View>
        <View style={styles.container}>
          <Image style={styles.mypost} source={require('./img/posttwo.png')} />
          <Text style={styles.hpost}>내 게시물</Text>
          <Image style={styles.nexttwo} source={require('./img/next.png')} />
        </View>
        <View style={styles.container}>
          <Image
            style={styles.picture}
            source={require('./img/Mypage/neck.png')}
          />
          <Image
            style={styles.picture}
            source={require('./img/Mypage/outer.png')}
          />
          <Image
            style={styles.picture}
            source={require('./img/Mypage/picture5.png')}
          />
        </View>
        <View style={styles.container}>
          <Text style={styles.posttitle}>소라색 티셔츠</Text>
          <Text style={styles.posttitle}>노카라 퍼 후리스 집업</Text>
          <Text style={styles.posttitle}>연두색 투피스</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.postcost}>13,500원</Text>
          <Text style={styles.postcost}>37,260원</Text>
          <Text style={styles.postcost}>54,500원</Text>
        </View>
        <View style={styles.pic}>
          <Image style={styles.please} source={require('./img/please.png')} />
        </View>
      </View>
    </ScrollView>
  );
};

export default Mypage;
