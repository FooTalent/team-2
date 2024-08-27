import { Feather, MaterialIcons } from "@expo/vector-icons";
import { BottomSheetBackdrop, BottomSheetModal, BottomSheetScrollView } from "@gorhom/bottom-sheet";
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
import { movementAddExpenses } from "@/app/api/moneyAPI";
import { router } from "expo-router";
import AlertGlobal from "../AlertGlobal";
import { useUserContext } from "@/app/context/UserDataContext";
import { getCategories } from "@/app/api/categoryAPI";
import Loading from "../Loading";
export default function Expenses() {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [modalInfo, setModalInfo] = useState({
    head: "",
    p: "",
    err: false,
    modal: false,
  });
  const { user } = useUserContext();
  const handleOriginPress = (name: string) => {
    setNewEarn({ ...newEarn, categoryName: name });
  };
  const getCategorries = async () => {
    const response = await getCategories();
    setCategories(response);
  };
  const [newEarn, setNewEarn] = useState({
    amount: 0,
    date: new Date().toISOString(),
    moneyId: user.money.id,
    categoryName: "",
  });
  const handleAddExpenses = async () => {
    const response = await movementAddExpenses(newEarn);
    console.log("REPSONSE DE AGREGAR GASTO: ", response);
    
    if (response.amount == newEarn.amount) {
      setModalInfo({
        head: "Gasto agregado",
        p: "El gasto se ha agregado correctamente",
        err: false,
        modal: true,
      });
      setLoading(false);
      router.replace("(tabs)");
    } else {
      if (response.StatusCode == 406) {
        setModalInfo({
          head: "Ha ocurrido un error",
          p: response.Message == "El dinero disponible en Trabajo no es suficiente" ? "El dinero disponible en el Presupuesto Trabajo no es suficiente" : "El dinero disponible no es suficiente",
          err: true,
          modal: true,
        });
      } else {
        setModalInfo({
          head: "Ha ocurrido un error",
          p: "El gasto no se ha agregado correctamente",
          err: true,
          modal: true,
        });
        setLoading(false);
      }
    }
  };

  const snapPoints = useMemo(() => ["50%"], []);
  useEffect(() => {
    getCategorries();
  }, []);
  const bottomSheetRef = useRef<BottomSheetModal>(null);

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

  return (
    <View >
      <Text className="text-headxl text-neutralWhite">Monto del gasto</Text>
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
      <Text className="text-headxl text-neutralWhite">Origen del gasto</Text>
      <View className="flex w-full flex-row  gap-2">
        {categories.slice(0, 3).map((category: any, index) => (
          <View key={index} className="flex-col items-center">
            <TouchableOpacity
              onPress={() => handleOriginPress(category)}
              style={{
                paddingVertical: 5,
                paddingHorizontal: 12,
                marginVertical: 15,
                borderRadius: 10,
                backgroundColor: "#290B57",
                borderColor: newEarn.categoryName == category ? "#6EFF8E" : "",
                borderWidth: newEarn.categoryName == category ? 1 : 0,
              }}
            >
              <View style={{ width: "auto" }}>
                <Text
                  className={`text-neutralWhite rounded-[99px] text-headxl text-center  px-4 py-2 ${
                    newEarn.categoryName == category
                      ? "bg-primaryLighterGreen text-primaryBackground"
                      : "bg-[#090215]"
                  }`}
                >
                  {category.slice(0, 1).toUpperCase()}
                </Text>
              </View>
              <Text
                style={{ maxWidth: 59 }}
                className={`text-headmd py-2 text-neutralWhite ml-2 text-center ${
                  newEarn.categoryName == category
                    ? "text-bg-primaryLighterGreen"
                    : "text-neutralWhite"
                }`}
              >
                {category}
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
        ¿Cuando se gasto el dinero?
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
      <GeneralButton onPress={handleAddExpenses}>
        {
          loading ? <Loading /> : <Text
          className="text-headxl text-neutralWhite text-center font-headsemibold py-[8px]  "
            style={{ marginHorizontal: "auto" }}
          >
            GUARDAR
          </Text>
        }
        
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
          <BottomSheetScrollView >
            <View className=" flex flex-row flex-wrap  gap-5">
              {categories.map((category: any, index) => (
                <View key={index} className="flex-col items-center">
                  <TouchableOpacity
                    onPress={() => handleOriginPress(category)}
                    style={{
                      paddingVertical: 5,
                      paddingHorizontal: 12,
                      marginVertical: 15,
                      borderRadius: 10,
                      backgroundColor: "#290B57",
                      borderColor:
                        newEarn.categoryName == category ? "#6EFF8E" : "",
                      borderWidth: newEarn.categoryName == category ? 1 : 0,
                    }}
                  >
                    <View style={{ width: "auto" }}>
                      <Text
                        className={`text-neutralWhite rounded-[99px] text-headxl text-center  px-4 py-2 ${
                          newEarn.categoryName == category
                            ? "bg-primaryLighterGreen text-primaryBackground"
                            : "bg-[#090215]"
                        }`}
                      >
                        {category.slice(0, 1).toUpperCase()}
                      </Text>
                    </View>
                    <Text
                      style={{ maxWidth: 59 }}
                      className={`text-headmd py-2 text-neutralWhite ml-2 text-center ${
                        newEarn.categoryName == category
                          ? "text-bg-primaryLighterGreen"
                          : "text-neutralWhite"
                      }`}
                    >
                      {category}
                    </Text>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          </BottomSheetScrollView >
        </BottomSheetModal>
      </View>
      <AlertGlobal
        head={modalInfo.head}
        err={modalInfo.err}
        p={modalInfo.p}
        modalVisible={modalInfo}
        setModalVisible={setModalInfo}
        setLoading={setLoading}
      />
    </View>
  );
}
