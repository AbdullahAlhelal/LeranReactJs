import { useState } from "react";

export default function MyForm() {
  // const [nameinput, setNameinput] = useState("");
  // const [emailinput, setEmailinput] = useState("");
  const [formunput, setforminput] = useState({
    name: "",
    email: "",
    age: "",
    Genralinfo: "tes",
    isstudent: false,
    county: "",
    status: "",
  });
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log(formunput);
      }}
    >
      <label> Name:</label>
      <input
        value={formunput.name}
        onChange={(event) => {
          const newforminput = { ...formunput };
          newforminput.name = event.target.value;
          setforminput(newforminput);
        }}
      ></input>
      <hr />
      <label> Email:</label>
      <input
        value={formunput.email}
        onChange={(event) => {
          // const newforminput = { ...formunput };
          // newforminput.email = event.target.value;
          // setforminput(newforminput)

          setforminput({ ...formunput, email: event.target.value });
        }}
      ></input>
      <hr />
      <input
        value={formunput.age}
        onChange={(event) => {
          const newforminput = { ...formunput };
          newforminput.age = event.target.value;
          setforminput(newforminput);
        }}
      ></input>
      <hr />
      <label>Genral info</label>
      <textarea
        onChange={(event) => {
          setforminput({ ...formunput, Genralinfo: event.target.value });
        }}
      >
        {formunput.Genralinfo}
      </textarea>
      <hr />
      <select
        value={formunput.county}
        onChange={(event) => {
          setforminput({ ...formunput, county: event.target.value });
        }}
      >
        <option>Ksa</option>
        <option>Egypt</option>
        <option>Syria</option>
      </select>
      <hr />
      <div>
        <input
          value={"student"}
          type="radio"
          radioGroup="Groupname"
          checked={formunput.status == "student"}
          onChange={(event) => {
            setforminput({ ...formunput, status: event.target.value });
          }}
        />
        student
        <input
          value={"Tetcher"}
          type="radio"
          radioGroup="Groupname"
          checked={formunput.status == "Tetcher"}
          onChange={(event) => {
            setforminput({ ...formunput, status: event.target.value });
          }}
        />
        Tetcher
      </div>
      <hr />
      <button type="submit" onSubmit={console.info({ ...formunput })}>
        {" "}
        Sumbit
      </button>
    </form>
  );
}
