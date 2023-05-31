import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';  

export default function Register(){
    return (
        <div className="container">
        <h1>Registration</h1> 
        <div className="loginInputs registration">
        <InputText key="regEmail" type="email" placeholder="Email" />
        <InputText key="regPassword" type="password" placeholder="Password" />
        <InputText key="regConfirmPassword" type="password" placeholder="Confirm your pasword" />
        <InputText key ="regFirstName" type="text" placeholder="First Name" />
        <InputText key="regLastName" type="text" placeholder="Last Name" />
        <div className="btnDiv"><Button label="Registrate" icon="pi pi-check" rounded /></div>
        
            </div>  
        </div>
        )
}