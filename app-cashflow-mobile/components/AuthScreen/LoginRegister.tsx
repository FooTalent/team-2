import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import { Entypo, Feather } from "@expo/vector-icons";
import { ButtonAction } from "../ButtonAction";
import { router } from "expo-router";

export const LoginRegister = ({
  show,
  formData,
  setFormData,
  handleRegister,
  handleLogin,
}: any) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const handleChange = (name: any, value: any) => {
    setFormData({ ...formData, [name]: value });
  };

  return (
    <View style={styles.container}>
      <Feather onPress={() => router.replace('auth ')} name="arrow-left-circle" size={50} style={styles.iconReturn} />
      {show === "register" ? (
        <>
          <Text style={styles.textInput}>Nombre de Usuario</Text>
          <TextInput
            style={styles.input}
            placeholder="Nombre de Usuario"
            value={formData.username}
            onChangeText={(text) => handleChange("username", text)}
          />
          <Text style={styles.textInput}>Apellido</Text>
          <TextInput
            style={styles.input}
            placeholder="Apellido"
            value={formData.lastName}
            onChangeText={(text) => handleChange("lastName", text)}
          />
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
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <ButtonAction
              colorsForButton={["#A1CEDC", "#FF00B8"]}
              titleButton="Registrarse"
              action={handleRegister}
            />
          </View>
        </>
      ) : (
        <>
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
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <ButtonAction
              colorsForButton={["#A1CEDC", "#FF00B8"]}
              titleButton="Login"
              action={handleLogin}
            />
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
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
    fontSize: 20,
    color: "#fff",
    paddingLeft: 18,
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
