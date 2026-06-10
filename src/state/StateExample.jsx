import { useState } from "react";

export default function StateExample() {
    const [count, setCount] = useState(10);
    function Increment() {
        setCount(count + 1);
    }
    function Decrement() {
        setCount(count - 1);
    }
    return (
        <div>
            <h1>SpringBoot</h1>
            <h2>Count:{count}</h2>
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
        </div>
    );
}