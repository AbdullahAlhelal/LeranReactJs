import logo from "./logo.svg";
import "./App.css";
import MyFirstCommpnant from "./MyFirstCommpnant";
import Header from "./Header";
import MyForm from "./Myform";
import Post from "./Post";

import { useState } from "react";
import MyInput from "./myinput.js";
let counter = 5;
function App() {
  const [DeivceNameToaddinput, SetDeivceNameToadd] = useState("");

  const [devices, Setdevices] = useState([
    { id: 1, name: "iphone" },
    { id: 2, name: "andriod" },
    { id: 3, name: "samsung" },
    { id: 4, name: "windows" },
  ]);
  function HandelDeleteItem(id) {
    const itemWithoutDelete = devices.filter((x) => x.id !== id);
    Setdevices(itemWithoutDelete);

  }

  function HandeleditItem(id) {
    const newarray = devices.map((device) => {
      if (device.id === id) {
        let newdevice = { ...device, name: DeivceNameToaddinput }
        return newdevice;
      } else
        return device;
    });
    // debugger;
    // newarray.push(DeivceNameToaddinput);
    Setdevices(newarray);

  }
  const deviceslist = devices.map((item) => {
    return <li key={item.id} >{item.name} <button onClick={() => HandelDeleteItem(item.id)}> delete</button>
      <button onClick={() => HandeleditItem(item.id)}> edit</button></li>;
  });

  function handelClieck() {
    // const newarray = [...devices];
    // debugger;
    // newarray.push(DeivceNameToaddinput);
    // Setdevices(newarray);
    Setdevices([...devices, { id: counter, name: DeivceNameToaddinput }]);
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
