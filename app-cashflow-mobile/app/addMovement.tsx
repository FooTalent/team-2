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

export default function AddMoney() {
  const [option, setOption] = useState<Boolean>(false);
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ["25%", "50%", "70%"], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);
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
    <View style={{ flex: 1 }}>
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
          <View className="flex w-full flex-row ">
            {categories.map((category, index) => (
              <View
                key={category.id}
                className="w-[80px]  flex-col items-center"
              >
                <TouchableOpacity
                  style={{
                    paddingVertical: 4,
                    paddingHorizontal: 20,
                    marginVertical: 15,
                    borderRadius: 40,
                    backgroundColor: "#abfebd",
                  }}
                >
                  <Feather name="plus-circle" size={24} color="#ff00b8" />
                </TouchableOpacity>
                <Text className="text-headmd text-neutralWhite ml-2">
                  {category.name}
                </Text>
              </View>
            ))}
          </View>
          <Text className="text-headxl font-psemibold text-neutralWhite">
            ¿Cuando se ingreso el dinero?
          </Text>
          <View className="flex flex-row  items-center justify-between">
            <TouchableOpacity>
              <MaterialIcons
                name="arrow-forward"
                size={24}
                color="white"
                className="rotate-180"
              />
            </TouchableOpacity>
            <Text className="text-headxl font-psemibold text-neutralWhite">
              {dayjs().format("d [de] MMMM, DDDD")}
            </Text>
            <TouchableOpacity>
              <MaterialIcons name="arrow-forward" size={24} color="white" />
            </TouchableOpacity>
          </View>

          <TouchableOpacity>
            <LinearGradient
              className="opacity-50 "
              colors={["#FF00B8", "#04FD3B"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              style={{ borderRadius: 40 }}
            >
              <Text className="text-headxl text-neutralWhite text-center font-headsemibold py-[8px]  ">
                IR AL CALENDARIO
              </Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity>
            <LinearGradient
              className="opacity-50 "
              colors={["#FF00B8", "#04FD3B"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              style={{ borderRadius: 40 }}
            >
              <Text className="text-headxl text-neutralWhite text-center font-headsemibold py-[8px]  ">
                GUARDAR
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <Text className="text-headxl text-neutralWhite">Gastos</Text>
        </View>
      )}
      <View style={styles.container}>
        <BottomSheet
          snapPoints={snapPoints}
          ref={bottomSheetRef}
          onChange={handleSheetChanges}
        >
          <BottomSheetView style={styles.contentContainer}>
            <Text>Awesome 🎉</Text>
          </BottomSheetView>
        </BottomSheet>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "grey",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
});
