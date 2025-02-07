import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { View, Text} from "react-native"
import { useFonts } from 'expo-font';
import { Stack } from "expo-router";
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import "react-native-reanimated";

import GlobalProvider from "../context/GlobalProvider";

// Prevent the splash screen from auto-hiding before asset loading is complete.
// SplashScreen.preventAutoHideAsync();

export default function TabsLayout() {

  return (
    <GlobalProvider>
      <Stack>
        <Stack.Screen 
          name="index" 
          options={{ headerShown: false }} 
        />
  
        <Stack.Screen 
          name="(game)" 
          options={{ headerShown: false }} 
        />
  
        <Stack.Screen 
          name="(tabs)" 
          options={{ headerShown: false }} 
        />
      </Stack>
    </GlobalProvider>
  );
}
