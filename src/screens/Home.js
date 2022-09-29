import React from "react";
import {
  StyleSheet,
  Picker,
  TextInput,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";

const styles = StyleSheet.create({
  check : {
    width : 390,
    height : 820,
  }
});

const Home = () => {
  return (
    <Image style = {styles.check} source = {require('../img/main.png')}></Image>
  );
};

export default Home;
