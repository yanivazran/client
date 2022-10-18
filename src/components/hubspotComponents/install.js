
import React, { useState } from "react";
import axios from 'axios';


export default function HubspotInstaller() {
  //store url recived from server and indicate if url recived
  const [data, setUrl] = useState({
     url : "",              //need to learn and switch to URL Object !!!!!!!!!!!!!!!!
     urlRecived : false
  });
  
  //installer will fetch the url from server and update the states
  async function installer() { 
     const result = await axios( 'http://localhost:3001/install',  );       
     setUrl({url : result.data , urlRecived :true});
     };
 
  //if user choose to install redirct him to hubspot accounts  
  if(data.urlRecived)
     window.location.replace(data.url); 

  return (
     <div>  
       <p>in this page you will be redircted to hubspot to install the application on your account </p>
       <button onClick = {installer} >Click to install</button>      
     </div>
  );
}

