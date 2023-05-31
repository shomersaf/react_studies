
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';  
import loginUser from '../../../servise/loginUser';
import { useState } from 'react';



export default function Login(){
    const [userEmail, setUserEmail] = useState<string>("");
    const [userPassword, setUserPassword] = useState<string>("");
  

    function handler(props:any){
        props.userData = {
            email: userEmail,
            password: userPassword,
            };
        // console.log(props.userData)
        loginUser(props.userData)
    }
    return (
    <div className="container">
    <h1>Log in</h1> 
    <div className="loginInputs">
    <InputText key="userEmail" placeholder="Email" value={userEmail}  onChange={(e) => setUserEmail(e.target.value as string)} />
    <InputText key="userPassword" type="password" placeholder="Password" value={userPassword}  onChange={(e) => setUserPassword(e.target.value as string)} />
    <div className="btnDiv"><Button label="Log in" icon="pi pi-check" rounded onClick={handler} /></div>
    
        </div>  
    </div>
    )
}