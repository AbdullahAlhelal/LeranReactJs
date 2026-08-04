import { useState } from "react";

let defultname = "abdullah";



export default function MyButtonWithState() {
  console.log("render")

  const [name, setname] = useState(defultname);


  function buttonClicked() {
    if (name == "abdullah")
      setname("ahmad")
    else
      setname("abdullah")

  }

  return (
    <div>
      <button onClick={buttonClicked}  > click me</button>
      <h1>  {name}</h1>
    </div>
  );
}
