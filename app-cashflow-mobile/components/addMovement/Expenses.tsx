import { Feather, MaterialIcons } from "@expo/vector-icons";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
} from "@gorhom/bottom-sheet";
import dayjs from "dayjs";
import { LinearGradient } from "expo-linear-gradient";
import React, { useCallback, useEffect, useMemo, useRef } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
export default function Expenses() {
    const snapPoints = useMemo(() => ["50%"], []);
    useEffect(() => {});
    const bottomSheetRef = useRef<BottomSheetModal>(null);
  
    const renderBackdrop = useCallback(
      (props: any) => (
        <BottomSheetBackdrop
          appearsOnIndex={0}
          disappearsOnIndex={-1}
          {...props}
        />
      ),
      []
    );
  
    const handlePresentModalPress = () => bottomSheetRef.current?.present();
  
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
        name: "Inversiones",
      },
      {
        id: 5,
        name: "Inversiones",
      },
      {
        id: 6,
        name: "Inversiones",
      },
  
      {
        id: 7,
        name: "Otros",
      },
    ];
  return (
    <View>
    <Text className="text-headxl text-neutralWhite">Ingrese monto</Text>
    <Text className="text-plg text-neutralLightGray">
      Dinero a gastar
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
      Origen del gasto
    </Text>
    <View className="flex w-full flex-row  justify-evenly ">
      {categories.slice(0, 3).map((category, index) => (
        <View key={category.id} className="flex-col items-center">
          <TouchableOpacity
            style={{
              paddingVertical: 10,
              paddingHorizontal: 25,
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
      <View className="w-[80px]  flex-col items-center">
        <TouchableOpacity
          onPress={handlePresentModalPress}
          style={{
            paddingVertical: 10,
            paddingHorizontal: 25,
            marginVertical: 15,
            borderRadius: 40,
            backgroundColor: "#abfebd",
          }}
        >
          <Feather name="plus-circle" size={24} color="#ff00b8" />
        </TouchableOpacity>
        <Text className="text-headmd text-neutralWhite ml-2">More</Text>
      </View>
    </View>
    <Text className="text-headxl mt-[40px] font-psemibold text-neutralWhite">
      ¿Cuando se gastó el dinero?
    </Text>
    <View className="flex flex-row  mt-[28px] mb-[28px] items-center justify-between">
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

    <TouchableOpacity style={{marginBottom: 15}}>
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
    <TouchableOpacity /* onPress={handleCloseBottomSheet} */>
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

    <View className="bg-primaryPink">
      <BottomSheetModal
        enablePanDownToClose={true}
        ref={bottomSheetRef}
        index={0}
        backdropComponent={renderBackdrop}
        backgroundStyle={{ backgroundColor: "#480C36" }}
        handleIndicatorStyle={{ backgroundColor: "#79747E" }}
        snapPoints={snapPoints}
      >
        <LinearGradient
          colors={["#480C36", "#0E4117"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={{ flex: 1 }}
        >
          <View className=" flex flex-row flex-wrap  gap-5">
            {categories.map((category, index) => (
              <View
                key={category.id}
                className="w-[80px]  flex-col items-center"
              >
                <TouchableOpacity
                  onPress={() => bottomSheetRef.current?.close()}
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
        </LinearGradient>
      </BottomSheetModal>
    </View>
  </View>
  )
}
