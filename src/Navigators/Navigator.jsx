/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import {View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../Layouts/HomeScreen';
import FavotiveScreen from '../Layouts/FavotiveScreen';
import CartScreen from '../Layouts/CartScreen';
import HistoryScreen from '../Layouts/HistoryScreen';
import ProfileScreen from '../Layouts/ProfileScreen';
import {colors} from '../assets/themes/themes';
import {
  Home2,
  Heart,
  Bag2,
  Notification,
  UserSquare,
} from 'iconsax-react-native';

const Tab = createBottomTabNavigator();

export default function Navigator() {
  return (
    <View style={{flex: 1}}>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            if (route.name === 'HomeScreen') {
              return <Home2 size="32" color={color} variant="Bold" />;
            } else if (route.name === 'CartScreen') {
              return <Bag2 size="32" color={color} variant="Bold" />;
            } else if (route.name === 'FavotiveScreen') {
              return <Heart size="32" color={color} variant="Bold" />;
            } else if (route.name === 'HistoryScreen') {
              return <Notification size="32" color={color} variant="Bold" />;
            } else if (route.name === 'ProfileScreen') {
              return <UserSquare size="32" color={color} variant="Bold" />;
            }
          },
          tabBarLabel: () => null,
          tabBarStyle: {
            height: 80,
            position: 'absolute',
            backgroundColor: colors.primaryBlackRGBA, // Màu của background Tab.Navigator
            borderTopWidth: 0,
            elevation: 0,
            borderTopColor: 'transparent',
          },
          headerShown: false,
        })}
        tabBarOptions={{
          activeTintColor: colors.primaryOrangeHex, // Màu icon khi được chọn
          inactiveTintColor: colors.primaryLightGreyHex,
        }}>
        <Tab.Screen name="HomeScreen" component={HomeScreen} />
        <Tab.Screen name="CartScreen" component={CartScreen} />
        <Tab.Screen name="FavotiveScreen" component={FavotiveScreen} />
        <Tab.Screen name="HistoryScreen" component={HistoryScreen} />
        <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
      </Tab.Navigator>
    </View>
  );
}
