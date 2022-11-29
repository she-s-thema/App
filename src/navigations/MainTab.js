import React, { useContext, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Write, Home, Mypage, ChannelList } from '../screens';
import { MaterialIcons } from '@expo/vector-icons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ThemeContext } from 'styled-components/native';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const TabBarIcon = ({ focused, name }) => {
  const theme = useContext(ThemeContext);
  return (
    <Ionicons
      name={name}
      size={26}
      color= "black"
    />
  );
};

const MainTab = ({ navigation, route }) => {
  const theme = useContext(ThemeContext);

  useEffect(() => {
    const title = getFocusedRouteNameFromRoute(route) ?? 'Channels';
    navigation.setOptions({
      headerTitle: title,
      headerRight: () =>
        title === '채팅' && (
          <MaterialIcons
            name="add"
            size={26}
            style={{ margin: 10 }}
            onPress={() => navigation.navigate('Channel Creation')}
          />
        ),
    });
  }, [route]);

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'black',
        inactiveTintColor: 'black',
      }}
    >
      <Tab.Screen
        name="홈"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) =>
            TabBarIcon({
              focused,
              name: focused ? 'home' : 'home-outline',
            }),
        }}
      />
      <Tab.Screen
        name="채팅"
        component={ChannelList}
        options={{
          tabBarIcon: ({ focused }) =>
            TabBarIcon({
              focused,
              name: focused ? 'chatbox' : 'chatbox-outline',
            }),
        }}
      />
      <Tab.Screen
        name="글작성"
        component={Write}
        options={{
          tabBarIcon: ({ focused }) =>
            TabBarIcon({
              focused,
              name: focused ? 'add-circle' : 'add-circle-outline',
            }),
        }}
      />
      <Tab.Screen
        name="마이페이지"
        component={Mypage}
        options={{
          tabBarIcon: ({ focused }) =>
            TabBarIcon({
              focused,
              name: focused ? 'person' : 'person-outline',
            }),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTab;
