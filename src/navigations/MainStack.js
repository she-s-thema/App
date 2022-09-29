import React, {useContext} from 'react';
import {ThemeContext} from 'styled-components/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Channel, ChannelCreation, Mypage, ChannelList} from '../screens';
import MainTab from './MainTab';

const Stack = createStackNavigator();

const MainStack = () => {
  const theme = useContext(ThemeContext);

  return (
    <Stack.Navigator screenOptions={{headerShown: true}}>
      <Stack.Screen
        name="Main"
        component={MainTab}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Channel Creation"
        component={ChannelCreation}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="Channel"
        component={Channel}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="Mypage"
        component={Mypage}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
