
import { useState } from "react"
export default function MyInput() {

    const [Myinputvalue, SetMyinputvalue] = useState("");

    function handelinputchange(event) {

        SetMyinputvalue(event.target.value);
    }
    return (<div>

        <label> your name </label>
        <input value={Myinputvalue} onChange={handelinputchange} />
    </div >)
}