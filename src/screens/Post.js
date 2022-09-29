import React from 'react';
import {Image, StyleSheet, Text} from 'react-native';

const styles = StyleSheet.create({
  check: {
    width: 380,
    height: 820,
  }
});

const Post = () => {
  return (
    <Image style={styles.check} source = {require('../img/title.png')}></Image>
  );
}

export default Post;
