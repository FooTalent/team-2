import {
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedView } from "@/components/ThemedView";
import { LinearGradient } from "expo-linear-gradient";

import { Feather } from "@expo/vector-icons";
import {
  Link,
  router,
} from "expo-router";
import HomeChart from "@/components/Home/HomeChart/HomeChart";
import { useUserContext } from "../context/UserDataContext";
import Loading from "@/components/Loading";
import useExtendedRouter from "@/hooks/useExtendedRouter";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function HomeScreen() {
  {
    /* <SimpleLineIcons name="home" size={24} color="black" /> */
  }
  const { user } = useUserContext();
  const router = useExtendedRouter();
  
  const getUser = async () => {
    const onboardingComplete = await AsyncStorage.getItem(
      "onboardingComplete"
    );
    
    if (onboardingComplete == "true") {
      if (user == null) {
        router.push("auth");
      }
    }else{
      router.push("onboarding");
    }
    return user;
  }
  useEffect(() => {
    if (router.isReady) {
      getUser()      
    }
  }, [router]);

  /* useEffect(()=>{
    
    if (user === null) {
      console.log("user", user);
      router.push("auth");
    }else{
    }
  },[]) */

  return user == null ? (
    <Loading />
  ) : (
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
              uri: "https://as1.ftcdn.net/v2/jpg/03/39/45/96/1000_F_339459697_XAFacNQmwnvJRqe1Fe9VOptPWMUxlZP8.jpg",
            }}
          />
          <Text className=" font-headlight text-headxxl text-neutralWhite">
            Hola
          </Text>

          <Text className=" font-headsemibold text-headxxl text-neutralWhite">
            {user.user.userName}
          </Text>
        </View>
        <View className="flex bg-[#290B57] rounded-full border-2">
          <TouchableOpacity disabled style={{ marginLeft: "auto" }}>
            <Feather
              className="p-3 font  rounded-full"
              name="bell"
              size={24}
              color="gray"
            />
          </TouchableOpacity>
        </View>
        {/* <HelloWave /> */}
      </ThemedView>
      <ThemedView>
        <HomeChart moneyId={user.moneyId} />
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

        <TouchableOpacity disabled onPress={() => router.push("addMovement")}>
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
            <Text className="text-headlg text-neutralLightGray ">VER DETALLES</Text>
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
                color="gray"
              />
            </View>
          </LinearGradient>
        </TouchableOpacity>
      </ThemedView>

      {/* <View>
        <Link href={`/onboarding`}>
          <Text style={{ backgroundColor: "#fff" }}>Onboarding</Text>
        </Link>
      </View>
      <View>
        <Link href={`/auth`}>
          <Text style={{ backgroundColor: "#fff" }}>Auth</Text>
        </Link>
      </View> */}
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
