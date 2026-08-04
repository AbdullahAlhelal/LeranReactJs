import logo from "./logo.svg";
import "./App.css";
import MyFirstCommpnant from "./MyFirstCommpnant";
import Header from "./Header";
import MyForm from "./Myform";
import Post from "./Post";

import MyInput from "./myinput.js";

function App() {
  const devices = ["iphone", "andriod", "samsung", "windows"];
  const deviceslist = devices.map((item) => {
    return <li>{item} </li>;
  });
  return (
    <div className="App">
      <ul>{deviceslist}</ul>
    </div>
  );
}

export default App;
