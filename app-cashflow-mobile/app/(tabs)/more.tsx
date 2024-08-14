import { View, Text } from "react-native";
import React from "react";
import { ThemedView } from "@/components/ThemedView";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import GeneralButton from "@/components/GeneralButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useUserContext } from "../context/UserDataContext";

const More = () => {
  const {setUser} = useUserContext();
  const handleSignOut = async() =>{
    
    await AsyncStorage.removeItem("auth");
    setUser(null);
    router.push("auth");
  }
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 40,
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#090215",
      }}
    >
      <View style={{ gap: 10 }}>
        <ThemedView className="flex flex-row justify-between">
          <View className="  flex flex-row gap-[16px]">
            <TouchableOpacity
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
              Más
            </Text>
          </View>
        </ThemedView>
        <TouchableOpacity disabled onPress={() => router.push("miprofile")}>
          <LinearGradient
            style={{
              paddingHorizontal: 23,
              borderRadius: 40,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              height: 74,
            }}
            colors={["#0E4117", "#480C36"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
          >
            <Text className="text-pxl  text-neutralLighterGray font-headsemibold">
              MI PERFIL
            </Text>
            <View
              className="justify-center"
              style={{
                width: "auto",
                height: 70,
              }}
            >
              <MaterialIcons
                name="keyboard-arrow-left"
                color="gray"
                size={44}
                className="text-[24px] rotate-180"
              />
            </View>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity disabled>
          <LinearGradient
            style={{
              paddingHorizontal: 23,
              borderRadius: 40,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              height: 74,
            }}
            colors={["#0E4117", "#480C36"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
          >
            <Text className="text-pxl uppercase text-neutralLighterGray font-headsemibold">
              ajustes de notificación
            </Text>
            <View
              className="justify-center"
              style={{
                width: "auto",
                height: 70,
              }}
            >
              <MaterialIcons
                name="keyboard-arrow-left"
                color="gray"
                size={44}
                className="text-[24px] rotate-180"
              />
            </View>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity disabled>
          <LinearGradient
            style={{
              paddingHorizontal: 23,
              borderRadius: 40,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              height: 74,
            }}
            colors={["#0E4117", "#480C36"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
          >
            <Text className="text-pxl uppercase text-neutralLighterGray font-headsemibold">
              términos y políticas
            </Text>
            <View
              className="justify-center"
              style={{
                width: "auto",
                height: 70,
              }}
            >
              <MaterialIcons
                name="keyboard-arrow-left"
                color="gray"
                size={44}
                className="text-[24px] rotate-180"
              />
            </View>
          </LinearGradient>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
          onPress={handleSignOut}
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          borderBottomColor: "#7AED70",
          borderBottomWidth: 1,
          width: 132,
          marginHorizontal: "auto",
        }}
      >
        <Text
          className="text-plg align-middle text-[#7AED70] uppercase  font-headsemibold"
        >
          Cerrar Sesion
        </Text>
        <View
          className="justify-center"
          style={{
            width: "auto",
            height: 70,
          }}
        >
          <Feather
            name="log-out"
            color="#7AED70"
            size={34}
            className="text-[14px]"
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default More;
