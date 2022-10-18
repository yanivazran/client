
import React, { useEffect, useState } from "react";
import axios from 'axios';
import PrintJsonToTable from "./printTest";

const sampleJSON = {

    "name": "Pluralsight",
    "number": 1,
    "address": "India",
    "website": "https://www.pluralsight.com/"
  
}

export default function HubspotRecordList() {
  const [contact ,setContact] = useState([])

  var test;

   async function handleClick  ()  {
    test = await axios( 'http://localhost:3001/root' ); 
    console.log("this is test =",test.data);
    setContact(test.data);
  };

  
  console.log("this is contact = ",contact);

  return (
    <div>
    <button type="button" onClick={handleClick}>
      Get contact
    </button>
    <div>
      <PrintJsonToTable json = {contact} />
    </div>
  </div>
  );
}

/*

  var test;

  useEffect(() => {
    async function getContact() {
      test = await axios( 'http://localhost:3001/root' ); 
      console.log("this is test",test.data);
      setContact(test.data);
    } 
    getContact();
  
    return;
  }, []);

  if(contact)
  {
    console.log("this is contact",contact);
    console.log("this is samplejson",sampleJSON);
    
  }
  
*/