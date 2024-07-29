import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { router, Stack } from "expo-router";
import { useColorScheme, ActivityIndicator, Button } from "react-native";
import "../global.css";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [initialRoute, setInitialRoute] = useState<string | null>(null);

  const resetOnboarding = async () => {
    await AsyncStorage.removeItem('onboardingComplete');
    setInitialRoute('onboarding');
    router.replace('onboarding')
  };

  useEffect(() => {
    const checkOnboarding = async () => {
      const onboardingComplete = await AsyncStorage.getItem('onboardingComplete');
      if (onboardingComplete) {
        setInitialRoute("(tabs)");
      } else {
        setInitialRoute("onboarding");
      }
    };
    checkOnboarding();
  }, []);

  if (!initialRoute) {
    return <ActivityIndicator size="large" color="#fff" />;
  }

  return (
    <GestureHandlerRootView>
      <BottomSheetModalProvider>
        <ThemeProvider
          value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
        >
          <Stack initialRouteName={initialRoute}>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="addMovement" options={{ headerShown: false }} />
            <Stack.Screen name="onboarding" options={{ headerShown: false }} />
            <Stack.Screen name="miprofile" options={{ headerShown: false }} />
            <Stack.Screen name="addBudget" options={{ headerShown: false }} />
            <Stack.Screen name="budgets/[id]" options={{ headerShown: false }} />
            <Stack.Screen name="auth" options={{ headerShown: false }} />
          </Stack>
        </ThemeProvider>
        {/* USAR SOLO SI SE QUIERE VER LA VISTA ONBOARDING NUEVAMENTE */}
        {/* <Button title="Reset Onboarding" onPress={resetOnboarding} /> */}
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}
