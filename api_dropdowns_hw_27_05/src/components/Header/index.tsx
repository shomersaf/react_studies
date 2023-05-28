export default function Header(props:any){
return(
     <>
     <h1>{props.headerText}</h1>  
     <p>NOTE: Expense form functionality doesn't add a new data to server yet. So deleting is still supplied properly only for data received from API server. It will be supported as soon as I know how to do it.</p>  </>
)
    
}