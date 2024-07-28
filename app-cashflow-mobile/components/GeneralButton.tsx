import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { LinearGradient } from 'expo-linear-gradient'
import { MaterialIcons } from '@expo/vector-icons'

export default function GeneralButton({children, onPress}: any) {
  return (
    <TouchableOpacity  onPress={onPress}>
      <LinearGradient
        style={{
          paddingHorizontal: 23,
          borderRadius: 40,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          height: 74,
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
        {children}
        <View
          className="justify-center"
          style={{
            width: "auto",
            height: 70,
          }}
        >
          <MaterialIcons
            name="keyboard-arrow-left"
            color="white"
            size={44}
            className="text-[24px] rotate-180"
          />
        </View>
      </LinearGradient>
    </TouchableOpacity>
  )
}