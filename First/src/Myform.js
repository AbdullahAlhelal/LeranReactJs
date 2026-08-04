import { useState } from "react"

export default function MyForm() {
    // const [nameinput, setNameinput] = useState("");
    // const [emailinput, setEmailinput] = useState("");
    const [formunput, setforminput] = useState({ name: "", email: "", age: "", Genralinfo: "tes", isstuednt: false });
    return <form onSubmit={(event) => { event.preventDefault(); console.log(formunput) }}>
        <label> Name:</label>
        <input value={formunput.name} onChange={(event) => {
            const newforminput = { ...formunput };
            newforminput.name = event.target.value;
            setforminput(newforminput)
        }}></input>
        <hr />
        <label> Email:</label>

        <input value={formunput.email} onChange={(event) => {
            // const newforminput = { ...formunput };
            // newforminput.email = event.target.value;
            // setforminput(newforminput)

            setforminput({ ...formunput, email: event.target.value })
        }}></input>
        <hr />

        <input value={formunput.age} onChange={(event) => {
            const newforminput = { ...formunput };
            newforminput.age = event.target.value;
            setforminput(newforminput)
        }}></input>
        <hr />
        <label>Genral info</label>
        <textarea onChange={(event) => { setforminput({ ...formunput, Genralinfo: event.target.value }) }}>{formunput.Genralinfo}</textarea>
        <hr />
        <label>stuednt</label>
        <input checked={formunput.isstuednt} type="checkbox" onChange={(event) => { setforminput({ ...formunput, isstuednt: event.target.checked }) }}></input>
        <hr />
        <button type="submit"> Sumbit</button>
    </form>
} 