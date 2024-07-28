import { StyleSheet, Image, Platform, Text, View } from "react-native";

import { ThemedView } from "@/components/ThemedView";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
export default function TabTwoScreen() {
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
            Presupuesto
          </Text>
        </View>
      </ThemedView>
      <Image
        style={{
          width: 254.82,
          height: 254.82,
          marginTop: 85,
          marginHorizontal: 44,
          marginBottom: 20,
          margin: 10,
        }}
        source={require("../../assets/images/Group15.png")}
      />
      <Text className="font-psemibold text-headmd  text-neutralLightGray text-center">
        Aún no añadiste ningún presupuesto
      </Text>
      <TouchableOpacity
      onPress={()=>router.push("addBudget")}
      style={{ marginHorizontal: "auto", marginTop: 40 }}>
        <LinearGradient
          style={{
            borderRadius: 15,
          }}
          colors={["#0E4117", "#480C36"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
        >
          <Feather
            className="text-center text-[42px]  font-headlight"
            style={{ padding: 9 }}
            size={44}
            name="plus"
            color="white"
          />
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}
