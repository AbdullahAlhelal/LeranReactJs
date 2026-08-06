import logo from "./logo.svg";
import "./App.css";
import LoanForm from "./LoanForm";
import { useContext } from "react";
import { UserContext } from "./context/UserContext";
function App() {
  return (

    <UserContext.Provider value={{ name: "abdullah Al", userName: "abd20", Email: "abdullah@.com" }}>
      <div className="App" style={{ marginTop: "250px" }}>
        <LoanForm />
      </div>
    </UserContext.Provider>
  );
}

export default App;
