import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components/native';
import { createStackNavigator } from '@react-navigation/stack';
import { WriteEditor, Write, Writeheader, WritePrice, Detail, Home, Mypage, Channel, ChannelCreation } from '../screens';
import MainTab from './MainTab';

const Stack = createStackNavigator();

const MainStack = () => {
  const theme = useContext(ThemeContext);

  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerTitleAlign: 'center',
        headerTintColor: theme.headerTintColor,
        cardStyle: { backgroundColor: theme.background },
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen name="Main" component={MainTab} />
      <Stack.Screen name="Channel Creation" component={ChannelCreation} />
      <Stack.Screen name="Channel" component={Channel} />
      <Stack.Screen name="Mypage" component={Mypage} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="Write" component={Write} />
      <Stack.Screen name="Writeheader" component={Writeheader} />
      <Stack.Screen name="WritePrice" component={WritePrice} />
      <Stack.Screen name="WriteEditer" component={WriteEditor} />
    </Stack.Navigator>
  );
}

export default MainStack;
