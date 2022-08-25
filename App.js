import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './src/HomeScreen';
import ChatScreen from './src/ChatScreen';
import SettingScreen from './src/screen/SettingScreen';
import LocationScreen from './src/screen/locationScreen';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {TimeExample} from './src/TimeExample';
import "react-native-gesture-handler";
import PlaceScreen from './src/PlaceScreen';
import TimeScreen from './src/TimeScreen';
const Stack = createStackNavigator();

const TabNavigator = createBottomTabNavigator(
    {
        '홈': {
            screen: HomeScreen,
        },
        '채팅': {
            screen: ChatScreen,
        },
        '글 작성': {
            screen: TimeScreen,
        },
        '내 소개': {
            screen: PlaceScreen,
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
                    iconName = '';
                } else if (routeName === '내 소개') {
                    iconName = 'person-outline';
                }
                return (
                    <div>
                        <Ionicons
                            name={iconName}
                            size={horizontal ? 20 : 25}
                            color={'black'}
                        />

                        <routeName
                            name={routeName}
                            color={'black'}
                        />
                    </div>
                );
            },
        }),
    },
);

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="SettingScreen">
                <Stack.Screen name="LocationScreen" component={LocationScreen} />
                <Stack.Screen name="SettingScreen" component={SettingScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}


export default createAppContainer(TabNavigator);