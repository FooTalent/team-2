import { View, Image, StyleSheet } from "react-native";
import React, { useState } from "react";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { MaskTitle } from "@/components/MaskTitle";
import { ButtonAction } from "@/components/ButtonAction";
import { LoginRegister } from "@/components/AuthScreen/LoginRegister";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";

const Auth = () => {
  const [show, setShow] = useState("");
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
    // Lógica de registro
  };

  const handleLogin = async () => {
    await AsyncStorage.setItem('isLoggedIn', 'true');
    router.replace("(tabs)");
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
            <ButtonAction
              colorsForButton={["#A1CEDC", "#FF00B8"]}
              titleButton="Crear cuenta"
              action={() => setShow("register")}
            />
            <ButtonAction
              colorsForButton={["#A1CEDC", "#FF00B8"]}
              titleButton="Login"
              action={() => setShow("login")}
            />
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
  },
});

export default Auth;
