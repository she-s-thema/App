import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import HomeScreen from "./src/HomeScreen";
import ChatScreen from "./src/ChatScreen";
import SettingScreen from "./src/SettingScreen";
import PlusScreen from "./src/PlusScreen";
import HeartScreen from "./src/HeartScreen";

const TabNavigator = createBottomTabNavigator ({
    Home : {
        tabBarIcon : ([color, size]) => {
        },
        screen : HomeScreen,
    },
    Chat : {
        screen : ChatScreen,
    },
    Plus : {
        screen : PlusScreen,
    },
    Setting : {
        screen : SettingScreen,
    },
    Heart : {
        screen : HeartScreen,

    },
});

export default createAppContainer(TabNavigator);