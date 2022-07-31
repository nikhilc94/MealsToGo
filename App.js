import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { Text, StyleSheet } from 'react-native';
import { ThemeProvider } from 'styled-components';
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { RestaurantsScreen } from './src/features/restaurants/screens/restaurant.screen';
import { theme } from './src/infrastructure/theme';
import { SafeArea } from './src/components/utility/safe-area.component';
import { RestaurantsContextProvider } from './src/services/restaurants/restaurants.context';
import { LocationContextProvider } from './src/services/location/location.context';

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: 'md-restaurant',
  Map: 'md-map',
  Settings: 'md-settings',
};

const Map = () => (
  <SafeArea>
    <Text>Map</Text>
  </SafeArea>
);
const Settings = () => (
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>
);

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  const MyTabs = () => {
    return (
      <Tab.Navigator
        screenOptions={
          (({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              const iconName = TAB_ICON[route.name];
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          }),
          {
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
            tabBarStyle: [
              {
                display: 'flex',
              },
              null,
            ],
          })
        }
      >
        <Tab.Screen name='Restaurants' component={RestaurantsScreen} />
        <Tab.Screen name='Map' component={Map} />
        <Tab.Screen name='Settings' component={Settings} />
      </Tab.Navigator>
    );
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <NavigationContainer>
              <MyTabs />
            </NavigationContainer>
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style='auto' />
    </>
  );
}

const styles = StyleSheet.create({});
