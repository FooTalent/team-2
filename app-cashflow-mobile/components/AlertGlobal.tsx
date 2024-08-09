import { View, Text, Modal,TouchableWithoutFeedback } from "react-native";
import React, { useRef, useState } from "react";
import { AntDesign, Feather } from "@expo/vector-icons";
import { StyleSheet } from "nativewind";

export default function AlertGlobal({
  err,
  p,
  head,
  modalVisible,
  setModalVisible,
  setLoading,
}: any) {
  const handleClickOutside = () => {
    console.log("click outisede");
    setLoading(false);
    setModalVisible({ ...modalVisible, modal: false });
  };
  return (
    <Modal
      animationType="none"
      transparent={true}
      visible={modalVisible.modal}
      onRequestClose={() => {
        setModalVisible({ ...modalVisible, modal: false });
      }}
    >
      <TouchableWithoutFeedback onPress={handleClickOutside}>
        <View className=" bg-primaryBackground/20 h-full flex">
          <View
            style={{ marginVertical: "80%", height: 100 }}
            className={`rounded-[10px]  flex flex-row items-center gap-4 p-[12px] ${
              err ? "bg-[#ff4d4d]" : "bg-[#6EFF8E]"
            } text-[#290B57]`}
          >
            {err ? (
              <Feather name="info" size={24} color="black" />
            ) : (
              <AntDesign name="checkcircleo" size={24} color="black" />
            )}
            <View>
              <Text className="text-headlg font-headsemibold">{head}</Text>
              <Text style={{maxWidth: 250}} className="text-headlg ">{p}</Text>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
