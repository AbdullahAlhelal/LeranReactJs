import logo from "./logo.svg";
import "./App.css";
import MyFirstCommpnant from "./MyFirstCommpnant";
import Header from "./Header";
import MyForm from "./Myform";
import Post from "./Post";

import { useState } from "react";
import MyInput from "./myinput.js";

function App() {
  const [DeivceNameToaddinput, SetDeivceNameToadd] = useState("");

  const [devices, Setdevices] = useState([
    "iphone",
    "andriod",
    "samsung",
    "windows",
  ]);

  const deviceslist = devices.map((item) => {
    return <li>{item} </li>;
  });

  function handelClieck() {
    const newarray = [...devices];
    debugger;
    newarray.push(DeivceNameToaddinput);
    Setdevices(newarray);
  }

  return (
    <div className="App" style={{ marginTop: "10px", fontSize: "1rem" }}>
      <ul>{deviceslist}</ul>
      <input
        value={DeivceNameToaddinput}
        onChange={(event) => {
          SetDeivceNameToadd(event.target.value);
        }}
      ></input>
      <button onClick={handelClieck}>add </button>
    </div>
  );
}

export default App;
