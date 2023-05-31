
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';  
import loginUser from '../../../servise/loginUser';
import { useState } from 'react';



export default function Login(){
    const [userEmail, setUserEmail] = useState<string>("");
    const [userPassword, setUserPassword] = useState<string>("");
    const [isFilterYearsLoading, setFilterYearsLoading] =useState<boolean>(false);
    function handler(props:any){
        props.userData = {
            email: userEmail,
            password: userPassword,
            };
            setFilterYearsLoading(true)   
        loginUser(props.userData)
        setFilterYearsLoading(false)
    }
    
    return (
    <div className="container">
    <h1>Log in</h1> 
    <div className="loginInputs">
    <InputText key="userEmail" placeholder="Email" value={userEmail}  onChange={(e) => setUserEmail(e.target.value as string)} />
    <InputText key="userPassword" type="password" placeholder="Password" value={userPassword}  onChange={(e) => setUserPassword(e.target.value as string)} />
    <div className="btnDiv">
          <WithLoading isLoading={isFilterYearsLoading}>
        <Button label="Log in" icon="pi pi-check" rounded onClick={handler} />
         </WithLoading>
        </div>
    
        </div>  
    </div>
    )
}
function WithLoading(props: { isLoading:boolean, children:any }){
    if(props.isLoading) return  "Loading Rafi is developer"
    else return props.children
  }