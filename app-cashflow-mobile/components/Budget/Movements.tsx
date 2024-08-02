import { View, Text, ScrollView } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";
import dayjs from "dayjs";

export default function Movements() {
  const movemnts = [
    {
      name: "hoodie",
      price: 5000,
      date: "2021-07-30",
    },
    {
      name: "gorra",
      price: 5000,
      date: "2021-07-10",
    },
    {
      name: "remera",
      price: 5000,
      date: "2021-07-10",
    },
    {
      name: "zaptillas",
      price: 5000,
      date: "2021-07-10",
    },
    {
      name: "bufanda",
      price: 5000,
      date: "2021-07-10",
    },
    {
      name: "guantes",
      price: 5000,
      date: "2021-07-10",
    },
  ];
  return (
    <View>
      <View className="flex border rounded-[99px] border-[#290B57] px-[8px] flex-row  mt-[16px] mb-[28px] items-center justify-between">
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
      </View>
      <Text className="text-headxl text-neutralWhite font-headsemibold">
        Movimientos del presupuesto
      </Text>
      <TouchableOpacity
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
          Ordernar
        </Text>
        <MaterialIcons
          name="arrow-back-ios"
          size={14}
          color="white"
          className="-rotate-90"
        />
      </TouchableOpacity>

      <ScrollView
        style={{
          maxHeight: 460,
        }}
      >
        {movemnts.map((movement) => (
          <View className="border border-[#290B57] rounded-[9px] flex-row  items-center mt-[16px] px-[8px] py-[10px]">
            <View>
              <View className="bg-[#290B57] w-[50px] h-[50px] rounded-full flex items-center justify-center">
                <Text className="text-neutralWhite text-headxxl">
                  {movement.name.slice(0, 1).toUpperCase()}
                </Text>
              </View>
            </View>
            <View className="ml-5">
              <Text className="text-headlg text-neutralWhite font-headsemibold">
                {movement.name}
              </Text>
              <Text className="text-headlg text-neutralLightGray font-headsemibold">
                {movement.date}
              </Text>
            </View>
            <Text
              className="text-headlg text-[#ABFEBD] font-headsemibold"
              style={{ marginLeft: "auto" }}
            >
              ${movement.price}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
