import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Calendar } from 'primereact/calendar';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { useState } from 'react';


export default function FormContainer(props: any) {
  const [textValue, setTextValue] = useState<string>("");
  const [numValue, setNumValue] = useState<number>();
  const [date, setDate] = useState<Date>();
  const [selectedCategory, setSelectedCategory] = useState<any>();
 
  function handler() {
  
    props.onSave({
      date: new Date(date as any),
      amount: numValue,
      name: textValue,
      category:selectedCategory.category,
    });
  }

  return (
    <div className="formDiv">
      <h3>add an expense</h3>
      <div className="formDiv">
        <div className="form">
          <InputText placeholder={"title"} value={textValue} onChange={(e) => setTextValue(e.target.value)}/>
          <InputNumber placeholder={"$ amount"} value={numValue} onValueChange={(e) => setNumValue(e.value as number)} />
          <Calendar placeholder={"date"} value={date} onChange={(e) => setDate(e.value as Date)} showIcon />
          <Dropdown value={selectedCategory} options={props.categories} optionLabel="category" showClear placeholder="Select a Category"
            filter className="w-full md:w-14rem"  onChange={(e) => {setSelectedCategory(e.value)}} />
         
      
        <Button label="Add" icon="pi pi-check" rounded onClick={handler} /></div>
      </div>
    </div>
  )
}