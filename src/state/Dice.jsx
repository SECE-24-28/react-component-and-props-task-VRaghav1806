import { useState } from "react"
export default function Dice() {
    const [dice, setDice] = useState(1);
    function Roll() {
        setDice(Math.floor(Math.random() * 6) + 1);
    }
    return (
        <div className="dice">
            <h1>Dice</h1>
            <h2>{dice}</h2>
            <button onClick={Roll}>Roll</button>
        </div>
    )
}
