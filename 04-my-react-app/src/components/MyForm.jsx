import { useState } from "react";

function MyForm() {
    const [name, setName] = useState("");

    function handleChange(e) {
        setName(e.target.value);
    }

    return (
        <form>
            <input type="text" 
            placeholder="Enter your name"
            value={name} 
            onChange={handleChange}
            />
            <p>Current Value: {name} </p>
        </form>
    )
}

function MyFormSubmit() {

    const [name, setName] = useState("");

    function handleChange(e) {
        setName(e.target.value);
    }

    function onSubmit(e) {
        e.preventDefault(); // does not refresh the page (browser)
        alert(name); 
    }

    return (
        <form onSubmit={onSubmit}>
            <input type="text"
            placeholder="Enter your name"
            value={name}
            onChange={handleChange}
            />
            <input type="submit" />

        </form>
    )
}

function TextArea() {

    const [mytxt, setMytxt] = useState("");

    function handleChange(e) {
        setMytxt(e.target.value);
    }

    return (
        <form>
            <textArea placeholder="Enter your text here" 
            value={mytxt} 
            onChange={handleChange}
            />
            <p>Current value: {mytxt}</p>
        </form>
    )
}

function FormSelected() {

    const [selectedCar, setSelectedCar] = useState("Volvo");

    function handleChange(e) {
        setSelectedCar(e.target.value);
    }

    return (
        <form>
            <select value={selectedCar} onChange={handleChange}>
                <option>Ford</option>
                <option>Volvo</option>
                <option>Fiat</option>
            </select>
        </form>
    )
}


export { MyForm, MyFormSubmit, TextArea, FormSelected };