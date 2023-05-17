import data from '../data/data.tsx';
import Unit from '../Unit/index.tsx';


export default function ExpensesList (){

    return(
        <div>
            <h2>Expences List</h2>
            {data.map((item)=>{return(
                <div key={item.name} className="expensesListItem">
                    <Unit iName={item.name} iDate = {item.date.toLocaleString()} iCategory={item.category} iAmount ={item.amount}/>
                    </div>
            )     
            })}
        </div>
        )
        
}


