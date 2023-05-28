import axios from "axios";
const url="http://localhost:3600"
export default async function deleteExpense(exName: any): Promise<any> {
    let str = Object.values(exName).toString()
    str= str.replace(/[\,%]/g, '')
    console.log(`exterminate ${str}!`);
    const result = await axios.post(`${url}/delete-expense`, {
        name: str,
      });
      alert(`${str} ${result.data.message}`);
      window.location.reload();
      return (result.data)
  }