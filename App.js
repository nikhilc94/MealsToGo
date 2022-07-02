import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { ThemeProvider } from 'styled-components';
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';

import { RestaurantsScreen } from './src/features/restaurants/screens/restaurant.screen';
import { theme } from './src/infrastructure/theme';

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

  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsScreen />
      </ThemeProvider>
      <ExpoStatusBar style='auto' />
    </>
  );
}

const styles = StyleSheet.create({});
