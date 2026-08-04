import logo from "./logo.svg";
import "./App.css";
import MyFirstCommpnant from "./MyFirstCommpnant";
import Header from "./Header";
import Side from "./SideMenu";
import Post from "./Post";
import Artical from "./Artical";
import SideMenu from "./SideMenu";
const ShowCatogey = true;
function App() {
  const tasks = [
    { id: 1, title: "doing smoe thing" },
    { id: 2, title: "read course" },
    { id: 3, title: "studing" },
    { id: 4, title: "Celaning" },
    { id: 5, title: "studing" }];
  const mytask = tasks.map((task) => {
    return (<li key={task.id} style={{ background: "red" }}> {task.title}  </li >)
  })
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
        <div>
          <ul>
            {mytask}


          </ul>
        </div>

      </header >
    </div >
  );
}
function AppSideMenu() {
  if (ShowCatogey) {
    return <SideMenu />
  }
  else return <div></div>
}
export default App;
