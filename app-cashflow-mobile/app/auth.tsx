import {
  View,
  Image,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useState } from "react";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { MaskTitle } from "@/components/MaskTitle";
import { ButtonAction } from "@/components/ButtonAction";
import { LoginRegister } from "@/components/AuthScreen/LoginRegister";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { login_user, register_user } from "./api/authAPI";
import { useUserContext } from "./context/UserDataContext";

const Auth = () => {
  const { setUser } = useUserContext();
  const [show, setShow] = useState("");
  const [erros, setError] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    termsAccepted: false,
  });
  const router = useRouter();

  const handleRegister = () => {
    console.log("datos del formulario", formData);
    if (formData.confirmPassword !== formData.password) {
      return {
        StatusCode: 500,
        error: "Las contraseñas no coinciden",
      };
    } else {
      const response = register_user({
        firstName: formData.username,
        lastName: "null",
        email: formData.email,
        password: formData.password,
      });
      return response;
    }

    // Lógica de registro
  };

  const handleLogin = async () => {
    /* await AsyncStorage.setItem("isLoggedIn", "true");
    router.replace("(tabs)"); */
    const response = await login_user({
      email: formData.email,
      password: formData.password,
    });
    console.log("repsonse primer: ",response);
    if (response.hasOwnProperty("StatusCode")) {
      console.log("algo mal");
    } else {
      await AsyncStorage.setItem("isLoggedIn", "true");
      setUser(response);
      router.replace("(tabs)");
    }
  };

  return (
    <>
      <ParallaxScrollView
        headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
        headerImage={
          <Image source={require("@/assets/images/partial-react-logo.png")} />
        }
      >
        {show === "register" || show === "login" ? (
          <LoginRegister
            show={show}
            formData={formData}
            setFormData={setFormData}
            handleRegister={handleRegister}
            handleLogin={handleLogin}
          />
        ) : (
          <View style={styles.authContain}>
            <MaskTitle />
            <Text className="text-[30px] text-primaryLightGreen font-headbold">
              ¡Bienvenido!
            </Text>
            <Text className="text-headmd mb-10 text-neutralLighterGray ">
              Organiza tu dinero, alcanza tus metas.
            </Text>
            <LinearGradient
              style={{
                borderRadius: 40,
                padding: 2,
                width: "100%",
              }}
              colors={["#0E4117", "#490B37"]}
              start={{ x: 1, y: 0 }}
              end={{ x: 0, y: 0 }}
            >
              <TouchableOpacity
                onPress={() => setShow("login")}
                style={{
                  borderRadius: 40,
                  alignItems: "center",
                  paddingVertical: 10,
                  backgroundColor: "#090215",
                }}
                className="flex flex-row"
              >
                <View className="items-center flex flex-row">
                  <Text className="text-neutralWhite text-headlg text-center">
                    INICIAR SESION
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
                onPress={() => setShow("register")}
                style={{
                  borderRadius: 40,
                  alignItems: "center",
                  paddingVertical: 10,
                }}
                className="flex flex-row"
              >
                <View className="items-center flex flex-row">
                  <Text className="text-neutralWhite text-headlg text-center">
                    CREAR CUENTA
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
          </View>
        )}
      </ParallaxScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  authContain: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 500,
    rowGap: 15,
  },
});

export default Auth;
