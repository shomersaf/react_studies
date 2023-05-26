import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

export default function DataViewContainer(props:any){
 
    return(
    <div className="dataDiv">
    <h3>expenses list</h3>
    <DataTable value={props.all} tableStyle={{ minWidth: '50rem' }}>
    <Column field="date" header="Date"></Column>
    <Column field="name" header="Name"></Column>
    <Column field="category" header="Category"></Column>
    <Column field="amount" header="Amount"></Column>
</DataTable>
    </div>
    )
}