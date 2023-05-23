import { Button } from 'primereact/button';
import Header from "./components/Header"
import { useState, useEffect, useRef } from "react";
import axios from "axios";
// import { Dropdown } from 'primereact/dropdown';
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { Toast } from 'primereact/toast';
import DataViewContainer from './components/DataViewContainer';
import FormContainer from './components/FormContainer';
import ReportsContainer from './components/ReportsContainer';
import { MultiSelect } from 'primereact/multiselect';
import { ProgressSpinner } from "primereact/progressspinner";
import Footer from './components/Footer';

function App() {
  const toast = useRef<any>(null);
  const [resValues, setValues] = useState<any>(null);
  const [resValue, setValue] = useState<any>(null);
  const [expenseButtonText, setExpenseButtonText] = useState<string>("Show Expense Form");
  const [reportButtonText, setReportsButtonText] = useState<string>("Show Reports");
  const [formVisible, setFormVisible] = useState<boolean>(false);
  const [reportsVisible, setReportVisible] = useState<boolean>(false);

 
  
  useEffect(() => {
      async function getExpenses() {
          try {
              const result = await axios.get("http://localhost:3500/expenses");
              const dataWithDates = result.data.map((e: any) => {
                  return { ...e, date: new Date(e.date).getFullYear() };
              });
              setValues(dataWithDates);
          } catch (error) {
              console.log(error)
              toast?.current?.show({
                  severity: error,
                  summary: "Something Went wrong",
                  detail: "Please try again",
              });

          } finally {
             
          }
      }

      getExpenses()
  }, []);

 

  return (
    <div className = "container">
      <Header headerText ={"Stacey's Expenses App"} />
      <div className="controlls">
            <Button severity="secondary" rounded onClick={()=>{setFormVisible((expenseButtonText==="Show Expense Form")?true:false); setExpenseButtonText(formVisible? "Show Expense Form" : "Hide Expense Form")}}><span>{expenseButtonText}</span></Button>
            <Button severity="secondary" rounded onClick={()=>{setReportVisible((reportButtonText==="Show Reports")?true:false); setReportsButtonText(reportsVisible? "Show Reports" : "Hide Reports")}}><span>{reportButtonText}</span></Button>
            <Toast ref={toast} />   
            <MultiSelect value={resValue} onChange={(e) => setValue(e.value)} options={resValues} optionLabel="category" 
    filter placeholder="Select Categories" maxSelectedLabels={3} className="w-full md:w-20rem" />  
     <MultiSelect value={resValue} onChange={(e) => setValue(e.value)} options={resValues} optionLabel="date" 
    filter placeholder="Select Year" maxSelectedLabels={3} className="w-full md:w-20rem" />  
            {/* <Dropdown value={resValue} options={resValues} onChange={(e) => setValue(e.value)} optionLabel="category" placeholder="Select a category" className="dropdown"/>
            <Dropdown value={resValue} options={resValues} onChange={(e) => setValue(e.value)} optionLabel="date" placeholder="Select a year" className="dropdown" /> */}
            </div>
            
           
            {formVisible? <FormContainer />: null}
            {reportsVisible? <ReportsContainer expenses={resValues}/>: null}
            {resValues?  <DataViewContainer  one={resValue} all={resValues} />:<ProgressSpinner /> }
           
         <Footer />
    
    </div>
  )
}

export default App
