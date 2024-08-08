import { Feather, Ionicons, Octicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function TabBar({ state, descriptors, navigation }: any) {
  const icons = {
    index: (props: any) => (
      <Octicons name="home" size={24} color="black" {...props} />
    ),
    explore: (props: any) => (
      <Ionicons name="cash-outline" size={24} color="black" {...props} />
    ),
    more: (props: any) => (
      <Feather name="more-horizontal" size={24} color="black" {...props} />
    ),
  };
  return (
    <View
      className="bg-[#110622] border-[#ABFEBD] flex flex-row h-[84px]"
      style={{
        borderRadius: 40,
        borderWidth: 1,
        borderColor: "#ABFEBD",
        width: "98%",
        margin: "auto",
      }}

      /* style={styles.tab} */
    >
      {state.routes.map((route: any, index: any) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            disabled={route.name == "more"}
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              justifyContent: "center",
              backgroundColor: isFocused ? "#ABFEBD" : "#110622",
              borderRadius: 40,
              margin: 10,
            }}
          >
            <View>
              {icons[route.name]({
                color:
                  route.name === "more"
                    ? "gray"
                    : isFocused
                    ? "#110622"
                    : "#ABFEBD",

                marginHorizontal: "auto",
              })}
            </View>
            <Text
              className="text-center"
              style={{
                color:
                  route.name === "more"
                    ? "gray"
                    : isFocused
                    ? "#110622"
                    : "#ABFEBD",
              }}
            >
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
const styles = StyleSheet.create({
  tab: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
