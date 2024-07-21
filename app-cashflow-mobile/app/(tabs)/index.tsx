import {
  Image,
  StyleSheet,
  Platform,
  View,
  Pressable,
  Button,
  TouchableOpacity,
} from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <View className="flex  border-2">
        <TouchableOpacity
          style={{ marginLeft: "auto" }}
        >
          <Feather className="p-3 border border-white rounded-full" name="bell" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <ThemedView style={styles.titleContainer}>
        <ThemedText style={{ fontWeight: "200" }} type="title">
          Hola
        </ThemedText>
        <Image
          style={{ width: 45.28, height: 45.28, borderRadius: 100 }}
          source={{
            uri: "https://reactnative.dev/img/tiny_logo.png",
          }}
        />
        <ThemedText style={{ fontWeight: "500" }} type="title">
          Clara
        </ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView>
      <LinearGradient
        style={{ padding: 16, borderRadius: 8, flexDirection: "row", justifyContent: "space-between", alignItems: "center", height: 75 }}
        colors={['#FF00B8', '#04FD3B']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      >
          <ThemedText  type="title">Ver Detalles</ThemedText>
          <Feather name="arrow-down-left" size={24} color="white" />
        </LinearGradient>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
