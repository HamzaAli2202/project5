import React, {useState} from "react";
import { FullName } from "./components/FullName";
import './components/common.css'
import { SalarySlip } from "./components/SalarySlip";



function App() {
  const[basic, setBasic]=useState(0);
  const[fname,setFname]=useState("");
  const[lname,setLname]=useState("");
  return (
    
    <div className="main">
      <input type="text"  placeholder="Enter First Name" onChange={(e)=>setFname(e.target.value)}/>
      <input type="text"  placeholder="Enter Last Name" onChange={(e)=>setLname(e.target.value)}/>
      <input type="number" placeholder="Enter Your Basic Salary" onChange={(e)=> setBasic(Number(e.target.value))} />
      
      <FullName fname={fname} lname={lname} />
      <SalarySlip basic={basic} />
      <FullName fname="Anthony" lname="Dsouza" />
      <SalarySlip basic={basic} />
      <FullName fname="Raj" lname="Patil" />
      <SalarySlip basic={basic} />
    </div>
  );
}

export default App;
