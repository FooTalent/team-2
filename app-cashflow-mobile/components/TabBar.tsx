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
      className="bg-[#110622]  flex flex-row h-[84px] w-full"
      style={{ borderRadius: 20 }}
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
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            {/* {label} */}
            <View
              className={`${
                isFocused ? "rounded-full px-3 py-2 bg-neutralWhite" : ""
              }  ${
                route.name == "more"
                  ? "border border-[#222] rounded-full p-3"
                  : ""
              }`}
            >
              {icons[route.name]({
                color: isFocused ? "black" : "#222",
                size: 44,
                borderRadius: isFocused ? 20 : 0,
                border: isFocused ? "2px solid #673ab7" : "none",
              })}
            </View>
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
