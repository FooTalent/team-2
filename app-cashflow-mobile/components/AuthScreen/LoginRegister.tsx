import React, { useEffect, useRef, useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  Switch,
  Modal,
} from "react-native";
import { AntDesign, Entypo, Feather, MaterialIcons } from "@expo/vector-icons";
import { ButtonAction } from "../ButtonAction";
import { router } from "expo-router";
import { ThemedView } from "../ThemedView";
import { LinearGradient } from "expo-linear-gradient";
import Loading from "../Loading";
import AlertGlobal from "../AlertGlobal";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

export const LoginRegister = ({
  show,
  formData,
  setFormData,
  handleRegister,
  handleLogin,
  loading,
  modalInfo,
  setModalInfo,
  setLoading,
}: any) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const handleChange = (name: any, value: any) => {
    setFormData({ ...formData, [name]: value });
  };
  useEffect(()=>{
    
  },[loading])
  const handleGoBack = () => {
    router.replace("auth");
  };

  return (
    <View style={{ display: "flex" }}>
      <ThemedView className="flex flex-row justify-between">
        <View className="  flex flex-row gap-[16px]">
          <TouchableOpacity
            onPress={handleGoBack}
            style={{ backgroundColor: "#290B57", borderRadius: 100 }}
          >
            <MaterialIcons
              name="keyboard-arrow-left"
              color="#5c2aa7"
              size={44}
              className="text-[24px]"
            />
          </TouchableOpacity>
          <Text className="text-neutralWhite font-headbold text-headxxl align-middle">
            CashFlow
          </Text>
        </View>
      </ThemedView>
      {show === "register" ? (
        <>
          <Text className="text-primaryLightGreen mb-3 text-headmd font-headbold">
            Datos del perfil
          </Text>
          <Text style={styles.textInput}>Nombre de usuario</Text>
          <TextInput
            style={styles.input}
            placeholder="Nombre de usuario"
            value={formData.userName}
            onChangeText={(text) => setFormData({ ...formData, userName: text })}
          />
          <Text className="text-primaryLightGreen mb-3 text-headmd font-headbold">
            Datos de cuenta
          </Text>
          <Text style={styles.textInput}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={formData.email}
            onChangeText={(text) => handleChange("email", text)}
            keyboardType="email-address"
          />
          <Text style={styles.textInput}>Contraseña</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.input}
              placeholder="Contraseña"
              value={formData.password}
              onChangeText={(text) => handleChange("password", text)}
              secureTextEntry={!passwordVisible}
            />
            <TouchableOpacity
              style={styles.icon}
              onPress={() => setPasswordVisible(!passwordVisible)}
            >
              <Entypo
                name={passwordVisible ? "eye" : "eye-with-line"}
                size={24}
                color="black"
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.textInput}>Confirmar contraseña</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.input}
              placeholder="Confirmar contraseña"
              value={formData.confirmPassword}
              onChangeText={(text) => handleChange("confirmPassword", text)}
              secureTextEntry={!confirmPasswordVisible}
            />
            <TouchableOpacity
              style={styles.icon}
              onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
            >
              <Entypo
                name={confirmPasswordVisible ? "eye" : "eye-with-line"}
                size={24}
                color="black"
              />
            </TouchableOpacity>
          </View>
          <View className="flex flex-row items-center">
            <Switch
              style={styles.checkbox}
              value={formData.terms}
              onValueChange={(value) =>
                setFormData({ ...formData, terms: value })
              }
            />
            <Text className="text-neutralLightGray">
              Acepto términos y condiciones
            </Text>
          </View>
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
              onPress={()=>{handleRegister(), setLoading(true)}}
              style={{
                borderRadius: 40,
                alignItems: "center",
                paddingVertical: 10,
              }}
              className="flex flex-row"
            >
              <View className="items-center flex flex-row">
                {loading ? (
                  <Loading />
                ) : (
                  <>
                    <Text className="text-neutralWhite text-headlg text-center">
                      SIGUIENTE
                    </Text>
                    <MaterialIcons
                      size={24}
                      className="rotate-180 "
                      name="arrow-back-ios"
                      color="white"
                    />
                  </>
                )}
              </View>
            </TouchableOpacity>
          </LinearGradient>
        </>
      ) : (
        <View style={{ marginVertical: "50%" }}>
          <Text className="text-center text-primaryLightGreen text-headlg">
            Ingresa tus datos.
          </Text>
          <Text style={styles.textInput}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={formData.email}
            onChangeText={(text) => handleChange("email", text)}
            keyboardType="email-address"
          />
          <Text style={styles.textInput}>Contraseña</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.input}
              placeholder="Contraseña"
              value={formData.password}
              onChangeText={(text) => handleChange("password", text)}
              secureTextEntry={!passwordVisible}
            />
            <TouchableOpacity
              style={styles.icon}
              onPress={() => setPasswordVisible(!passwordVisible)}
            >
              <Entypo
                name={passwordVisible ? "eye" : "eye-with-line"}
                size={24}
                color="black"
              />
            </TouchableOpacity>
          </View>
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
              disabled={loading}
              onPress={() => {
                handleLogin(), setLoading(true);
              }}
              className="flex flex-row"
            >
              <View className="items-center flex flex-row">
                {loading ? (
                  <Loading />
                ) : (
                  <>
                    <Text className="text-neutralWhite text-headlg text-center">
                      SIGUIENTE
                    </Text>
                    <MaterialIcons
                      size={24}
                      className="rotate-180 "
                      name="arrow-back-ios"
                      color="white"
                    />
                  </>
                )}
              </View>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      )}
      <AlertGlobal
        setLoading={setLoading}
        head={modalInfo.head}
        err={modalInfo.err}
        p={modalInfo.p}
        modalVisible={modalInfo }
        setModalVisible={setModalInfo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
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
  iconReturn: {
    backgroundColor: "#fff",
    width: "16%",
    marginBottom: 20,
    borderRadius: 70,
  },
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    height: 60,
    borderColor: "#666",
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 28,
    borderRadius: 50,
    backgroundColor: "#fff",
    fontSize: 20,
    flex: 1,
  },
  textInput: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 10,
    fontWeight: "bold",
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  icon: {
    marginLeft: -50,
    marginBottom: 10,
    paddingRight: 20,
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
    color: "#fff",
  },
});
