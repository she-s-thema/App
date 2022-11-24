import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';

const WritePrice = ({title, body, onChangeTitle, onChangeBody, navigation}) => {
  return (
    <View style={styles.block}>
      <Text style={styles.TitleInput}>대여비를 설정해주세요</Text>
      <TextInput
        placeholder="대여비가 얼마인가요?"
        style={styles.BodyInput}
        multiline
        textAlignVertical="top"
        onChangeText={onChangeBody}
        value={body}
      />
      <TouchableOpacity
        title="다음"
        style={styles.next}
        onPress={() => navigation.push('WritePrice')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'left',
  },
  TitleInput: {
    fontSize: 20,
  },

  BodyInput: {
    paddingVertical: 0,
    fontSize: 23,
    marginTop: 15,
    color: '#263238',
    fontWeight: 'bold',
  },
  next: {
    width: 200,
    height: 50,
    color: '#8b00ff',
    fontSize: 20,
  },
});

export default WritePrice;
