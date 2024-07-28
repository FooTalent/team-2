import { View, Text } from "react-native";
import React, { useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import { ThemedView } from "@/components/ThemedView";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialIcons, Octicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import Earnings from "@/components/addMovement/Earnings";
import Expenses from "@/components/addMovement/Expenses";

export default function BudgetComponent() {
  const [option, setOption] = useState<Boolean>(false);

  const { id } = useLocalSearchParams<{ id: string }>();
  const handleGoBack = () => {
    if (router.canGoBack()) {
      router.back();
    }
  };
  return (
    <View
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
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 40,
        }}
        className="opacity-50"
        colors={["#FF00B8", "#04FD3B"]}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 0 }}
      >
        <TouchableOpacity onPress={() => setOption(false)}>
          <Text className=" py-[14px]   border-neutralWhite font-headsemibold text-headxxl text-neutralWhite">
            Ingresos
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setOption(true)}>
          <Text className=" font-headsemibold text-headxxl text-neutralWhite">
            Gastos
          </Text>
        </TouchableOpacity>
      </LinearGradient>
      {!option ? (
        <View style={{ rowGap: 5 }}>
          <Text className="font-plight text-plg text-neutralWhite">
            22-30 de Julio
          </Text>
          <Text className="font-psemibold text-plg text-neutralWhite">
            Gastado: ARS 100000
          </Text>
          <Text className="font-psemibold text-plg text-neutralWhite">
            Disponible: ARS 100000
          </Text>
          <LinearGradient
            style={{
              borderRadius: 40,
              paddingHorizontal: 40,
              height: 167,
            }}
            colors={["#490B37", "#AF1A84"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
          >
            <Text className="font-psemibold text-plg text-neutralWhite">
              Total
            </Text>
            <View className="flex flex-row">
              <Text className="font-headbold text-headxxl text-neutralWhite">
                ARS $200000
              </Text>
              <TouchableOpacity
                style={{ backgroundColor: "#7AED70", borderRadius: 100 }}
              >
                <Octicons
                  name="pencil"
                  size={24}
                  color="black"
                  className="p-[8px]"
                />
              </TouchableOpacity>
            </View>
            <View
              style={{ width: 50, borderRadius: 9 }}
              className="bg-neutralWhite "
            >
              <Text className="p-[8px]">-50%</Text>
            </View>
          </LinearGradient>
        </View>
      ) : (
        <Expenses />
      )}
    </View>
  );
}
