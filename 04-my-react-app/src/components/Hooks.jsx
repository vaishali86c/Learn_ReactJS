import { useState, useEffect, useContext, createContext, useRef } from "react";

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

// React Context
const UserContext = createContext();

function Component1() {

    const [user, setUser] = useState("John");

    return (
        <UserContext.Provider value={user}>
            <h1>{`Hello ${user}!`}</h1>
            <Component2 />
        </UserContext.Provider>
    )
}

function Component2() {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 />
    </>
  );
}

function Component3() {
  const user = useContext(UserContext);

  return (
    <>
      <h1>Component 3</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}

// useRef

function PriceTracker({ currentPrice }) {
  const prevPriceRef = useRef(currentPrice);

  useEffect(() => {
    prevPriceRef.current = currentPrice; // Silent update after render
  });

  const previousPrice = prevPriceRef.current;

  return (
    <div>
      <p>Current Price: ₹{currentPrice}</p>
      <p>Previous Price: ₹{previousPrice}</p>
      <p>{currentPrice > previousPrice ? "📈 Increased" : "📉 Decreased"}</p>
    </div>
  );
}



export { FavoriteColor, Counter, Component1, PriceTracker, WithCallbackExample } 