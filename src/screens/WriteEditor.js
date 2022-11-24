import React, {useRef} from 'react';
import {View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import CameraButton from './CameraButton';
import WritePrice from '../screens/WritePrice';

const WriteEditor = ({title, body, onChangeTitle, onChangeBody, navigation}) =>{
  const bodyRef = useRef();
  return (
    <View style={styles.block}>
      <TextInput
        placeholder="제목을 입력하세요"
        style={styles.titleInput}
        returnKeyType="next"
        onChangeText={onChangeTitle}
        value={title}
        onSubmitEditing={() => {
          bodyRef.current.focus();
        }}
      />
      <TextInput
        placeholder="상품에 대한 자세한 설명을 적어주세요"
        style={styles.bodyInput}
        multiline
        textAlignVertical="top"
        onChangeText={onChangeBody}
        value={body}
        ref={bodyRef}
      />
      <TouchableOpacity
        title="다음"
        style={styles.next}
        onPress={() => navigation.push('WritePrice')}
      />
      <CameraButton />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    padding: 16,
  },
  titleInput: {
    paddingVertical: 0,
    fontSize: 20,
    marginBottom: 16,
    color: '#263238',
    fontWeight: 'bold',
  },
  bodyInput: {
    flex: 1,
    fontSize: 18,
    paddingVertical: 0,
    color: '#263238',
  },
  next: {
    width: 200,
    height: 50,
    color: '#8b00ff',
  },
});

export default WriteEditor;
