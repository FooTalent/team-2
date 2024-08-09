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
import { AuthService } from "@/services/AuthService";
import { RegisterUserDto } from "@/types/dto/register-user.dto";
import AlertGlobal from "@/components/AlertGlobal";
import { register_user } from "./api/authAPI";
import { useUserContext } from "./context/UserDataContext";
import { movementAddEarn } from "./api/moneyAPI";

const Auth = () => {
  const { user, setUser } = useUserContext();
  const [show, setShow] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const [modalInfo, setModalInfo] = useState({
    head: "",
    p: "",
    err: false,
    modal: false,
  });
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });
  const router = useRouter();

  const handleRegister = async () => {
    const { userName, email, password, confirmPassword, terms } = formData;
    if (password != confirmPassword || !terms) {
      setModalInfo({
        err: true,
        head: "Ha ocurrido un error",
        p: "Las contraseñas no coinciden o no aceptaste los terminos",
        modal: true,
      });
      setLoading(false);
    } else {
      const res = await register_user(formData);
      console.log("RESPONSE: ", res.status == 400);

      if (res.status == 400) {
        console.log("ENTRA A ERROR");

        setModalInfo({
          err: true,
          head: "Ha ocurrido un error",
          p: "El correo ya esta registrado o no completaste bien los campos, la contraseña o usuario debe tener al menos 4 caracteres o no coinciden",
          modal: true,
        });
        setLoading(false);
      } else {
        setModalInfo({
          err: false,
          head: "Registro exitoso",
          p: "Usuario registrado correctamente",
          modal: true,
        });
        setLoading(false);
        setShow("login");
      }
    }
    console.log("sale por aca");
    
    setLoading(false);
  };

  const handleLogin = async () => {
    const { email, password } = formData;
    let loginUser = {
      email,
      password,
    };
    /* setLoading(true); */
    const res = await new AuthService().login(loginUser);

    console.log("RESPONSE: ", res);
    if (res.StatusCode == 401) {
      setModalInfo({
        err: true,
        head: "Ha ocurrido un error",
        p: "Usuario o contraseña incorrectos",
        modal: true,
      });
      setLoading(false);
    } else {
      const quantity = await AsyncStorage.getItem("quantity");
      const onboarding = await AsyncStorage.getItem("onboardingComplete");

      if (quantity != "0" && quantity != null && onboarding == "true") {
        const form = {
          date: new Date().toISOString(),
          amount: +quantity,
          moneyId: res.moneyId,
        };
        const response = await movementAddEarn(form);
        console.log("formmmmm: ", form);

        console.log(
          "RESPONSE DE AGREGR PLATA AL INICIO##############################: ",
          response
        );

        await AsyncStorage.removeItem("quantity");
      }
      setUser(res);
      setLoading(false);
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
            loading={loading}
            setLoading={setLoading}
            modalInfo={modalInfo}
            setModalInfo={setModalInfo}
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
