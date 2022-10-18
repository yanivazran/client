import React, { useEffect, useState } from "react";

import MongoNavbar from "./navbar";



export default function MongoApi() {

 // This following section will display the table with the records of individuals.
 return (
  
  <div>
        <h3>Mongo api</h3>
    <div>         
            <MongoNavbar/>
    </div>

     <div>
        <p>this api can make crud operations for MongoDB</p>
     </div>
  </div>
 );
}