import { Feather, MaterialIcons } from "@expo/vector-icons";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";
import dayjs from "dayjs";
import { LinearGradient } from "expo-linear-gradient";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import GeneralButton from "../GeneralButton";
import { movementAddEarn } from "@/app/api/moneyAPI";
import AlertGlobal from "../AlertGlobal";
import Loading from "../Loading";
import { router } from "expo-router";
import { useUserContext } from "@/app/context/UserDataContext";
export default function Earnings() {
  const { user } = useUserContext();
  const snapPoints = useMemo(() => ["50%"], []);
  const [loading, setLoading] = useState(false);
  const [modalInfo, setModalInfo] = useState({
    head: "",
    p: "",
    err: false,
    modal: false,
  });
  const [newEarn, setNewEarn] = useState({
    amount: 0,
    date: new Date().toISOString(),
    moneyId: user.money.id,
    origin: "",
  });

  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const handleOriginPress = (name: string) => {
    setNewEarn({ ...newEarn, origin: name });
  };
  const handleAddEarn = async () => {
    if (newEarn.amount < 1) {
      setModalInfo({
        head: "Ha ocurrido un error",
        p: "El monto ingresado es invalido",
        err: true,
        modal: true,
      });
      setLoading(false);
      return;
    }
    console.log("NEW FORM EARN", newEarn);
    const response = await movementAddEarn(newEarn);
    console.log("RESPNSE DE AGREGAR DINERO", response);

    if (response.amount == newEarn.amount) {
      setModalInfo({
        head: "Ingreso agregado",
        p: "El ingreso se ha agregado correctamente",
        err: false,
        modal: true,
      });
      setLoading(false);
      router.replace("(tabs)");
    } else {
      setModalInfo({
        head: "Ha ocurrido un error",
        p: "El ingreso no se ha agregado correctamente",
        err: true,
        modal: true,
      });
      setLoading(false);
    }
  };
  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        {...props}
      />
    ),
    []
  );

  const handlePresentModalPress = () => bottomSheetRef.current?.present();

  const categories = [
    {
      id: 1,
      name: "Salario",
    },
    {
      id: 2,
      name: "Ventas",
    },
    {
      id: 3,
      name: "Inversiones",
    },
    {
      id: 4,
      name: "Apuestas",
    },
    {
      id: 5,
      name: "Otros",
    },
    {
      id: 6,
      name: "Banco",
    },

    {
      id: 7,
      name: "Otros",
    },
  ];
  return (
    <>
      <View>
        <Text className="text-headxl text-neutralWhite">Monto del ingreso</Text>
        <LinearGradient
          colors={["#FF00B8", "#04FD3B"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={{
            borderRadius: 40,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 1,
            marginVertical: 15,
          }}
        >
          <TextInput
            onChangeText={(text) => setNewEarn({ ...newEarn, amount: +text })}
            placeholder="Ingrese la cantidad"
            keyboardType="numbers-and-punctuation"
            className="bg-neutralWhite rounded-full py-[8px] text-headxl px-[16px] w-[100%]"
          />
        </LinearGradient>
        <Text className="text-headxl text-neutralWhite">
          Origen del ingreso
        </Text>
        <View className="flex w-full flex-row  gap-2">
          {categories.slice(0, 3).map((category, index) => (
            <View key={category.id} className="flex-col items-center">
              <TouchableOpacity
                onPress={() => handleOriginPress(category.name)}
                style={{
                  paddingVertical: 5,
                  paddingHorizontal: 12,
                  marginVertical: 15,
                  borderRadius: 10,
                  backgroundColor: "#290B57",
                  borderColor: newEarn.origin == category.name ? "#6EFF8E" : "",
                  borderWidth: newEarn.origin == category.name ? 1 : 0,
                }}
              >
                <View style={{ width: "auto" }}>
                  <Text
                    className={`text-neutralWhite rounded-[99px] text-headxl text-center  px-4 py-2 ${
                      newEarn.origin == category.name
                        ? "bg-primaryLighterGreen text-primaryBackground"
                        : "bg-[#090215]"
                    }`}
                  >
                    {category.name.slice(0, 1).toUpperCase()}
                  </Text>
                </View>
                <Text
                  className={`text-headmd py-2 text-neutralWhite ml-2 text-center ${
                    newEarn.origin == category.name
                      ? "text-bg-primaryLighterGreen"
                      : "text-neutralWhite"
                  }`}
                >
                  {category.name}
                </Text>
              </TouchableOpacity>
            </View>
          ))}
          <TouchableOpacity
            onPress={handlePresentModalPress}
            style={{
              marginVertical: 15,
              borderRadius: 10,
            }}
          >
            <View style={{ width: "auto", marginVertical: "auto" }}>
              <Text className="text-neutralWhite text-headlg text-center bg-[#090215] px-4 py-2 underline">
                Ver más
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <Text className="text-headxl mt-[40px] font-psemibold text-neutralWhite">
          ¿Cuando se ingreso el dinero?
        </Text>
        <View
          className="flex flex-row border border-[#290B57]
        py-3 px-5
        rounded-[99px]  mt-[28px] mb-[28px] items-center justify-between"
        >
          <TouchableOpacity
            style={{
              paddingRight: 25,
            }}
            onPress={() =>
              setNewEarn({
                ...newEarn,
                date: dayjs(newEarn.date).subtract(1, "day").toISOString(),
              })
            }
          >
            <MaterialIcons name="arrow-back-ios" size={24} color="white" />
          </TouchableOpacity>
          <Text className="text-headxl font-psemibold text-neutralWhite">
            {dayjs(newEarn.date).format("D [de] MMMM, YYYY")}
          </Text>
          <TouchableOpacity
            disabled={dayjs(newEarn.date).isSame(dayjs(), "day")}
            style={{
              paddingLeft: 25,
            }}
            onPress={() =>
              setNewEarn({
                ...newEarn,
                date: dayjs(newEarn.date).add(1, "day").toISOString(),
              })
            }
          >
            <MaterialIcons
              name="arrow-back-ios"
              className="rotate-180 "
              size={24}
              color="white"
            />
          </TouchableOpacity>
        </View>
        {/* <TouchableOpacity
          style={{
            marginVertical: 15,
            borderRadius: 10,
          }}
        >
          <View
            style={{
              width: "auto",
              marginVertical: "auto",
              marginLeft: "auto",
            }}
          >
            <Text className="text-neutralWhite text-headlg text-start px-4 py-2 underline">
              Abrir calendario
            </Text>
          </View>
        </TouchableOpacity> */}

        <GeneralButton
          onPress={() => {
            handleAddEarn(), setLoading(true);
          }}
        >
          {loading ? (
            <Loading />
          ) : (
            <Text
              style={{ marginHorizontal: "auto" }}
              className="text-headxl text-neutralWhite text-center font-headsemibold py-[8px]  "
            >
              GUARDAR
            </Text>
          )}
        </GeneralButton>

        <View className="bg-primaryPink">
          <BottomSheetModal
            enablePanDownToClose={true}
            ref={bottomSheetRef}
            index={0}
            backdropComponent={renderBackdrop}
            backgroundStyle={{ backgroundColor: "#0A0219" }}
            handleIndicatorStyle={{ backgroundColor: "#79747E" }}
            snapPoints={snapPoints}
          >
            <BottomSheetScrollView>
              <View className=" flex flex-row flex-wrap  gap-5">
                {categories.map((category, index) => (
                  <View key={category.id} className="flex-col items-center">
                    <TouchableOpacity
                      onPress={() => handleOriginPress(category.name)}
                      style={{
                        paddingVertical: 5,
                        paddingHorizontal: 12,
                        marginVertical: 15,
                        borderRadius: 10,
                        backgroundColor: "#290B57",
                        borderColor:
                          newEarn.origin == category.name ? "#6EFF8E" : "",
                        borderWidth: newEarn.origin == category.name ? 1 : 0,
                      }}
                    >
                      <View style={{ width: "auto" }}>
                        <Text
                          className={`text-neutralWhite rounded-[99px] text-headxl text-center  px-4 py-2 ${
                            newEarn.origin == category.name
                              ? "bg-primaryLighterGreen text-primaryBackground"
                              : "bg-[#090215]"
                          }`}
                        >
                          {category.name.slice(0, 1).toUpperCase()}
                        </Text>
                      </View>
                      <Text
                        className={`text-headmd py-2 text-neutralWhite ml-2 text-center ${
                          newEarn.origin == category.name
                            ? "text-bg-primaryLighterGreen"
                            : "text-neutralWhite"
                        }`}
                      >
                        {category.name}
                      </Text>
                    </TouchableOpacity>
                  </View>
                ))}
              </View>
            </BottomSheetScrollView>
          </BottomSheetModal>
        </View>
      </View>
      <AlertGlobal
        head={modalInfo.head}
        err={modalInfo.err}
        p={modalInfo.p}
        modalVisible={modalInfo}
        setModalVisible={setModalInfo}
        setLoading={setLoading}
      />
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },

  containerHeadline: {
    fontSize: 24,
    fontWeight: "600",
    padding: 20,
    color: "black",
  },
});
