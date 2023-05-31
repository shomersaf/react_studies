import axios from "axios";


export default async function loginUser(props:any): Promise<any> {
  const url="http://localhost:3600";
    const user={
      email:props.email,
      password:props.password,

    }
    console.log(`${user.email} works`)
    try{
      const result = await axios.post(`${url}/login`, user);
      alert(`${user.email} login result: ${result.data.message}`);
      return (result.data)
    }
    catch(error){
     console.log(error)
    }
   
  }