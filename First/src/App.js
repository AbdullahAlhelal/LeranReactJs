import logo from "./logo.svg";
import "./App.css";
import MyFirstCommpnant from "./MyFirstCommpnant";
import Header from "./Header";
import MyForm from "./Myform";
import Post from "./Post";

import MyInput from "./myinput.js";

function App() {
  const posts = [
    { id: 1, postName: "Academ", postBody: "PostBody" },
    { id: 2, postName: "اكاديمية", postBody: "المحتوى" },
    {
      id: 3,
      postName: "اكاديمية",
      postBody: "المحتوى",
    },
  ];
  const postlist = posts.map((item) => {
    return <Post postName={item.postName} postBody={item.postBody}></Post>;
  });
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
        <MyForm />
      </header>
    </div>
  );
}

export default App;
