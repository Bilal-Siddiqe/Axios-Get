import React, { useState } from "react";
import axios from 'axios';
import Products from "./components/Products";

function App() {

  return (
    <div className="App container">
      <Products />
    </div>
  );
}
export default App;



  // let data = { Name: "", Age: 0 }
  // const [inputData, setInputData] = useState(data)


  // function handleChange(e) {
  //   setInputData({ ...inputData, [e.target.name]: e.target.value })
  // }

  // function Func(e) {
  //   e.preventDefault();
  //   console.log(inputData);
  //   axios.post("https://jsonplaceholder.typicode.com/users", inputData).then((item) => { console.log(item) })
  // }


// Name :<input id="input" name="Name" value={inputData.Name} onChange={handleChange} />
// Age : <input id="input" name="Age" value={inputData.Age} onChange={handleChange} />
// <button onClick={Func}> Submit </button>