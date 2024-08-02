import { Feather, MaterialIcons } from "@expo/vector-icons";
import { BottomSheetBackdrop, BottomSheetModal } from "@gorhom/bottom-sheet";
import dayjs from "dayjs";
import { LinearGradient } from "expo-linear-gradient";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import GeneralButton from "../GeneralButton";
export default function Earnings() {
  const snapPoints = useMemo(() => ["50%"], []);
  const [newEarn, setNewEarn] = useState({
    amount: 0,
    origin: "",
    date: dayjs().format("d [de] MMMM, DDDD"),
  });
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const handleOriginPress = (name: string) => {
    setNewEarn({ ...newEarn, origin: name });
  };
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
    <>
      <View>
        <Text className="text-headxl text-neutralWhite">Monto del ingreso</Text>
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
            placeholder="10000"
            keyboardType="number-pad"
            className="bg-neutralWhite rounded-full py-[8px] text-headxl px-[16px] w-[100%]"
          />
        </LinearGradient>
        <Text className="text-headxl text-neutralWhite">
          Origen del ingreso
        </Text>
        <View className="flex w-full flex-row  gap-2">
          {categories.slice(0, 3).map((category, index) => (
            <View key={category.id} className="flex-col items-center">
              <TouchableOpacity
                onPress={() => handleOriginPress(category.name)}
                style={{
                  paddingVertical: 5,
                  paddingHorizontal: 12,
                  marginVertical: 15,
                  borderRadius: 10,
                  backgroundColor: "#290B57",
                  borderColor: newEarn.origin == category.name ? "#6EFF8E" : "",
                  borderWidth: newEarn.origin == category.name ? 1 : 0,
                }}
              >
                <View style={{ width: "auto" }}>
                  <Text
                    className={`text-neutralWhite rounded-[99px] text-headxl text-center  px-4 py-2 ${
                      newEarn.origin == category.name
                        ? "bg-primaryLighterGreen text-primaryBackground"
                        : "bg-[#090215]"
                    }`}
                  >
                    {category.name.slice(0, 1).toUpperCase()}
                  </Text>
                </View>
                <Text
                  className={`text-headmd py-2 text-neutralWhite ml-2 text-center ${
                    newEarn.origin == category.name
                      ? "text-bg-primaryLighterGreen"
                      : "text-neutralWhite"
                  }`}
                >
                  {category.name}
                </Text>
              </TouchableOpacity>
            </View>
          ))}
          <TouchableOpacity
            onPress={handlePresentModalPress}
            style={{
              marginVertical: 15,
              borderRadius: 10,
            }}
          >
            <View style={{ width: "auto", marginVertical: "auto" }}>
              <Text className="text-neutralWhite text-headlg text-center bg-[#090215] px-4 py-2 underline">
                Ver más
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <Text className="text-headxl mt-[40px] font-psemibold text-neutralWhite">
          ¿Cuando se ingreso el dinero?
        </Text>
        <View
          className="flex flex-row border border-[#290B57]
        py-3 px-5
        rounded-[99px]  mt-[28px] mb-[28px] items-center justify-between"
        >
          <TouchableOpacity>
            <MaterialIcons name="arrow-back-ios" size={24} color="white" />
          </TouchableOpacity>
          <Text className="text-headxl font-psemibold text-neutralWhite">
            {dayjs().format("d [de] MMMM, DDDD")}
          </Text>
          <TouchableOpacity>
            <MaterialIcons
              name="arrow-back-ios"
              className="rotate-180 "
              size={24}
              color="white"
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            marginVertical: 15,
            borderRadius: 10,
          }}
        >
          <View
            style={{
              width: "auto",
              marginVertical: "auto",
              marginLeft: "auto",
            }}
          >
            <Text className="text-neutralWhite text-headlg text-start px-4 py-2 underline">
              Abrir calendario
            </Text>
          </View>
        </TouchableOpacity>

        <GeneralButton /* onPress={handleCloseBottomSheet} */>
          <Text
            style={{ marginHorizontal: "auto" }}
            className="text-headxl text-neutralWhite text-center font-headsemibold py-[8px]  "
          >
            GUARDAR
          </Text>
        </GeneralButton>

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
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },

  containerHeadline: {
    fontSize: 24,
    fontWeight: "600",
    padding: 20,
    color: "black",
  },
});
