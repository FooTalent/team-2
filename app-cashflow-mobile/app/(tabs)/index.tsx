import {
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Pressable,
} from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { LinearGradient } from "expo-linear-gradient";

import { Feather, MaterialIcons, Octicons } from "@expo/vector-icons";
import { PieChart } from "react-native-gifted-charts";
import GradientChartHome from "@/components/Home/GradientChartHome";
import { Link, router, useRootNavigationState } from "expo-router";
import HomeChart from "@/components/Home/HomeChart/HomeChart";
import GeneralButton from "@/components/GeneralButton";
import { useEffect } from "react";
import { useUserContext } from "../context/UserDataContext";
import { getMoneyUser } from "../api/moneyAPI";
import Loading from "@/components/Loading";

export default function HomeScreen() {
  {
    /* <SimpleLineIcons name="home" size={24} color="black" /> */
  }
  const { user, setUser } = useUserContext();
  const getData = async () => {
    console.log("USUARIO? ", user);

    const data = await getMoneyUser(user.moneyId);
    setUser({ ...user, money: data });
  };
  const rootNavigationState = useRootNavigationState();
/* 
  useEffect(() => {
    if (rootNavigationState?.key) {
      if (user ==null) {
        router.push("auth");
      } else {
        getData();
      }
    }
  }, []); */
  return /*  */(
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView className="flex flex-row justify-between">
        <View style={styles.titleContainer}>
          <Image
            style={{ width: 45.28, height: 45.28, borderRadius: 100 }}
            source={{
              uri: "https://reactnative.dev/img/tiny_logo.png",
            }}
          />
          <Text className=" font-headlight text-headxxl text-neutralWhite">
            Hola
          </Text>

          <Text className=" font-headsemibold text-headxxl text-neutralWhite">
            clara!
          </Text>
        </View>
        <View className="flex bg-[#290B57] rounded-full border-2">
          <TouchableOpacity style={{ marginLeft: "auto" }}>
            <Feather
              className="p-3 font  rounded-full"
              name="bell"
              size={24}
              color="#954fff"
            />
          </TouchableOpacity>
        </View>
        {/* <HelloWave /> */}
      </ThemedView>
      <ThemedView>
        <HomeChart />
      </ThemedView>
      <ThemedView className="gap-y-3">
        <TouchableOpacity onPress={() => router.push("addMovement")}>
          <LinearGradient
            style={{
              paddingHorizontal: 23,
              borderRadius: 40,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              height: 44,
            }}
            colors={["#0E4117", "#480C36"]}
            start={{
              x: 0,
              y: 0,
            }}
            end={{
              x: 0,
              y: 1,
            }}
          >
            <Text className="text-headlg text-neutralWhite">
              AGREGAR MOVIMIENTOS
            </Text>
            <View
              className="justify-center"
              style={{
                width: "auto",
                height: 70,
              }}
            >
              <Feather
                size={24}
                className=" rotate-180"
                name="arrow-down-left"
                color="white"
              />
            </View>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("addMovement")}>
          <LinearGradient
            style={{
              paddingHorizontal: 23,
              borderRadius: 40,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              height: 44,
            }}
            colors={["#0E4117", "#480C36"]}
            start={{
              x: 0,
              y: 0,
            }}
            end={{
              x: 0,
              y: 1,
            }}
          >
            <Text className="text-headlg text-neutralWhite">VER DETALLES</Text>
            <View
              className="justify-center"
              style={{
                width: "auto",
                height: 70,
              }}
            >
              <Feather
                size={24}
                className=" "
                name="arrow-down-left"
                color="white"
              />
            </View>
          </LinearGradient>
        </TouchableOpacity>
      </ThemedView>

      <View>
        <Link href={`/onboarding`}>
          <Text style={{ backgroundColor: "#fff" }}>Onboarding</Text>
        </Link>
      </View>
      <View>
        <Link href={`/auth`}>
          <Text style={{ backgroundColor: "#fff" }}>Auth</Text>
        </Link>
      </View>
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
