import React from "react";
import { GradientPieChart } from "./GradientPieChart/GradientPieChart";

export default function HomeChart({ moneyId }: any) {
  return <GradientPieChart moneyId={moneyId} />;
}
