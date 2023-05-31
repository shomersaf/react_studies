import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';  
 import registrateUser from '../../../servise/registrateUser';
import { useState } from 'react';

export default function Register(){
    const [userEmail, setUserEmail] = useState<string>("");
    const [userPassword, setUserPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
   

    function handler(props:any){
      function validatePassword () {
           if (userPassword!==confirmPassword){
            alert("wrong password entered!")
            
        }else{
           
            registrateUser(props.userData)
           
        }
          
        }

        props.userData = {
            email: userEmail,
            password: userPassword,
            firstName: firstName,
            lastName: lastName,
            };

            validatePassword();

       
    }


  

    return (
        <div className="container">
        <h1>Registration</h1> 
        <div className="loginInputs registration">
        <InputText key="userEmail" placeholder="Email" value={userEmail}  onChange={(e) => setUserEmail(e.target.value as string)} />
        <InputText key="userPassword" type="password" placeholder="Password" value={userPassword}  onChange={(e) => setUserPassword(e.target.value as string)} />
        <InputText key="regConfirmPassword" type="password" placeholder="Confirm your pasword" value={confirmPassword}  onChange={(e) => setConfirmPassword(e.target.value as string)} />
        <InputText key ="regFirstName" type="text" placeholder="First Name"  value={firstName}  onChange={(e) => setFirstName(e.target.value as string)}/>
        <InputText key="regLastName" type="text" placeholder="Last Name"  value={lastName}  onChange={(e) => setLastName(e.target.value as string)} />
        <div className="btnDiv"><Button label="Registrate" icon="pi pi-check" rounded onClick={handler} /></div>
        
            </div>  
        </div>
        )
}