import React, {useContext, useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Mypage, ChannelList, Home, Post} from '../screens';
import {MaterialIcons} from '@expo/vector-icons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ThemeContext} from 'styled-components/native';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {FontAwesome} from '@expo/vector-icons';
import {NavigationContainer} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const MainTab = ({navigation, route}) => {
  useEffect(() => {
    const title = getFocusedRouteNameFromRoute(route) ?? 'Channels';
    navigation.setOptions({
      headerTitle: title,
      headerRight: () =>
        title === 'Channels' && (
          <MaterialIcons
            name="add"
            size={26}
            style={{margin: 10}}
            onPress={() => navigation.navigate('Channel Creation')}
          />
        ),
    });
  }, [navigation, route]);

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === '홈') {
            iconName = focused ? 'home' : 'ios-home-outline';
          } else if (route.name === '채팅') {
            iconName = focused ? 'chatbubble' : 'chatbubble-outline';
          } else if (route.name === '글 작성') {
            iconName = focused ? 'add-circle' : 'add-circle-outline';
          } else if (route.name === '내 소개') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color="black" />;
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'black',
      })}>
      <Tab.Screen name="홈" component={Home} />
      <Tab.Screen name="채팅" component={ChannelList} />
      <Tab.Screen name="글 작성" component={Post} />
      <Tab.Screen name="내 소개" component={Mypage} />
    </Tab.Navigator>
  );
};

export default MainTab;
