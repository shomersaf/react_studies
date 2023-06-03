import axios from "axios";

export default async function registrateUser(props:any): Promise<any> {
  const url="http://localhost:3600";

    const user={
      email:props.email,
      password:props.password,
      firstName: props.firstName,
      lastName: props.lastName,
    }
    console.log(`${user.email} works`)
    try{
      const result = await axios.post(`${url}/register`, user);
      alert(`${user.email} registration result: ${result?.data?.message}`); 
      return result.data
    }
    catch(error){
     console.log(error)
    }
  }