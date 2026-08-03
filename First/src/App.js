import logo from "./logo.svg";
import "./App.css";
import MyFirstCommpnant from "./MyFirstCommpnant";
import Header from "./Header";
import Side from "./SideMenu";
import Post from "./Post";
import Artical from "./Artical";
function App() {
  const fisrtartical = "asfasfasfffffffffffffffffffffffffffffasfegfwegwegweg";
  const secandartical = "asfasfasfffffffffffffffffffffffffffffasfegfwegwegweg";
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
        <Artical
          content={fisrtartical}
          personname="ahmad"
          email="ahmad@gmail.com"
        >
          <h1> test</h1>
        </Artical>
        <Artical
          content={secandartical}
          personname="abdullah"
          email="ahmad@gmail.com"
        />
        <Artical personname="mus" email="ahmad@gmail.com" />
      </header>
    </div>
  );
}

export default App;
