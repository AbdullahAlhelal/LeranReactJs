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
    { id: 1, Name: "iphone" },
    { id: 2, Name: "andriod" },
    { id: 3, Name: "samsung" },
    { id: 4, Name: "windows" },
  ]);
  function handelDaleteitem(id) {
    const newarray = [...devices];

    console.log("length" + newarray.length);

    const delleteitem = newarray.filter((x) => x.id != id);

    alert(id);
    Setdevices([...delleteitem]);
  }

  const deviceslist = devices.map((item) => {
    return (
      <li key={item.id}>
        {item.Name}{" "}
        <button
          onClick={() => {
            handelDaleteitem(item.id);
          }}
        >
          {" "}
          Delete{" "}
        </button>
      </li>
    );
  });

  function handelClieck(id) {
    // const newarray = [...devices];
    // debugger;
    // console.log("length" + newarray.length);
    // newarray.push(DeivceNameToaddinput);
    Setdevices([...devices, { id: counter, Name: DeivceNameToaddinput }]);
    counter = counter + 1;

    console.info([...devices]);
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
