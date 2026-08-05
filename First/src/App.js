import logo from "./logo.svg";
import "./App.css";

import { useState } from "react";

let counter = 0;
function App() {

  function HandelCountPlus() {
    // setcounter(counter + 1);
    // setcounter(counter + 1);

    setcounter((x) => x + 1);
    setcounter((x) => x + 1);

  }

  let [counter, setcounter] = useState(0)
  return (
    <div className="App" style={{ marginTop: "10px", fontSize: "1rem" }}>
      <h1> the count  {counter}</h1>
      <button onClick={HandelCountPlus}>+</button>
    </div>
  );
}

export default App;
