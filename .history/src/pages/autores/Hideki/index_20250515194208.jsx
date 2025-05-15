import { useState } from "react";
import "./styles.css";

const Hideki = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [regioes, setRegioes] = useState([])

    return (
        <>
            <div>
                Ola, eu sou <span className="nome">{name}</span>
            </div>
            <div>

                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
        </>
    )
}

export default Hideki;