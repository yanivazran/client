
import React ,{ useEffect,useState }from "react";
import Login from "./login";
import { SignUp } from "./signup";




export default function AuthPage() {

  const [authMode, setAuthMode] = useState("login")


  const changeAuthMode = () => {  
      setAuthMode(authMode === "login" ? "signup" : "login")   
}
  

  if(authMode === "login") 
    return (
      <div className="Auth-form-container">
        <Login setMode = {changeAuthMode}/> 
      </div>
    )
  else return (
      <div className="Auth-form-container">
        <SignUp setMode = {changeAuthMode}/>
      </div>
  )


    
}

