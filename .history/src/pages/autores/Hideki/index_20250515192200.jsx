import { useState } from "react";
import "./styles.css";

const Hideki = () => {
    const [name, setName] = useState("")

    return (
        <>
            <div>
                Ola, eu sou <span className="nome">{name}</span>
            </div>
            <input 
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)} 
            />
        </>     
    )
}