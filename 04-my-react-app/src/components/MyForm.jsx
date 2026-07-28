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

export { MyForm, MyFormSubmit };