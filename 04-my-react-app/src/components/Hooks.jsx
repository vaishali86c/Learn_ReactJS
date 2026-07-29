import { useState, useEffect } from "react";

// useState 
function FavoriteColor() {

    const [color, setColor] = useState("red");

    return (
        <>
            <h1>My favorite color is {color}!</h1>
            <button
                type="button"
                onClick={() => setColor("blue")}
            >Blue</button>
        </>
    )
}

// useEffect
// Here is an example of a useEffect Hook that is dependent on a variable. 
// If the count variable updates, the effect will run again:

function Counter() {

    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);

    useEffect(() => {
        setCalculation(() => count * 2);
    }, [count]);

    return (
        <>
            <p>Count: {count}</p>
            <button onClick={() => setCount((c) => c + 1)}>+</button>
            <p>Calculations: {calculation}</p>
        </>
    )
}

export { FavoriteColor, Counter } 