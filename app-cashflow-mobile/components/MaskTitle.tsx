import { View, Text, StyleSheet } from "react-native";
import React from "react";
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";

export function MaskTitle() {
  return (
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
  );
}

const styles = StyleSheet.create({
  textSlideMask: {
    fontSize: 42,
    textAlign: "center",
    fontWeight: "bold",
  },
});
