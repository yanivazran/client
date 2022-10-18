import React from 'react';
import Table from 'react-bootstrap/Table';



const PrintKeysToThead = (props) => {
    return(
        <thead>
            <tr>               
                {props.keys.map((key,index) => <th key = {index}> {key}</th>)}            
            </tr>
        </thead>  
    )
}

const PrintValuesToTbody = (props) => {
    return(
        <tbody>
            <tr>                         
                { Object.keys(props.values).map((value,index) =>
                    <td key = {index}> {props.values[value]}</td>) }                 
            </tr>
        </tbody>
         
    )
}
 
export default function PrintJsonToTable(props) {
    if(!props.json)
        return (<p>this is an empty json!</p>)
  return(
    <Table striped>
            <PrintKeysToThead keys ={Object.keys(props.json)} />
            
    </Table>   
  )
}

/*
<PrintValuesToTbody values = {props.json} />
*/
