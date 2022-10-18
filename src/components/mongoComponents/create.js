import React, {  useState } from "react";
import { useNavigate } from "react-router";



//=============================================//
export default function Create() {
 const [form, setForm] = useState({
   name: "",
   orderFromSun: 0,
   hasRings: false,
 });
 const navigate = useNavigate();
 
 // These methods will update the state properties.
 function updateForm(value) {

  //============ simple validation =================//
  var key = Object.keys(value)[0];
  if(key === "orderFromSun")
    value.orderFromSun = parseInt(value.orderFromSun);
  if(key === "hasRings")
    value.hasRings = (value.hasRings.toLowerCase() === "true")
  //============end of validation===================//


   return setForm((prev) => { 
    return { ...prev, ...value }; 
  } );
 }
 
 // This function will handle the submission.
 async function onSubmit(e) {
   e.preventDefault();
 
   // When a post request is sent to the create url, we'll add a new record to the database.
   const newPerson = { ...form };
 
   await fetch("http://localhost:3001/record/add", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(newPerson),
   })
   .catch(error => {
     window.alert(error);
     return;
   });
 
   setForm({ name: "", orderFromSun: "", hasRings: "" }); //need to check way using with async func
   navigate("/mongoApi/recordList");
 }
 
 // This following section will display the form that takes the input from the user.
 return (
   <div>
     <h3>Create New Record</h3>
     <form onSubmit={onSubmit}>
       <div className="form-group">
         <label htmlFor="name">Name</label>
         <input
           type="text"
           className="form-control"
           id="name"
           value={form.name}
           onChange={(e) => updateForm({ name: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="position">Position</label>
         <input
           type="text"
           className="form-control"
           id="orderFromSun"
           value={form.orderFromSun}
           onChange={(e) => updateForm({ orderFromSun: e.target.value })}
         />
       </div>
       <div className="form-group">
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="positionOptions"
             id="positionIntern"
             value="false"
             checked={form.hasRings === "true"}
             onChange={(e) => updateForm({ hasRings: e.target.value })}
           />
           <label htmlFor="positionIntern" className="form-check-label">Intern</label>
         </div>

       </div>
       <div className="form-group">
         <input
           type="submit"
           value="Create person"
           className="btn btn-primary"
         />
       </div>
     </form>
   </div>
 );
}