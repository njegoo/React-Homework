import { useState } from "react"

export const App = () => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");
  const [showTable,setShowTable]=useState(false);

  const toggleTable = () => {
    setShowTable(!showTable);
  };

  return (
    <div>
      <form action="#">
        <p>First name:</p>
        <input type="text" placeholder="First Name" value={firstName} onChange={(e)=>{setFirstName(e.target.value)}}/>
        <br />
        <p>Last name:</p>
        <input type="text" placeholder="Last Name" value={lastName} onChange={(e)=>{setLastName(e.target.value)}}/>
        <br />
        <p>Age:</p>
        <input type="number" value={age} onChange={(e)=>{setAge(e.target.value)}}/>
        <br />
        <p>E-mal:</p>
        <input type="e-mail" placeholder="abc@gmail.com" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
      </form>
      <br />


      <button onClick={toggleTable}>Click</button>
      
      
      <br />
      {showTable && <table border={1}>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>E-mail</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{age}</td>
            <td>{email}</td>
          </tr>
        </tbody>
      </table>}
    </div>
  )
}