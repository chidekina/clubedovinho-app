import { useEffect, useState } from "react";
import "./styles.css";

const Hideki = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [regions, setRegions] = useState([
        'Nordeste',
        'Sudeste'
    ])

    coonst url = 'https://servicodados.ibge.gov.br/api/v1/localidades/distritos';

    useEffect()
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
                <input
                    type="text"
                    id="new-region"
                    placeholder="Digite a região"
                />
                <input
                    type="button"
                    value="Inserir região"
                    onClick={() => {
                        const newRegion = document.getElementById("new-region").value;
                        if (newRegion && !regions.includes(newRegion)) {
                            setRegions([...regions, newRegion]);
                            document.getElementById("new-region").value = "";
                        } else {
                            alert("Entrada invalida")
                        }
                    }}
                />
                <ul>
                    {regions.map((regiao, i) => <li key={i + 1}>{regiao}</li>)}
                </ul>
            </div>
        </>
    )
}

export default Hideki;