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
  const posts = [
    { id: 1, postName: "Academ", postBody: "PostBody" },
    { id: 2, postName: "اكاديمية", postBody: "المحتوى" },
    {
      id: 3, postName: "اكاديمية", postBody: "المحتوى"
    }
  ];
  const postlist = posts.map((item) => { return <Post postName={item.postName} postBody={item.postBody}></Post> })
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
              {postlist}
            </div>
            <SideMenu />
          </div>
        </div>
      </header >
    </div >
  );
}

export default App;
