import React from 'react';
import { Text } from 'react-native';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';

import { RestaurantsScreen } from '../../features/restaurants/screens/restaurant.screen';
import { RestaurantDetailScreen } from '../../features/restaurants/screens/restaurant-detail.screen';

const RestaurantsStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantsStack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.ModalPresentationIOS,
      }}
    >
      <RestaurantsStack.Screen
        name='RestaurantsHome'
        component={RestaurantsScreen}
      />
      <RestaurantsStack.Screen
        name='RestaurantDetail'
        component={RestaurantDetailScreen}
      />
    </RestaurantsStack.Navigator>
  );
};
