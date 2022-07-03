import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Image} from 'react-native';
import HomeScreen from "./HomeScreen";
import ChatScreen from "./ChatScreen";
import SettingScreen from "./SettingScreen";
import PlusScreen from "./PlusScreen";
import HeartScreen from "./HeartScreen";

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
