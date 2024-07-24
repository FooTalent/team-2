import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { useColorScheme } from "react-native";
import "../global.css";
import AddMoney from "./addMovement";
import { GestureHandlerRootView } from "react-native-gesture-handler";
export default function RootLayout() {
  const colorScheme = useColorScheme();
  return (
    <GestureHandlerRootView>
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="addMovement"  options={{ headerShown: false }}  />
          {/* <Stack.Screen name="+not-found" /> */}
        </Stack>
    </ThemeProvider>
    </GestureHandlerRootView>
  );
}
