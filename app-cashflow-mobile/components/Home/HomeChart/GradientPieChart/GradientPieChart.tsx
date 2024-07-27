import { View, Text, StyleSheet, Dimensions } from "react-native";
import { PieChart } from "react-native-svg-charts";
import { Defs, LinearGradient, Stop, G, Path } from "react-native-svg";
import { useEffect, useState } from "react";
import { PieChartI } from "@/types";

export const GradientPieChart = () => {
  const [dataOperations, setDataOperations] = useState<PieChartI>({
    income: 10000,
    bills: 4000,
    total: 8000,
  });

  useEffect(() => {
    setDataOperations({
      ...dataOperations,
      total: dataOperations.income - dataOperations.bills,
    });
  }, []);

  const data = [
    {
      key: 1,
      value: dataOperations.bills,
      svg: { fill: "url(#gradient1)" },
    },
    {
      key: 2,
      value: dataOperations.income,
      svg: { fill: "url(#gradient2)" },
    },
  ];

  return (
    <View style={styles.chartContain}>
      <View style={styles.titleContain}>
        <Text style={styles.one}>Ingresos</Text>
        <Text style={styles.two}>Gastos</Text>
      </View>

      <View style={styles.totalContain}>
        <Text style={styles.totalText}>{dataOperations.total}ARS</Text>
        <Text style={styles.totalText2}>Total en la billetera</Text>
      </View>

      <PieChart
        style={{ height: 250 }}
        data={data}
        outerRadius={"90%"}
        innerRadius={"75%"}
        padAngle={-0.57}
        valueAccessor={({ item }) => item.value}
      >
        <Defs>
          <LinearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <Stop offset="0%" stopColor="#951971" />
            <Stop offset="100%" stopColor="#3c1931" />
          </LinearGradient>
          <LinearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <Stop offset="100%" stopColor="#2cdf4c" />
            <Stop offset="0%" stopColor="#1d6029" />
          </LinearGradient>
        </Defs>
      </PieChart>
    </View>
  );
};

const styles = StyleSheet.create({
  chartContain: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: "#000", // Color de fondo
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
    left: 105,
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
    fontSize: 13
  },
});
