import React,{useState} from 'react'
import {Button, Input} from "antd"
import "../../styles/Login.css"
import Logo from "../../assets/icons/logo.png"
import {field,btn} from "./styles"


export default function Login() {
    const [LoginFields, setLoginFields] = useState({username:"",password:""})
    
    const HandleChange=(e)=>{
        setLoginFields({...LoginFields,[e.target.name]:e.target.value})
    }

    return (
        <div className="LoginRoot">
         <div className="LoginCard">

         <img src={Logo} className="LoginLogo"/>
         
         <Input 
         placeholder="Username" 
         name="usename" 
         onChange={HandleChange} 
         style={field}
         type="text"/>

         <Input 
         placeholder="Password" 
         name="password" 
         onChange={HandleChange} 
         style={field}
         type="password"/>   

         <Button 
         style={btn}
         onClick={()=>console.log(LoginFields)}>Login</Button>
         </div>
        </div>
    )
}
