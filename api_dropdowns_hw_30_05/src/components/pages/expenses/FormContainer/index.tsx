import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { useState, useEffect } from 'react';
import axios from "axios";
import WithLoading from '../../../WithLoading';

export default function FormContainer(props: any) {
  const [textValue, setTextValue] = useState<string>("");
  const [numValue, setNumValue] = useState<number>();
  const [selectedCategory, setSelectedCategory] = useState<any>();
  const [apiCategories, setApiCategories] = useState<any>();
  const [selectedYears, setSelectedYears] = useState<any>();
  const [apiYears, setApiYears] = useState<any>();
  const url="http://localhost:3600";
  const [areYearsLoading, setYearsLoading] =useState<boolean>(false);
 
  function handler() {
    props.onSave({
      date: apiYears.date.toString(),
      amount: numValue,
      name: textValue,
      category:apiCategories.category,
    });
  }

  async function getCategories() {
    try {
        const result = await axios.get(`${url}/categories`);
        const categories = result?.data.map((e: any) => {
            return {...e,category:e};
        });
       setApiCategories(categories)
        setSelectedCategory(categories)
    } catch (error) {
        console.log(error)
    } 
}

async function getYears() {
  try {  
      setYearsLoading(true); 
      const result = await axios.get(`${url}/years`);
      const years = result?.data.map((e: any) => {
          return {...e,date:e};
      });
      setApiYears(years)
      setSelectedYears(years)
      setYearsLoading(false); 
  } catch (error) {
      console.log(error)
  } 
}

useEffect(() => {
  getCategories()  
  getYears()  
}, []);

  return (
    <div className="formDiv">
      <h3>add an expense</h3>
      <div className="formDiv">
        <div className="form">
          <InputText placeholder={"title"} value={textValue} onChange={(e) => setTextValue(e.target.value)}/>
          <InputNumber placeholder={"$ amount"} value={numValue} onChange={(e) => setNumValue(e.value as number)} />
          <WithLoading isLoading={areYearsLoading}>
              <Dropdown value={apiYears} options={selectedYears} optionLabel="date" showClear placeholder="Select a Year"
            filter className="w-full md:w-14rem"  onChange={(e) => {setApiYears(e.value)}} />
</WithLoading>
              <Dropdown value={apiCategories} options={selectedCategory} optionLabel="category" showClear placeholder="Select a Category"
            filter className="w-full md:w-14rem"  onChange={(e) => {setApiCategories(e.value)}} />
        <Button label="Add" icon="pi pi-check" rounded onClick={handler} /></div>
      </div>
    </div>
  )
}

