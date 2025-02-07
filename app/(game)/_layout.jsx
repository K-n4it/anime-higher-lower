import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

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

      <StatusBar 
        style="dark"
      />
    </>
  );
};
