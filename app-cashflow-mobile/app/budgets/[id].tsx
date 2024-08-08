import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import { ThemedView } from "@/components/ThemedView";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialIcons, Octicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import Summary from "@/components/Budget/Summary";
import Movements from "@/components/Budget/Movements";
import { getBudget } from "../api/moneyAPI";
import Loading from "@/components/Loading";

export default function BudgetComponent() {
  const [option, setOption] = useState<Boolean>(false);
 
  const [budget, setBudget] = useState<any>(null);
  const { id } = useLocalSearchParams<{ id: string }>();
  const getInfoBudget = async () => {
    const response = await getBudget(+id!);
    console.log("BUDGET OBETNIDOOOO POR ID: ", response);
    
    setBudget(response);
  };
  useEffect(()=>{
    getInfoBudget()
  },[])
  const handleGoBack = () => {
    if (router.canGoBack()) {
      router.back();
    }
  };
  return budget == null ? <Loading />: (
    <ScrollView
      style={{
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 40,
        backgroundColor: "#0A0219",
      }}
    >
      <ThemedView className="flex flex-row mb-3 justify-between">
        <View className="  flex flex-row gap-[16px]">
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
            {budget.name}
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
            <Text
                        style={{color: option === false ? "#7AED70" : "#838383"}}

            className=" py-[14px]   border-neutralWhite font-headsemibold text-headlg text-neutralWhite">
              Resumen
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setOption(true)}>
            <Text 
            style={{color: option === true ? "#7AED70" : "#838383"}}
            className=" font-headsemibold text-headlg text-neutralWhite">
              Movimientos
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
      {!option ? (
        <Summary budget={budget}   />
      ) : (
        <Movements budget={budget} />
      )}
    </ScrollView>
  );
}
