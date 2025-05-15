import { useState } from "react";
import "./styles.css";

const Hideki = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    return (
        <>
            <div>
                Ola, eu sou <span className="nome">{name}</span>
            </div>
            <Input
            <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
        </>
    )
}

export default Hideki;