import "./MyFirstCommpnant.css";
export default function MyFirstCommpnant() {
  const person = {
    name: "abdullah",
    emil: "abdullah@gmaul.com",
  };
  const emlemt = {
    background: "red",
  };
  return (
    <div>
      <button className={"active"}> click me</button>

      <h1 className={person.name === "abdullah" ? "ValidName" : "InValidName"}>
        {" "}
        check Name
      </h1>
    </div>
  );
}
