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

const { width } = Dimensions.get("window");

const Onboarding = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [budget, setBudget] = useState("");
  const [markError, setMarkError] = useState(false)
  const router = useRouter();

  const completeOnboarding = async () => {
    if (selectedValue != "" && budget != "") router.replace("(tabs)");
    setMarkError(true)
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
      {/* Primer slide */}
      <View style={styles.slide}>
        <Image
          source={require("@/assets/images/onboard-1.png")}
          style={styles.image}
        />
        <Text style={styles.textSlide}>Bienvenido a CashFlow</Text>
        <Text style={styles.subTextSlide}>
          Organiza tu dinero, alcanza tus metas.
        </Text>
      </View>
      {/* Segundo slide */}
      <View style={styles.slide}>
        <Image
          source={require("@/assets/images/onboard-2.png")}
          style={styles.image}
        />
        <Text style={styles.textSlide}>Controla tus hábitos financieros.</Text>
        <Text style={styles.subTextSlide}>
          Planifica tus gastos mensuales y anuales de forma personalizada.
        </Text>
      </View>
      {/* Tercer slide */}
      <View style={styles.slide}>
        <MaskedView
          style={{
            height: 80,
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
          maskElement={
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Text style={[styles.textSlideMask]}>Cashflow</Text>
            </View>
          }
        >
          <LinearGradient
            colors={["#04FD3B", "#FF00B8"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{ height: 80, width: "100%" }}
          />
        </MaskedView>
        <View style={styles.inputContain}>
          <Text style={styles.inputText}>¿Cuál es tu presupuesto?</Text>
          <Text style={styles.smallText}>Añadir Presupuesto</Text>
          <View style={markError ? styles.inputTextWrapperError : styles.inputTextWrapper}>
            <TextInput
              style={{ color: "#3B1575" }}
              placeholder="Añade un presupuesto"
              placeholderTextColor="#888"
              onChangeText={setBudget}
              value={budget}
            />
          </View>
          {markError && <Text style={styles.smallTextError}>Completa este campo</Text>}
          <Text style={styles.smallText}>¿Cuál es tu moneda de cambio?</Text>
          <View style={markError ? styles.pickerWrapperError : styles.pickerWrapper}>
            <Picker
              selectedValue={selectedValue}
              style={styles.picker}
              onValueChange={(itemValue) => setSelectedValue(itemValue)}
            >
              <Picker.Item label="Seleccionar Divisa" value="" />
              <Picker.Item label="Peso argentino (ARS) 🇦🇷" value="ARS" />
            </Picker>
          </View>
          {markError && <Text style={styles.smallTextError}>Completa este campo</Text>}
          <TouchableOpacity style={styles.button} onPress={completeOnboarding}>
            <LinearGradient
              colors={["#04FD3B", "#FF00B8"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.buttonGradient}
            >
              <Text style={styles.buttonText}>Continuar</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: width,
    paddingHorizontal: 16,
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
    borderColor: "#E71D36"
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
    borderColor: "#E71D36"
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
