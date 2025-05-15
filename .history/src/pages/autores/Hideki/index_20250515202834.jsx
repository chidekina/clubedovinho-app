import { useEffect, useState } from "react";
import "./styles.css";

const Hideki = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [regions, setRegions] = useState([]);

    const getKey = (key) => {
        
    }

    useEffect(() => {
        const url = 'https://servicodados.ibge.gov.br/api/v1/localidades/regioes';

        fetch(url)
            .then(res => res.json())
            .then(data => setRegions(data));
    }, []);
    useEffect(() => {
        let region = document.querySelectorAll()
        let url = 'https://servicodados.ibge.gov.br/api/v1/localidades/regioes/3/estados';

        fetch(url)
            .then(res => res.json())
            .then(data => setRegions(data));
    }, []);

    return (
        <div id="container">
            <div id="personal-data">
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
            <div id="regions">
                {/* <input
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
                            document.getElementById("new-region").value = "";
                        }
                    }}
                /> */}
                <select>
                    {regions.map(regiao=> <option key={regiao.id} onChange={}>{regiao.nome}</option>)}
                </select>
                <select>

                </select>
            </div>
        </div>
    )
}

export default Hideki;