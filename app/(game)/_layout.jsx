import { Stack } from "expo-router";
import { StatusBar } from "react-native";

export default function GameLayout() {
  return(
    <>
      <Stack>
        <Stack.Screen 
          name="game" 
          options={{ headerShown: false }} 
        />

        <Stack.Screen 
          name="gameover" 
          options={{ headerShown: false }} 
        />
      </Stack>

      <StatusBar barStyle="light-content" />
    </>
  );
};
