import React, { useEffect, useState } from "react";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { useColorScheme } from "react-native";
import "../global.css";
import AddMoney from "./addMovement";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [appIsReady, setAppIsReady] = useState<boolean>(false);
  return (
    <GestureHandlerRootView>
      <BottomSheetModalProvider>
        <ThemeProvider
          value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
        >
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="addMovement" options={{ headerShown: false }} />
            <Stack.Screen name="miprofile" options={{ headerShown: false }} />
            <Stack.Screen name="addBudget" options={{ headerShown: false }} />
            <Stack.Screen name="budgets/[id]" options={{ headerShown: false }} />
            {/* <Stack.Screen name="+not-found" /> */}
          </Stack>
        </ThemeProvider>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}
