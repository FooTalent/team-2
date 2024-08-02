import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { LinearGradient } from "expo-linear-gradient";
import Swiper from "react-native-swiper";
import MaskedView from "@react-native-masked-view/masked-view";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const Onboarding = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [budget, setBudget] = useState("");
  const [markError, setMarkError] = useState(false);
  const router = useRouter();

  const completeOnboarding = async () => {
    if (selectedValue != "" && budget != "") {
      await AsyncStorage.setItem("onboardingComplete", "true");
      router.replace("(tabs)");
    }
    setMarkError(true);
    return;
  };

  return (
    <Swiper
      showsPagination
      paginationStyle={styles.paginationStyle}
      dotStyle={styles.dotStyle}
      activeDotStyle={styles.activeDotStyle}
      loop={false}
      style={{ backgroundColor: "#090215" }}
    >
      <View style={styles.slide}>
        <View className="flex  flex-row justify-between">
          <Text className="text-neutralWhite text-headxxl ">CashFlow</Text>
          <TouchableOpacity

          /* onPress={() => router.push("addBudget")} */
          >
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
                }}
              >
                <Text className="text-neutralWhite font-headbold text-headmd align-middle">
                  omitir
                </Text>
              </View>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <View
          className="flex justify-center items-center "
          style={{ marginVertical: "45%" }}
        >
          <Image
            source={require("@/assets/images/onboard-1.png")}
            style={styles.image}
          />
          <Text style={styles.textSlide}>Bienvenido a CashFlow</Text>
          <Text style={styles.subTextSlide}>
            Organiza tu dinero, alcanza tus metas.
          </Text>
        </View>
      </View>
      <View style={styles.slide}>
        <View className="flex  flex-row justify-between">
          <Text className="text-neutralWhite text-headxxl ">CashFlow</Text>
          <TouchableOpacity

          /* onPress={() => router.push("addBudget")} */
          >
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
                }}
              >
                <Text className="text-neutralWhite font-headbold text-headmd align-middle">
                  omitir
                </Text>
              </View>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <View
          className="flex justify-center items-center "
          style={{ marginVertical: "45%" }}
        >
          <Image
            source={require("@/assets/images/onboard-2.png")}
            style={styles.image}
          />
          <Text style={styles.textSlide}>
            Controla tus hábitos financieros.
          </Text>
          <Text style={styles.subTextSlide}>
            Planifica tus gastos mensuales y anuales de forma personalizada.
          </Text>
        </View>
      </View>
      <View style={{ paddingHorizontal: 16, paddingVertical: 43 }}>
        <View className="flex flex-row justify-between">
          <Text className="text-neutralWhite text-headxxl ">CashFlow</Text>
          <TouchableOpacity

          /* onPress={() => router.push("addBudget")} */
          >
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
                }}
              >
                <Text className="text-neutralWhite font-headbold text-headmd align-middle">
                  omitir
                </Text>
              </View>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        <View style={{ marginVertical: "50%", gap: 20 }}>
          <Text
            style={{ fontSize: 30, maxWidth: 300 }}
            className="text-primaryLightGreen font-headbold"
          >
            Ingresa dinero tu cuenta
          </Text>
          <Text className="text-neutralWhite text-headlg">
            Cantidad Inicial
          </Text>
          <TextInput
            placeholder="5000"
            className="rounded-[24px] bg-neutralWhite h-[40px] p-[16px] text-headlg"
          />
          <LinearGradient
            style={{
              borderRadius: 40,
              padding: 2,
              width: "100%",
            }}
            colors={["#0E4117", "#490B37"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
          >
            <TouchableOpacity
              style={{
                borderRadius: 40,
                alignItems: "center",
                paddingVertical: 10,
              }}
              className="flex flex-row"
            >
              <View className="items-center flex flex-row">
                <Text className="text-neutralWhite text-headlg text-center">
                  SIGUIENTE
                </Text>
                <MaterialIcons
                  size={24}
                  className="rotate-180 "
                  name="arrow-back-ios"
                  color="white"
                />
              </View>
            </TouchableOpacity>
          </LinearGradient>
          <Text>🇦🇷</Text>
          <Text className="text-neutralLighterGray">
            Estimado usuario de momento nuestra plataforma opera unicamente con
            pesos argentinos.
          </Text>
        </View>
      </View>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 16,
    paddingVertical: 43,
  },
  textSlide: {
    color: "#fff",
    fontSize: 37,
    textAlign: "center",
    marginTop: 10,
    fontWeight: "bold",
  },
  textSlideMask: {
    fontSize: 42,
    textAlign: "center",
    fontWeight: "bold",
  },
  subTextSlide: {
    color: "#fff",
    fontSize: 15,
    top: 10,
    textAlign: "center",
    fontWeight: "200",
  },
  picker: {
    height: 50,
    width: "100%",
    color: "#3B1575",
  },
  pickerWrapper: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 48,
    marginTop: 10,
    elevation: 20,
    shadowColor: "green",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 80,
  },
  pickerWrapperError: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 48,
    marginTop: 10,
    elevation: 20,
    shadowColor: "green",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 80,
    borderWidth: 2,
    borderColor: "#E71D36",
  },
  inputTextWrapper: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 48,
    marginTop: 10,
    padding: 10,
    elevation: 20,
    shadowColor: "green",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 80,
  },
  inputTextWrapperError: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 48,
    marginTop: 10,
    padding: 10,
    elevation: 20,
    shadowColor: "green",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 80,
    borderWidth: 2,
    borderColor: "#E71D36",
  },
  gradientButton: {
    width: "100%",
    marginTop: 20,
    padding: 16,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 74,
  },
  paginationStyle: {
    bottom: 30,
  },
  dotStyle: {
    backgroundColor: "#3b1575",
  },
  activeDotStyle: {
    backgroundColor: "#fff",
  },
  image: {
    width: 200,
    height: 200,
  },
  inputContain: {
    marginTop: 20,
    width: "80%",
    alignItems: "center",
  },
  inputText: {
    color: "#fff",
    fontSize: 15,
    marginBottom: 10,
  },
  smallText: {
    width: "100%",
    fontSize: 14,
    fontWeight: "200",
    color: "#fff",
    textAlign: "left",
    marginTop: 15,
  },
  smallTextError: {
    width: "100%",
    fontSize: 11,
    fontWeight: "200",
    color: "#E71D36",
    textAlign: "center",
    marginTop: 5,
  },
  button: {
    marginTop: 20,
    width: "100%",
    borderRadius: 48,
    elevation: 5,
  },
  buttonGradient: {
    padding: 15,
    borderRadius: 48,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Onboarding;
