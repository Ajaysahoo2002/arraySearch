import { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState("");
  const API = ["Newton", "Newton School", "Node", "Mongoose", "Angular", "Netflix", "React", "Preact", "Apple", "Meta", "School", "Microsoft"];
  return (
    <div className="App">
      <p>Search</p>
      <input type="search" name="search" id="search-input" value={input} placeholder="Search here..." onChange={(e) => { setInput(e.target.value) }} />
      <p>Results</p>
      <div>
        {API.filter((elem) => {
        return input.toLocaleLowerCase() === "" ? "" : elem.toLocaleLowerCase().includes(input);
        
      }).map((elem) => {
        return <li>{elem}</li>
      })}</div>
    </div>

  );
}

export default App;
