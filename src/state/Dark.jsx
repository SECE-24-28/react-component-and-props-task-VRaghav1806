import { useState } from "react"
export default function Dark() {
    const [Dark, setDark] = useState(false);
    function ThemeChange() {
        setDark(!Dark);
    }
    return (
        <div style={{ backgroundColor: Dark ? "black" : "white", color: Dark ? "white" : "black" }}>
            <h1>{Dark ? "Dark" : "Light"}</h1>
            <button onClick={ThemeChange}>ThemeChange</button>
        </div>
    )
}