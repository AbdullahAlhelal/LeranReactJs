import logo from "./logo.svg";
import "./App.css";
import MyFirstCommpnant from "./MyFirstCommpnant";
import Header from "./Header";
import Side from "./SideMenu";
import Post from "./Post";
import Artical from "./Artical";
import SideMenu from "./SideMenu";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div style={{ display: "flex" }}>
          <div style={{ display: "flex" }}>
            <div>
              <Post postName="Academ" postBody="PostBody" />
              <Post postName="Hello" postBody="Secand" />
              <Post postName="Academ" postBody="PostBody" />
              <Post postName="Academ" postBody="PostBody" />
              <Post postName="Academ" postBody="PostBody" />
              <Post />
            </div>
            <SideMenu />
          </div>
        </div>
      </header >
    </div >
  );
}

export default App;
