import {
  View,
  Text,
  TextInput,
  SectionListComponent,
  StyleSheet,
  Switch,
} from "react-native";
import React, { useEffect, useState } from "react";
import { ThemedView } from "@/components/ThemedView";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import GeneralButton from "@/components/GeneralButton";
import SelectDropdown from "react-native-select-dropdown";
import { addNewBudget } from "./api/moneyAPI";
import { getCategories } from "./api/categoryAPI";
import { useUserContext } from "./context/UserDataContext";
import AlertGlobal from "@/components/AlertGlobal";
import Loading from "@/components/Loading";

export default function AddBudget() {
  const { user } = useUserContext();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [firstTime, setFirstTime] = useState<boolean>(true);
  const getCategoriess = async () => {
    const response = await getCategories();
    console.log("response categorias: ", response);
    setCategories(response);
  };
  useEffect(() => {
    console.log("se ejecuto el useEffect", user);

    getCategoriess();
  }, []);
  const [formNewBudget, setFormNewBudget] = useState({
    name: "",
    amount: 0,
    moneyId: user.money.id,
    createdDate: new Date().toISOString(),
    categoryName: "",
  });
  const [modalInfo, setModalInfo] = useState({
    head: "",
    p: "",
    err: false,
    modal: false,
  });
  const handleAddNewBudget = async () => {
    if (formNewBudget.amount < 1) {
      setModalInfo({
        head: "Error al agregar presupuesto",
        p: "El monto del presupuesto debe ser mayor a 0",
        err: true,
        modal: true,
      });
      setLoading(false);
      return;
    }
    if (formNewBudget.name.length < 1) {
      setModalInfo({
        head: "Error al agregar presupuesto",
        p: "El nombre del presupuesto no puede estar vacio",
        err: true,
        modal: true,
      });
      setLoading(false);
      return;
    }
    if (formNewBudget.categoryName.length < 1) {
      setModalInfo({
        head: "Error al agregar presupuesto",
        p: "Debes seleccionar una categoria",
        err: true,
        modal: true,
      });
      setLoading(false);
      return;
    }
    const response = await addNewBudget(formNewBudget);
    console.log("response agregar presupuesto: ", response);
    if (response.StatusCode == 406) {
      setModalInfo({
        head: "Error al agregar presupuesto",
        p: response.Message,
        err: true,
        modal: true,
      });
      setLoading(false);
    } else {
      setModalInfo({
        head: "Presupuesto agregado",
        p: "El presupuesto se ha agregado correctamente",
        err: false,
        modal: true,
      });
      setLoading(false);
      setTimeout(() => {
        router.replace("(tabs)");
      }, 2000);
    }
    setLoading(false);
  };
  const handleGoBack = () => {
    if (router.canGoBack()) {
      router.back();
    }
  };
  const budgets = [
    "Presupuesto 1",
    "Presupuesto 2",
    "Presupuesto 3",
    "Presupuesto 4",
  ];
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 40,
        backgroundColor: "#0A0219",
      }}
    >
      <ThemedView className="flex flex-row justify-between">
        <View className="  flex flex-row gap-[16px]">
        <TouchableOpacity
          onPress={handleGoBack}
          style={{ backgroundColor: "#290B57", borderRadius: 100 }}
        >
          <MaterialIcons
            name="keyboard-arrow-left"
            color="#7d32ec"
            size={44}
            className="text-[24px]"
          />
        </TouchableOpacity>
          <Text className="text-neutralWhite font-headbold text-headxxl align-middle">
            Nuevo Presupuesto
          </Text>
        </View>
      </ThemedView>
      <View className="mt-[16px] gap-y-3">
        <View>
          <Text className="text-neutralWhite text-headlg mb-3">
            Nombre del presupuesto
          </Text>
          <TextInput
            onChangeText={(text) =>
              setFormNewBudget({ ...formNewBudget, name: text })
            }
            placeholder="Ropa"
            className="p-[16px] rounded-[24px] text-headlg bg-neutralWhite text-black"
          />
        </View>
        <View>
          <Text className="text-neutralWhite text-headlg mb-3">
            Dinero del presupuesto
          </Text>
          <TextInput
            keyboardType="numeric"
            onChangeText={(text) =>
              setFormNewBudget({ ...formNewBudget, amount: +text })
            }
            placeholder="1000"
            className="p-[16px] rounded-[24px] text-headlg bg-neutralWhite text-black"
          />
        </View>
        <View>
          <Text className="text-neutralWhite text-headlg mb-3">Categoria</Text>
          <SelectDropdown
            data={categories}
            onSelect={(selectedItem, index) => {
              setFormNewBudget({
                ...formNewBudget,
                categoryName: selectedItem,
              });
            }}
            renderButton={(selectedItem, isOpened) => {
              return (
                <View style={styles.dropdownButtonStyle}>
                  <Text
                    style={styles.dropdownButtonTxtStyle}
                    className="text-neutralLighterGray"
                  >
                    {(selectedItem && selectedItem) ||
                      "Selecciona una categoria"}
                  </Text>
                </View>
              );
            }}
            renderItem={(item, index, isSelected) => {
              return (
                <View
                  style={{
                    ...styles.dropdownItemStyle,
                    ...(isSelected && { backgroundColor: "#D2D9DF" }),
                  }}
                >
                  <Text style={styles.dropdownItemTxtStyle}>{item}</Text>
                </View>
              );
            }}
            showsVerticalScrollIndicator={false}
            dropdownStyle={styles.dropdownMenuStyle}
          />
        </View>
      </View>
      <Text className="text-neutralWhite text-headlg mt-10 mb-5">
        Notificaciones
      </Text>
      <View className="flex flex-row items-center justify-between">
        <Text className="text-neutralLighterGray " style={{ maxWidth: "70%" }}>
          Notificar cuando supere el monto presupuestados
        </Text>
        <Switch />
      </View>
      <View className="flex flex-row items-center justify-between mb-5">
        <Text className="text-neutralLighterGray " style={{ maxWidth: "70%" }}>
          Notificar cuando se corra el riesgo de superar el presupuesto
        </Text>
        <Switch />
      </View>
      <GeneralButton
        onPress={async () => {
          setLoading(true), await handleAddNewBudget();
        }}
        row={false}
      >
        {loading ? (
          <Loading />
        ) : (
          <Text
            className="text-center text-neutralWhite text-headxl font-headsemibold"
            style={{ marginHorizontal: "auto" }}
          >
            GUARDAR
          </Text>
        )}
      </GeneralButton>
      <AlertGlobal
        head={modalInfo.head}
        err={modalInfo.err}
        p={modalInfo.p}
        modalVisible={modalInfo}
        setModalVisible={setModalInfo}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  dropdownButtonStyle: {
    width: "100%",
    backgroundColor: "white",
    borderRadius: 24,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  dropdownButtonTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: "500",
    color: "#151E26",
  },
  dropdownButtonArrowStyle: {
    fontSize: 28,
  },
  dropdownButtonIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
  dropdownMenuStyle: {
    backgroundColor: "#E9ECEF",
    borderRadius: 8,
  },
  dropdownItemStyle: {
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 12,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
  },
  dropdownItemTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: "500",
    color: "#151E26",
  },
  dropdownItemIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
});
