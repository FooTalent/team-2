import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Defs, LinearGradient, Stop, G, Path } from "react-native-svg";
import { useEffect, useState } from "react";
import { PieChartI } from "@/types";
import { PieChart } from "react-native-gifted-charts";
import { MoneyService } from "@/services/MoneyService";

export const GradientPieChart = () => {
  const [dataOperations, setDataOperations] = useState<PieChartI>({
    income: null,
    bills: null,
    total: null,
  });

  const [pieData, setPieData] = useState([
    { value: 0, color: "#6EFF8E" },
    { value: 0, color: "#5C3D8C" },
  ]);

  const getMoney = async () => {
    try {
      const res = await new MoneyService().getMoney(1); // reemplazar por  el usuario logueado aqui
      console.log(res)
      let expenses = res.expenses.reduce((current: any, acc: any) => {
        return current + acc.amount;
      }, 0);
      let incomes = res.incomes.reduce((current: any, acc: any) => {
        return current + acc.amount;
      }, 0);

      setDataOperations({
        income: incomes,
        bills: expenses,
        total: res.total,
      });

      setPieData([
        { value: incomes, color: "#6EFF8E" }, // Ingresos
        { value: expenses, color: "#5C3D8C" }, // Gastos
      ]);
    } catch (error) {
      alert(`Se ha producido un error: ${error}`)
    }
  };

  useEffect(() => {
    getMoney();
  }, []);

  return (
    <View style={styles.chartContain}>
      <Text className="text-neutralWhite font-headsemibold text-center text-headlg">
        Total de la cuenta
      </Text>
      <Text className="text-primaryLighterGreen font-headsemibold text-center text-headxxl mb-5">
        ${dataOperations.total} ARS
      </Text>
      <View className="flex  flex-row border py-[8px] rounded-[8px] justify-evenly border-[#290B57] mb-5 ">
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
            Ingresos
          </Text>
        </View>
        <View className="flex flex-row gap-3">
          <View
            style={{
              width: 20,
              height: 20,
              borderRadius: 10,
              backgroundColor: "#5C3D8C",
            }}
          ></View>
          <Text className="text-headmd font-headbold  text-neutralWhite">
            Gastos
          </Text>
        </View>
      </View>
      <View style={{ marginHorizontal: "auto" }}>
        <PieChart
          donut
          innerCircleColor={"#090215"}
          innerRadius={80}
          data={pieData}
          centerLabelComponent={() => {
            const total = pieData.reduce((sum, entry) => sum + entry.value, 0);
            const percentage = total ? ((pieData[0].value / total) * 100).toFixed(2) : 0;
            return <Text style={{ fontSize: 30 }}>{percentage}%</Text>;
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  chartContain: {
    width: "100%",
    paddingVertical: 16,
    borderRadius: 8,
    backgroundColor: "#0A0219", // Color de fondo
    marginHorizontal: "auto",
  },
  titleContain: {
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  one: {
    color: "#FFFFFF",
    fontSize: 16,
    borderBottomWidth: 1,
    borderColor: "#04FD3B61",
  },
  two: {
    color: "#FFFFFF",
    fontSize: 16,
    borderBottomWidth: 1,
    borderColor: "#720D55",
  },
  totalContain: {
    position: "absolute",
    top: 150,
    left: 120,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
  totalText: {
    fontSize: 24,
    color: "#fff",
  },
  totalText2: {
    color: "#fff",
    fontSize: 13,
  },
});
