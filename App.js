import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import HomeScreen from "./HomeScreen";
import ChatScreen from "./ChatScreen";
import SettingScreen from "./SettingScreen";

const TabNavigator = createBottomTabNavigator ({
  Home : {
    screen : HomeScreen,
  },
  Chat : {
    screen : ChatScreen,
  },
  Setting : {
    screen : SettingScreen,
  },
});

export default createAppContainer(TabNavigator);
