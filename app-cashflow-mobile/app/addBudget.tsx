import {
  View,
  Text,
  TextInput,
  SectionListComponent,
  StyleSheet,
  Switch,
} from "react-native";
import React, { useState } from "react";
import { ThemedView } from "@/components/ThemedView";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import GeneralButton from "@/components/GeneralButton";
import SelectDropdown from "react-native-select-dropdown";

export default function AddBudget() {
  const emojisWithIcons = [
    { title: "Semana" },
    { title: "Mes" },
    { title: "Anual" },
  ];
  const [firstTime, setFirstTime] = useState<boolean>(true);
  const handleGoBack = () => {
    if (router.canGoBack()) {
      router.back();
    }
  };
  const budgets = [
    "Presupuesto 1",
    "Presupuesto 2",
    "Presupuesto 3",
    "Presupuesto 4",
  ];
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
            Nuevo Presupuesto
          </Text>
        </View>
      </ThemedView>
      <View className="mt-[16px] gap-y-3">
        <View>
          <Text className="text-neutralWhite text-headlg mb-3">
            Nombre del presupuesto
          </Text>
          <TextInput
            placeholder="Ropa"
            className="p-[16px] rounded-[24px] text-headlg bg-neutralWhite text-black"
          />
        </View>
        <View>
          <Text className="text-neutralWhite text-headlg mb-3">
            Dinero del presupuesto
          </Text>
          <TextInput
            placeholder="Ropa"
            className="p-[16px] rounded-[24px] text-headlg bg-neutralWhite text-black"
          />
        </View>
        <View>
          <Text className="text-neutralWhite text-headlg mb-3">Categoria</Text>
          <TextInput
            placeholder="Ropa"
            className="p-[16px] rounded-[24px] text-headlg bg-neutralWhite text-black"
          />
        </View>
        <View>
          <Text className="text-neutralWhite text-headlg mb-3">Periodo</Text>
          <SelectDropdown
            data={emojisWithIcons}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            renderButton={(selectedItem, isOpened) => {
              return (
                <View style={styles.dropdownButtonStyle}>
                  <Text style={styles.dropdownButtonTxtStyle}>
                    {(selectedItem && selectedItem.title) || "Select your mood"}
                  </Text>
                </View>
              );
            }}
            renderItem={(item, index, isSelected) => {
              return (
                <View
                  style={{
                    ...styles.dropdownItemStyle,
                    ...(isSelected && { backgroundColor: "#D2D9DF" }),
                  }}
                >
                  <Text style={styles.dropdownItemTxtStyle}>{item.title}</Text>
                </View>
              );
            }}
            showsVerticalScrollIndicator={false}
            dropdownStyle={styles.dropdownMenuStyle}
          />
        </View>
      </View>
      <Text className="text-neutralWhite text-headlg mt-10 mb-5">Notificaciones</Text>
      <View className="flex flex-row items-center justify-between">
        <Text className="text-neutralLighterGray " style={{ maxWidth: "70%" }}>
          Notificar cuando supere el monto presupuestados
        </Text>
        <Switch />
      </View>
      <View className="flex flex-row items-center justify-between mb-5">
        <Text className="text-neutralLighterGray " style={{ maxWidth: "70%" }}>
          Notificar cuando se corra el riesgo de superar el presupuesto
        </Text>
        <Switch />
      </View>
      <GeneralButton row={false}>
        <Text className="text-center text-neutralWhite text-headxl font-headsemibold" style={{marginHorizontal: "auto"}}>GUARDAR</Text>
      </GeneralButton>
    </View>
  );
}
const styles = StyleSheet.create({
  dropdownButtonStyle: {
    width: "100%",
    backgroundColor: "white",
    borderRadius: 24,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  dropdownButtonTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: "500",
    color: "#151E26",
  },
  dropdownButtonArrowStyle: {
    fontSize: 28,
  },
  dropdownButtonIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
  dropdownMenuStyle: {
    backgroundColor: "#E9ECEF",
    borderRadius: 8,
  },
  dropdownItemStyle: {
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 12,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
  },
  dropdownItemTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: "500",
    color: "#151E26",
  },
  dropdownItemIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
});
