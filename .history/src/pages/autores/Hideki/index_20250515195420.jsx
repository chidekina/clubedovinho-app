import { useState } from "react";
import "./styles.css";

const Hideki = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [regioes, setRegioes] = useState([
        'Nordeste',
        'Sudeste'
    ])

    return (
        <>
            <div>
                <p>Ola, eu sou <span className="data">{name}</span></p>
                <p>Email: <span className="data">{email}</span></p>
            </div>
            <div id="input-data">
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
            <div>
                <input type="text" />
                <input 
                type="button"
                 onSubmit={(e) => setRegioes([...regioes, e.target.value])} 
                 />
                <ul>
                    {regioes.map(regiao => <li>{regiao}</li>)}
                </ul>
            </div>
        </>
    )
}

export default Hideki;