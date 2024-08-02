import {
  View,
  Text,
  useColorScheme,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import React, { useCallback, useMemo, useRef, useState } from "react";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedView } from "@/components/ThemedView";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import { Link, router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import dayjs from "dayjs";
import BottomSheet from "@gorhom/bottom-sheet";
import { BottomSheetView } from "@gorhom/bottom-sheet";
import Earnings from "@/components/addMovement/Earnings";
import Expenses from "@/components/addMovement/Expenses";

export default function AddMoney() {
  const [option, setOption] = useState<Boolean>(false);
  
  // callbacks
  
  const handleGoBack = () => {
    if (router.canGoBack()) {
      router.back();
    }
  };
  return (


    <View style={{ flex: 1, marginHorizontal: 16, paddingVertical: 40, gap: 10 }}>
      <ThemedView className="flex flex-row">
        <TouchableOpacity onPress={handleGoBack}>
          <MaterialIcons
            name="keyboard-arrow-left"
            size={44}
            color="#3B1575"
            className="text-[24px]"
          />
        </TouchableOpacity>

        <Image
          style={{ width: 45.28, height: 45.28, borderRadius: 100 }}
          source={{
            uri: "https://reactnative.dev/img/tiny_logo.png",
          }}
        />
      </ThemedView>
      <LinearGradient
        style={{
          borderRadius: 40,
          padding: 2,
        }}
        colors={["#0E4117", "#490B37"]}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 0 }}
      >
        <View
          className="bg-[#090215]"
          style={{
            borderRadius: 40,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 40,
          }}
        >
          <TouchableOpacity onPress={() => setOption(false)}>
            <Text className=" py-[14px]   border-neutralWhite font-headsemibold text-headlg text-neutralWhite">
              Ingresos
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setOption(true)}>
            <Text className=" font-headsemibold text-headlg text-neutralWhite">
              Gastos
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
      {!option ? (
        <Earnings />
      ) : (
        <Expenses />
      )}
      
    </View>

  );
}
