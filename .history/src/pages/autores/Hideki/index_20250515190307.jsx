import { useState } from "react";
import "./styles.css";

export default function Hideki() {
    const [name, setName] = useState("")

    return (
        <>
            <div>
                Ola, eu sou <span className="nome">{name}</span>
            </div>
            <input 
                type="text"
                value={name}
                
            />
        </>     
    )
}