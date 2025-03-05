import { useFonts } from 'expo-font';
import { Stack } from "expo-router";
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import "react-native-reanimated";

import GlobalProvider from "../context/GlobalProvider";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function TabsLayout() {

  const [fontsLoaded, error] = useFonts({
    VarelaRound: require("../assets/fonts/VarelaRound-Regular.ttf"),
    Varela: require("../assets/fonts/Varela-Regular.ttf")
  });

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) SplashScreen.hideAsync();
  }, 
  [fontsLoaded, error]);

  if (!fontsLoaded && !error) return null;

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
