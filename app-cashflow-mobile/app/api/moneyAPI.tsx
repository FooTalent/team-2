import axios from "axios";
const api = "https://cashflow20240803102917.azurewebsites.net";
export const getMoneyUser = async (id: string) => {
  const response = await axios.get(`${api}/money?Id=${id}`);
  return response.data;
};
export const movementAddEarn = async (movement: any) => {
  const response = await axios.post(
    `${api}/movimientos/nuevo-ingreso`,
    movement
  );
  return response.data;
};

export const movementAddExpenses = async (movement: any) => {
  const response = await axios.post(
    `${api}/movimientos/nuevo-gasto`,
    movement
  );
  return response.data;
}
export const addNewBudget = async (budget: any) => {
  const response = await axios.post(`${api}/presupuesto/create`, budget);
  return response.data;
}
export const getBudgets = async (id: number) => {
  const response = await axios.get(`${api}/presupuesto/presupuestos-del-usuario?Id=${id}`);
  return response.data;
}