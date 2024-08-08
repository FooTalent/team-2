import {
  StyleSheet,
  Image,
  Platform,
  Text,
  View,
  Modal,
  Pressable,
  TouchableWithoutFeedback,
} from "react-native";

import { ThemedView } from "@/components/ThemedView";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign, Feather, MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { useEffect, useRef, useState } from "react";
import GeneralButton from "@/components/GeneralButton";
import { getBudget, getBudgets } from "../api/moneyAPI";
import Loading from "@/components/Loading";
import { useUserContext } from "../context/UserDataContext";
export default function TabTwoScreen() {
  const {user} = useUserContext()
  const [modalVisible, setModalVisible] = useState(true);
  const refModal = useRef<any>(null);
  const [budgets, setBudgets] = useState<any>([]);
  const getBusgets = async () => {
    const response = await getBudgets(user.moneyId);
    
    const budgetsPlusInfo = await Promise.all(
      response.map(async (budget: any) => {
        const detailedBudget = await getBudget(budget.id);
        const total = detailedBudget.amount + detailedBudget.expenses.reduce((acc: any, item: any) => acc + item.amount, 0);
        const porcentaje = (detailedBudget.expenses.reduce((acc: any, item: any) => acc + item.amount, 0) / total) * 100;
        return { ...detailedBudget, total, porcentaje };
      })
    );
    console.log("response PLUS INFO: ", budgetsPlusInfo);

    setBudgets(budgetsPlusInfo);
  };
  useEffect(() => {
    console.log("se ejecuta");
    
    getBusgets();
  }, []);

  const handleClickOutside = () => {
    setModalVisible(false);
  };

  const [firstTime, setFirstTime] = useState<boolean>(false);

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 40,
        backgroundColor: "#090215",
      }}
    >
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
            Presupuesto
          </Text>
        </View>
        <TouchableOpacity onPress={() => router.push("addBudget")
        }>
          <LinearGradient
            style={{
              borderRadius: 30,
              padding: 2,
            }}
            colors={["#0E4117", "#490B37"]}
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 0 }}
          >
            <View
              className="bg-[#090215]"
              style={{
                borderRadius: 30,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                padding: 10,
                gap: 5
              }}
            >
              <Text className="text-neutralWhite font-headbold text-headmd align-middle">
                Añadir
              </Text>
              <AntDesign name="pluscircleo" size={24} color="white" />
            </View>
          </LinearGradient>
        </TouchableOpacity>
      </ThemedView>
      {budgets.length == 0  ? (
        <>
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
            onPress={() => router.push("addBudget")}
            style={{ marginHorizontal: "auto", marginTop: 40 }}
          >
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
        </>
      ) : (
        budgets.map((budget: any, index: any) => (
          <TouchableOpacity
          key={index}
            onPress={() => router.push(`budgets/${budget.id}`)}
            style={{
              paddingHorizontal: 10,
              backgroundColor: "#290B57",
              borderRadius: 9,
              marginTop: 16,
              flexDirection: "row",
              alignItems: "center",
              paddingTop: 10,
            }}
          >
            <View style={{ width: "20%" }}>
              <View className="bg-[#7d32ec] w-[50px] h-[50px] rounded-full flex items-center justify-center">
                <Text className="text-neutralWhite text-headxxl ">
                  {budget.name.slice(0, 1).toUpperCase()}
                </Text>
              </View>
            </View>
            <View style={{ width: "70%" }} className="w-[70%]">
              <View className=" flex  flex-row justify-around">
                <Text className="text-headlg   text-neutralWhite font-headsemibold">
                  {budget.name}
                </Text>
                <Text
                  className="text-headlg text-[#6EFF8E] font-headsemibold"
                  style={{ marginLeft: "auto" }}
                >
                  ${budget.total}
                </Text>
              </View>
              <View style={styles.container}>
                <View style={styles.barContainer}>
                  <View
                    style={[
                      styles.bar,
                      {
                        width: `${budget.porcentaje}%`,
                      },
                    ]}
                  />
                </View>
              </View>
            </View>
            <MaterialIcons
              name="arrow-back-ios"
              size={24}
              color="white"
              className="rotate-180"
            />
          </TouchableOpacity>
        ))
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginVertical: 20,
  },
  barContainer: {
    height: 14,
    width: "100%",
    backgroundColor: "#e0e0e0",
    borderRadius: 15,
    overflow: "hidden",
  },
  bar: {
    height: "100%",
    backgroundColor: "#6EFF8E",
    borderRadius: 15,
  },
  label: {
    marginTop: 10,
    fontSize: 16,
    color: "#333",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },

  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
