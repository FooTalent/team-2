import {
  View,
  Text,
  useColorScheme,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedView } from "@/components/ThemedView";
import { HelloWave } from "@/components/HelloWave";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import { Link, router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

export default function AddMoney() {
  const [option, setOption] = useState<Boolean>(false);
  const colorScheme = useColorScheme();
  const categories = [
    {
      id: 1,
      name: "Salario",
    },
    {
      id: 2,
      name: "Ventas",
    },
    {
      id: 3,
      name: "Inversiones",
    },
    {
      id: 4,
      name: "Otros",
    },
  ];
  const handleGoBack = () => {
    if (router.canGoBack()) {
      router.back();
    }
  };
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={{
            height: 178,
            width: 290,
            bottom: 0,
            left: 0,
            position: "absolute",
          }}
        />
      }
    >
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
        <View>
          <Text className="text-headxl text-neutralWhite">Ingrese monto</Text>
          <Text className="text-plg text-neutralLightGray">
            Dinero a ingresar
          </Text>
          <LinearGradient
            colors={["#FF00B8", "#04FD3B"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={{
              borderRadius: 40,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 1,
              marginVertical: 15,
            }}
          >
            <TextInput
              keyboardType="number-pad"
              className="bg-neutralWhite rounded-full py-[8px] text-headxl px-[16px] w-[100%]"
            />
          </LinearGradient>
          <Text className="text-headxl text-neutralWhite">
            Origen del ingreso
          </Text>
          {categories.map((category, index) => (
            <View key={category.id}>
              <TouchableOpacity className="flex flex-row justify-between items-center bg-primaryLightGreen  py-[16px]">
                <Feather
                  name="plus-circle"
                  size={24}
                  color="#3B1575"
                />
              </TouchableOpacity>
              <Text className="text-headxl text-neutralWhite">
                {category.name}
              </Text>
            </View>
          ))}
        </View>
      ) : (
        <View>
          <Text className="text-headxl text-neutralWhite">Gastos</Text>
        </View>
      )}
    </ParallaxScrollView>
  );
}
