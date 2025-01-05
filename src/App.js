import './App.css';
import { useState, useEffect, use } from "react";
import Person from './Components/Person';
import Item from './Components/Item';

function App() {
// const [inpData, setInpData] = useState("");
// const takeData = (e) =>{
  // console.log(e.target.value);
//   setInpData(e.target.value)
  
// }
// const showData = () =>{
//   console.log(inpData);
//   setInpData("")
  
// }
  return (
   <div>
      {/* <input value={inpData} onChange={takeData} type='text' />
      <button onClick={showData}>Show data</button> */}
   {/* <Person /> */}
   <Item />
   </div>
  );
}

export default App;
