import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import { ThemedView } from '@/components/ThemedView'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { MaterialIcons } from '@expo/vector-icons'
import { router } from 'expo-router'
import GeneralButton from '@/components/GeneralButton'

export default function AddBudget() {
  const [firstTime, setFirstTime] = useState<boolean>(false)
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
  ]
  return (
    <View
    style={{
      flex: 1,
      marginHorizontal: 16,
      paddingVertical: 40,
    }}
  >
    <ThemedView className="flex flex-row justify-between">
      <View className="  flex flex-row gap-[16px]">
        <TouchableOpacity
        onPress={handleGoBack}
          style={{ backgroundColor: "#ABFEBD", borderRadius: 100 }}
        >
          <MaterialIcons
            name="keyboard-arrow-left"
            color="#3B1575"
            size={44}
            className="text-[24px]"
          />
        </TouchableOpacity>
        <Text className="text-neutralWhite font-headbold text-headxxl align-middle">
        Añadir presupuesto
        </Text>
      </View>
    </ThemedView>
    {
      firstTime ? 
      (
        <TextInput
        placeholder="Nombre del presupuesto"
        style={{
          backgroundColor: "#ABFEBD",
          borderRadius: 100,
          padding: 16,
          marginVertical: 16,
        }}
         />
      ):
      (
          budgets.map((budget, index) => (
            <GeneralButton key={index} onPress={()=>router.push(`budgets/${index}`)}>
              <Text className="text-pxl text-neutralWhite font-headsemibold">
                {budget}
              </Text>
            </GeneralButton>
          ))
      )
    }
    </View>
    
  )
}