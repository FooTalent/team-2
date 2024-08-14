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
    <View
      style={{
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 40,
        gap: 10,
        backgroundColor: "#0A0219",
      }}
    >
      <ThemedView className="flex gap-3 flex-row">
        <TouchableOpacity
          onPress={handleGoBack}
          style={{ backgroundColor: "#290B57", borderRadius: 100 }}
        >
          <MaterialIcons
            name="keyboard-arrow-left"
            color="#7d32ec"
            size={44}
            className="text-[24px]"
          />
        </TouchableOpacity>
        <Text className="text-neutralWhite font-headbold text-headxxl align-middle">
          Agregar Movimiento
        </Text>
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
            <Text
              style={{ color: option === false ? "#7AED70" : "#838383" }}
              className={` py-[14px] border-neutralWhite font-headsemibold text-headlg`}
            >
              Ingresos
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setOption(true)}>
            <Text
              style={{ color: option === true ? "#7AED70" : "#838383" }}
              className={` font-headsemibold text-headlg`}
            >
              Gastos
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
      {option == false ? <Earnings /> : <Expenses />}
    </View>
  );
}
