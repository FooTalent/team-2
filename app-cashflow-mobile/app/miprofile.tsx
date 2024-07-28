import { View, Text } from "react-native";
import React from "react";
import { ThemedView } from "@/components/ThemedView";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign, Feather, MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "react-native";
import { router } from "expo-router";

function ButtonMyProfile({head, pa}:any) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "#abfebd",
        paddingVertical: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <View className="bg-[#7AED70] rounded-full">
        <AntDesign
          name="user"
          size={34}
          className="text-[24px] p-[8px]"
          color="#490B37"
        />
      </View>
      <View className="align-top">
        <Text className="text-headlg  text-[#490B37] font-headsemibold">
          {head}
        </Text>
        <Text className="text-plg max-w-[223px] text-black font-plight">
          {pa}
        </Text>
      </View>
      <View
        className="justify-center"
        style={{
          width: "auto",
          height: 70,
        }}
      >
        <MaterialIcons
          name="keyboard-arrow-left"
          color="#490B37"
          size={44}
          className="text-[24px] rotate-180"
        />
      </View>
    </TouchableOpacity>
  );
}

export default function Miprofile() {
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
        gap: 18,
      }}
    >
      <ThemedView className="flex flex-row justify-between">
        <View className="  flex flex-row gap-[16px]">
          <TouchableOpacity
            style={{ backgroundColor: "#ABFEBD", borderRadius: 100 }}
            onPress={handleGoBack}
          >
            
            <MaterialIcons
              name="keyboard-arrow-left"
              color="#3B1575"
              size={44}
              className="text-[24px]"
            />
          </TouchableOpacity>
          <Text className="text-neutralWhite font-headbold text-headxxl align-middle">
            Mi Perfil
          </Text>
        </View>
      </ThemedView>
      <TouchableOpacity>
        <LinearGradient
          style={{
            paddingHorizontal: 23,
            borderRadius: 40,
            flexDirection: "row",
            gap: 16,
            alignItems: "center",
            height: 92,
          }}
          colors={["#0E4117", "#480C36"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
        >
          <Image
            style={{ width: 69, height: 69, borderRadius: 100 }}
            source={{
              uri: "https://reactnative.dev/img/tiny_logo.png",
            }}
          />
          <View className="align-top">
            <Text className="text-plg  text-neutralWhite font-headsemibold">
              CLARA LOPEZ
            </Text>
            <Text className="text-plg   text-neutralWhite font-plight">
              claralopez@gmail.com
            </Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
      <ButtonMyProfile head={"Información personal"} pa={"Información de tus datos personales"} />
      <ButtonMyProfile head={"Seguridad"} pa={"Configuración de seguridad de tu cuenta"}/>
      <ButtonMyProfile head={"Privacidad"} pa={"Preferencias y control sobre el uso de tus datos"}/>
      <Text>miprofile</Text>
    </View>
  );
}
