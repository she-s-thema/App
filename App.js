import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './src/HomeScreen';
import ChatScreen from './src/ChatScreen';
import SettingScreen from './src/SettingScreen';

const TabNavigator = createBottomTabNavigator(
    {
        '홈': {
            screen: HomeScreen,
        },
        '채팅': {
            screen: ChatScreen,
        },
        '글 작성': {
            screen: ChatScreen,
        },
        '내 소개': {
            screen: SettingScreen,
        },
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            tabBarIcon: ({horizontal, tintColor}) => {
                const {routeName} = navigation.state;
                let iconName;
                if (routeName === '홈') {
                    iconName = 'home-outline';
                } else if (routeName === '채팅') {
                    iconName = 'chatbubble-outline';
                } else if (routeName === '글 작성') {
                    iconName = 'plus-circle';
                } else if (routeName === '내 소개') {
                    iconName = 'person-outline';
                }
                return (
                    <Ionicons
                        name={iconName}
                        size={horizontal ? 20 : 25}
                        color={'balck'}
                    />
                );
            },
        }),
    },
);
export default createAppContainer(TabNavigator);
