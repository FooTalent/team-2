import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import { ThemedView } from "@/components/ThemedView";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialIcons, Octicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import Earnings from "@/components/addMovement/Earnings";
import Expenses from "@/components/addMovement/Expenses";
import { BarChart, LineChart } from "react-native-gifted-charts";
import dayjs from "dayjs";
import { Stop } from "react-native-svg";
import { LinearGradient as LinearGradien } from "react-native-svg";
import Summary from "@/components/Budget/Summary";
import Movements from "@/components/Budget/Movements";


export default function BudgetComponent() {
  const [option, setOption] = useState<Boolean>(false);
  const data1 = [
    { value: 60, date: "1 Apr 2022" },
    { value: 10, date: "2 Apr 2022" },
    { value: 20, date: "6 Apr 2022" },
    { value: 50, date: "7 Apr 2022" },
    { value: 90, date: "8 Apr 2022" },
  ];
  const [porcentaje, setPorcentaje] = useState(70);

  const { id } = useLocalSearchParams<{ id: string }>();
  const handleGoBack = () => {
    if (router.canGoBack()) {
      router.back();
    }
  };
  return (
    <ScrollView
      style={{
        flex: 1,
        marginHorizontal: 16,
        paddingVertical: 40,
      }}
    >
      <ThemedView className="flex flex-row justify-between">
        <View className="  flex flex-row gap-[16px]">
          <TouchableOpacity
            onPress={handleGoBack}
            style={{ backgroundColor: "#ABFEBD", borderRadius: 100 }}
          >
            <MaterialIcons
              name="keyboard-arrow-left"
              color="#3B1575"
              size={44}
              className="text-[24px]"
            />
          </TouchableOpacity>
          <Text className="text-neutralWhite font-headbold text-headxxl align-middle">
            presupuesto {id}
          </Text>
        </View>
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
              Resumen
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setOption(true)}>
            <Text className=" font-headsemibold text-headlg text-neutralWhite">
              Movimientos
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
      {!option ? (
        <Summary data1={data1} porcentaje={porcentaje} />
      ) : (
        <Movements />
      )}
    </ScrollView>
  );
}
