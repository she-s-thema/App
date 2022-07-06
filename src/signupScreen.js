import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    TextInput,
    text,
    onChangeText,
    number,
    onChangeNumber,
    CheckBox,
    Image
} from 'react-native';

class signupScreen extends React.Component {
    render() {
        return (
            <SafeAreaView>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder="닉네임을 입력해주세요."
                />
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder="아이디를 입력해주세요."
                />
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder="비밀번호를 입력해주세요."
                />
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderColor: '9BA3EB',
        padding: 20,
    },
});

export default signupScreen;
