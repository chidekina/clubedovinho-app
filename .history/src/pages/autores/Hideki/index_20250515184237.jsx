import { useState } from "react";
import "./styles.css";

export default function Iasmin() {
    const [name, setName] = useState("")
    return (
        <>
            <div>
                Ola, eu sou <span className="nome">Fulano</span>
            </div>
            <input type="text">

            </input>
        </>
    )
}