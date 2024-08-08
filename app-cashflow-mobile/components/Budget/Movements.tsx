import { View, Text, ScrollView, StyleSheet } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";
import dayjs from "dayjs";
import SelectDropdown from "react-native-select-dropdown";

export default function Movements({ budget }: any) {
  const [expenses, setExpenses] = useState(budget.expenses);
  return (
    <View>
      {/*  <View className="flex border rounded-[99px] border-[#290B57] px-[8px] flex-row  mt-[16px] mb-[28px] items-center justify-between">
        <TouchableOpacity>
          <MaterialIcons
            name="arrow-forward"
            size={24}
            color="white"
            className="rotate-180"
          />
        </TouchableOpacity>
        <Text className="text-headxl py-[11.5px] font-psemibold text-neutralWhite">
          {dayjs().format("d [de] MMMM, DDDD")}
        </Text>
        <TouchableOpacity>
          <MaterialIcons name="arrow-forward" size={24} color="white" />
        </TouchableOpacity>
      </View> */}
      <Text className="text-headxl mt-10 text-neutralWhite font-headsemibold">
        Movimientos del presupuesto
      </Text>
      <SelectDropdown
        data={["Precio", "Fecha"]}
        onSelect={(selectedItem, index) => {
          if (selectedItem === "Precio") {
            setExpenses(
              [...expenses].sort((a: any, b: any) => b.amount - a.amount)
            );
          } else {
            setExpenses(expenses.sort((a: any, b: any) => a.date - b.date));
          }
        }}
        renderButton={(selectedItem, isOpened) => {
          return (
            <View
              style={{
                width: 100,
                backgroundColor: "#290B57",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                padding: 8,
                borderRadius: 9,
                marginTop: 16,
                justifyContent: "space-between",
                marginLeft: "auto",
              }}
            >
              <Text className="text-headmd text-neutralWhite font-headsemibold">
                {(selectedItem && selectedItem) || "Ordenar"}
              </Text>
              <MaterialIcons
                name="arrow-back-ios"
                size={14}
                color="white"
                className="-rotate-90"
              />
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
              <Text style={styles.dropdownItemTxtStyle}>{item}</Text>
            </View>
          );
        }}
        showsVerticalScrollIndicator={false}
        dropdownStyle={styles.dropdownMenuStyle}
      />
      <ScrollView
        style={{
          maxHeight: 460,
        }}
      >
        {expenses.map((movement: any) => (
          <View className="border border-[#290B57] rounded-[9px] flex-row  items-center mt-[16px] px-[8px] py-[10px]">
            <View>
              <View className="bg-[#290B57] w-[50px] h-[50px] rounded-full flex items-center justify-center">
                <Text className="text-neutralWhite text-headxxl">
                  {movement.categoryName.slice(0, 1).toUpperCase()}
                </Text>
              </View>
            </View>
            <View className="ml-5">
              <Text className="text-headlg text-neutralWhite font-headsemibold">
                {movement.categoryName}
              </Text>
              <Text className="text-headlg text-neutralLightGray font-headsemibold">
                {dayjs(movement.date).format("D MMMM")}
              </Text>
            </View>
            <Text
              className="text-headlg text-[#ABFEBD] font-headsemibold"
              style={{ marginLeft: "auto" }}
            >
              ${movement.amount}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
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
