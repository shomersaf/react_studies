
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';  
//import loginUser from '../../../servise/loginUser';
import { useState} from 'react';
import axios from "axios";

export default function Login(){
    const [userEmail, setUserEmail] = useState<string>("");
    const [userPassword, setUserPassword] = useState<string>("");
    const [isLoging, setIsLoging] = useState<boolean>(false);

    function handler(props:any){
        props.userData = {
            email: userEmail,
            password: userPassword,
            };
            
            loginUser(props.userData); 
         
      
    }

    async function loginUser(props:any): Promise<any> {
        const url="http://localhost:3600";
      
        
          const user={
            email:props.email,
            password:props.password,
      
          }
          console.log(`${user.email} works`)
          try{
            setIsLoging(true); 
            const result = await axios.post(`${url}/login`, user);
            alert(`${user.email} login result: ${result.data.message}`);
            props.stopSpinner = false;
            setIsLoging(false); 
            return (result.data)
          }
          catch(error){
          console.log(error)
           alert(`Wrong entrance. Try again, please!`);
           setIsLoging(false); 
          }
         
        }
   
    return (
    <div className="container">
    <h1>Log in</h1> 
    <div className="loginInputs">
    <InputText key="userEmail" placeholder="Email" value={userEmail}  onChange={(e) => setUserEmail(e.target.value as string)} />
    <InputText key="userPassword" type="password" placeholder="Password" value={userPassword}  onChange={(e) => setUserPassword(e.target.value as string)} />
    <div className="btnDiv"> 
        <WithLoading isLoading={isLoging}>
        <Button label="Log in" icon="pi pi-check" rounded onClick={handler} />
       
        </WithLoading>
       
        </div>
        </div>  
    </div>
    )
}
function WithLoading(props: { isLoading:boolean, children:any }){
    if(props.isLoading) return <span>Loading...</span>
    else return props.children
  }
  