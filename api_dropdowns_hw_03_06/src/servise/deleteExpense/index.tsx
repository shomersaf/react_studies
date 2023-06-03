import axios from "axios";
const url="http://localhost:3600"

export default async function deleteExpense(exName: any): Promise<any> {
    console.log(exName);
    const result = await axios.post(`${url}/delete-expense`, {
        name: exName,
      });
      alert(`${exName} ${result.data.message}`);
       window.location.reload();
      return (result.data)
  }