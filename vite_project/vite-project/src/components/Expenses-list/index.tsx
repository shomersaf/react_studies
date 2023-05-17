import data from '../data/data.tsx';
// import Unit from '../Unit/index.tsx';
import { useState } from "react";


export default function ExpensesList (){
   
    let [allData, setData] = useState(data);  
    
    
    let oneToDelete ="";

  

    function deleteUnit(oneToDelete:any){
        const newData = allData.filter((u)=>u.name !== oneToDelete);
        setData(newData);
      
    }
     
   
    return(
        <div>
            <h2>Expences List</h2>
            {allData.map((item)=>{return(
                <div key={item.name} className="expensesListItem">
                    <h3>
                {item.name}
            </h3>
            <div className="dataDiv">
                <div className="leftDiv">
                    <div>{item.date.toLocaleString()}</div>
                    <div className={item.amount>1000?"highExpense":"lowExpense"}>{item.amount>1000?"high Expense":"low Expense"}</div>
                    <div className="category">{item.category}</div>
                </div>
                <div className="rightDiv">
                    <div><strong>${item.amount}</strong></div>

                    <button className="junkButton" onClick ={()=>{oneToDelete = item.name; deleteUnit(oneToDelete)}}> <img src="\src\assets\junk-box-svgrepo-com.svg" alt="junk icon" /></button>


                </div>
            </div>
                    </div>
            )     
            })}
        </div>
        )
        
}
