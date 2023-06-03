import { ProgressSpinner } from "primereact/progressspinner";
export default function WithLoading(props: { isLoading:boolean, children:any }){
        if(props.isLoading) return <ProgressSpinner   pt={{
          circle: { style: { color: 'lime', strokeWidth: 6, fill: 'transparent' } }
      }} style={{width: '40px', height: '40px' }}/>
        else return props.children
      }
