import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { ButtonActionI } from "@/types/prop.types";

export function ButtonAction({ action, titleButton, colorsForButton }: ButtonActionI) {
  return (
    <TouchableOpacity style={styles.button} onPress={() => action()}>
      <LinearGradient
        colors={colorsForButton}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.buttonGradient}
      >
        <Text style={styles.buttonText}>{titleButton}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    width: "50%",
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
