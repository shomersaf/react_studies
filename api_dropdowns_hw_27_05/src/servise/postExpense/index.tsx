import axios from "axios";
const url="http://localhost:3600"
export default async function postExpense(expense: any): Promise<any> {
    const result = await axios.post(`${url}/expense`, expense);
      alert(`${expense.name} adding result: ${result.data.message}`);
      window.location.reload();
      return (result.data)
  }