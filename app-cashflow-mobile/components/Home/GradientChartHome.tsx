import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ProgressChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const GradientChartHome = () => {
  const totalAmount = 11000;
  const incomePercentage = 0.7; // Ajusta este valor según tus ingresos
  const expensesPercentage = 0.3; // Ajusta este valor según tus gastos

  const data = {
    labels: ['Ingresos', 'Gastos'], // Etiquetas
    data: [incomePercentage, expensesPercentage], // Porcentajes
  };

  return (
    <View style={styles.container}>
      <Text style={styles.amountText}>{totalAmount} ARS</Text>
      <Text style={styles.labelText}>TOTAL EN BILLETERA</Text>
      <ProgressChart
        data={data}
        width={screenWidth}
        height={220}
        strokeWidth={16}
        radius={32}
        chartConfig={{
          backgroundColor: '#000',
          backgroundGradientFrom: '#000',
          backgroundGradientTo: '#000',
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        }}
        hideLegend={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
    height: '100%',
  },
  amountText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginVertical: 10,
  },
  labelText: {
    fontSize: 16,
    color: '#fff',
    marginVertical: 5,
  },
});

export default GradientChartHome;
