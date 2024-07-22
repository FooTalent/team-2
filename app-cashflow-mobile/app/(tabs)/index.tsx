import {
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { LinearGradient } from "expo-linear-gradient";

import { Feather, Octicons } from "@expo/vector-icons";
import { PieChart } from "react-native-gifted-charts";
import GradientChartHome from "@/components/Home/GradientChartHome";
import { Link } from "expo-router";

export default function HomeScreen() {
  {/* <SimpleLineIcons name="home" size={24} color="black" /> */}
 
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
        <TouchableOpacity style={{ marginLeft: "auto" }}>
          <Feather
            className="p-3 font border border-neutralWhite rounded-full"
            name="bell"
            size={24}
            color="white"
          />
        </TouchableOpacity>
      </View>
      <ThemedView style={styles.titleContainer}>
        <Text className=" font-headlight text-headxxl text-neutralWhite">
          Hola
        </Text>
        <Image
          style={{ width: 45.28, height: 45.28, borderRadius: 100 }}
          source={{
            uri: "https://reactnative.dev/img/tiny_logo.png",
          }}
        />

        <Text className=" font-headsemibold text-headxxl text-neutralWhite">
          Clara
        </Text>
        <HelloWave />
      </ThemedView>
      <ThemedView>
        {/* <GradientChartHome /> */}
      </ThemedView>
      <ThemedView className="gap-y-3">
        <TouchableOpacity>
          <LinearGradient
            style={{
              padding: 16,
              borderRadius: 8,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              height: 74,
            }}
            className="opacity-50 "
            colors={["#FF00B8", "#04FD3B"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
          >
            <Text className="text-headxl text-neutralWhite font-headlight">
              Ver Detalles
            </Text>

            <View
              style={{
                width: "auto",
                height: 70,
              }}
            >
              <Feather
                size={70}
                className="rotate-90  "
                name="arrow-down-left"
                color="white"
              />
            </View>
          </LinearGradient>
        </TouchableOpacity>
        <View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
          <TouchableOpacity style={{ width: "70%" }}>
            <LinearGradient
              style={{
                padding: 16,
                borderRadius: 8,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                height: 75,
              }}
              className="opacity-50"
              colors={["#FF00B8", "#04FD3B"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
            >
              <Text className="text-headxl text-neutralWhite font-headlight">
                Movimientos
              </Text>

              <View
                style={{
                  width: "auto",
                  height: 70,
                }}
              >
                <Feather
                  size={70}
                  className=" "
                  name="arrow-down-left"
                  color="white"
                />
              </View>
            </LinearGradient>
          </TouchableOpacity>
          <Link asChild href={"addMovement"}>
          <TouchableOpacity
            style={{
              width: "27%",
              borderColor: "white",
              borderWidth: 1,
              borderRadius: 20,
            }}
          >
            <Text className="text-headmd text-center   text-neutralWhite font-headlight top-3">
              Agregar Movimientos
            </Text>

            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                top: 22,
              }}
            >
              <LinearGradient
                style={{
                  padding: 1,
                  borderRadius: 100,
                  maxWidth: 35,
                }}
                colors={["#FF00B8", "#04FD3B"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
              >
                <Feather
                  className="text-center"
                  size={25}
                  name="plus"
                  color="white"
                />
              </LinearGradient>
            </View>
          </TouchableOpacity>
          </Link>
        </View>
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
