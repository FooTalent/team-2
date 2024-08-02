import { MaterialIcons, Octicons } from "@expo/vector-icons";
import dayjs from "dayjs";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { LineChart } from "react-native-gifted-charts";

function Summary(props:any) {
    return (
      <View
        style={{
          rowGap: 5,
          marginTop: 20,
        }}
      >
        <Text className="font-plight text-plg text-neutralWhite">
          22-30 de Julio
        </Text>
        <Text className="font-psemibold mt-[16px] text-plg text-neutralWhite">
          Gastado: ARS 100000
        </Text>
        <Text className="font-psemibold text-plg text-neutralWhite">
          Disponible: ARS 100000
        </Text>
        <View
          className="bg-[#290B57] border border-[#6EFF8E] rounded-[16px] "
          style={{
            paddingHorizontal: 26,
            paddingVertical: 16,
            height: 169,
            marginTop: 16,
          }}
        >
          <Text className="font-psemibold text-plg text-[#6EFF8E]">Total</Text>
          <View className="flex gap-[14px] flex-row">
            <Text className="font-headbold text-headxxl text-[#6EFF8E]">
              ARS $200001
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: "white",
                borderRadius: 100,
              }}
            >
              <Octicons
                name="pencil"
                size={20}
                color="gray"
                className="p-[8px]"
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: 50,
              borderRadius: 9,
            }}
            className="bg-neutralWhite "
          >
            <Text className="p-[8px]">-{props.porcentaje}%</Text>
          </View>
          <View style={styles.container}>
            <View style={styles.barContainer}>
              <View
                style={[
                  styles.bar,
                  {
                    width: `${props.porcentaje}%`,
                  },
                ]}
              />
            </View>
          </View>
        </View>
        <Text className="text-neutralWhite text-headxl mt-[32px]">Tendencia</Text>
        <View className="flex border rounded-[99px] border-[#290B57] px-[8px] flex-row  mt-[16px] mb-[28px] items-center justify-between">
          <TouchableOpacity>
            <MaterialIcons
              name="arrow-forward"
              size={24}
              color="white"
              className="rotate-180"
            />
          </TouchableOpacity>
          <Text className="text-headxl py-[11.5px] font-psemibold text-neutralWhite">
            {dayjs().format("d [de] MMMM, DDDD")}
          </Text>
          <TouchableOpacity>
            <MaterialIcons name="arrow-forward" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <View
          className="bg-[#290B57] mb-[20px] w-[137px] rounded-[9px] "
          style={{
            maxWidth: "auto",
          }}
        >
          <Text className="text-[#FF75D9] p-[4px] text-headlg text-center font-headbold ">
            Restan $10000
          </Text>
        </View>
        <LineChart
          areaChart
          data={props.data1}
          rotateLabel
          width={300}
          hideDataPoints
          spacing={100}
          color="#00ff83"
          thickness={2}
          startFillColor="rgba(20,105,81,0.3)"
          endFillColor="rgba(20,85,81,0.01)"
          startOpacity={0.9}
          endOpacity={0.2}
          initialSpacing={0}
          noOfSections={6}
          maxValue={100}
          yAxisColor="white"
          yAxisThickness={0}
          rulesType="solid"
          rulesColor="gray"
          yAxisTextStyle={{
            color: "gray",
          }}
          yAxisSide="right"
          xAxisColor="lightgray"
          pointerConfig={{
            pointerStripHeight: 160,
            pointerStripColor: "lightgray",
            pointerStripWidth: 2,
            pointerColor: "lightgray",
            radius: 6,
            pointerLabelWidth: 100,
            pointerLabelHeight: 90,
            activatePointersOnLongPress: true,
            autoAdjustPointerLabelPosition: false,
            pointerLabelComponent: (items: any) => {
              return (
                <View
                  style={{
                    height: 90,
                    width: 100,
                    justifyContent: "center",
                    marginTop: 30,
                    marginLeft: -40,
                    zIndex: 100000,
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      fontSize: 14,
                      marginBottom: 6,
                      textAlign: "center",
                    }}
                  >
                    {items[0].date}
                  </Text>
  
                  <View
                    style={{
                      paddingHorizontal: 14,
                      paddingVertical: 6,
                      borderRadius: 16,
                      backgroundColor: "#FF75D9",
                    }}
                  >
                    <Text
                      style={{
                        fontWeight: "bold",
                        textAlign: "center",
                      }}
                    >
                      {"$" + items[0].value}
                    </Text>
                  </View>
                </View>
              );
            },
          }}
        />
        <View className="flex  flex-row border py-[8px] rounded-[8px] justify-evenly border-[#290B57] mb-20">
          <View className="flex flex-row gap-3">
            <View
              style={{
                width: 20,
                height: 20,
                borderRadius: 10,
                backgroundColor: "#6EFF8E",
              }}
            ></View>
            <Text className="text-headmd font-headbold text-neutralWhite">
              Gastado
            </Text>
          </View>
          <View className="flex flex-row gap-3">
            <View
              style={{
                width: 20,
                height: 20,
                borderRadius: 10,
                backgroundColor: "#FF75D9",
              }}
            ></View>
            <Text className="text-headmd font-headbold text-neutralWhite">
              Gastado
            </Text>
          </View>
        </View>
      </View>
    );
  }
export default Summary;


const styles = StyleSheet.create({
    container: {
      alignItems: "center",
      marginVertical: 20,
    },
    barContainer: {
      height: 14,
      width: "100%",
      backgroundColor: "#e0e0e0",
      borderRadius: 15,
      overflow: "hidden",
    },
    bar: {
      height: "100%",
      backgroundColor: "#ff66f4",
      borderRadius: 15,
    },
    label: {
      marginTop: 10,
      fontSize: 16,
      color: "#333",
    },
  });
  