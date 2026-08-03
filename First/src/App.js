import logo from "./logo.svg";
import "./App.css";
import MyFirstCommpnant from "./MyFirstCommpnant";
import Header from "./Header";
import Side from "./SideMenu";
import Post from "./Post";
function App() {
  return (
    <div className="App">
      <Header />
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* Post Continter && Side Menu */}
        <div style={{ display: "flex", width: "60%" }}>
          {/* Post Continter */}
          <div style={{ width: "70%" }}>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
          </div>
          <div style={{ width: "30%" }}>
            <Side />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
