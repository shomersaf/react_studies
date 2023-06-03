import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import deleteExpense from '../../../../servise/deleteExpense';


export default function DataViewContainer(props:any){
    return(
    <div className="dataDiv">
    <h3>expenses list</h3>
    <DataTable value={props.all} 
         tableStyle={{ minWidth: '50rem' }}>
    <Column field="date"   header="Date"></Column>
    <Column field="name" header="Name"></Column>
    <Column field="category"   header="Category"></Column>
    <Column field="amount"  header="Amount"></Column>
    <Column header="Actions" body={(data, props) => 
    <div> 
        <Button icon="pi pi-times" rounded severity="danger" 
                onClick={() => {
                    console.log("delete: " + props.rowIndex + data.name);
                    deleteExpense(data.name)
                }
            }/>
    </div>
}>                
</Column>
   
</DataTable>
    </div>
    )
}