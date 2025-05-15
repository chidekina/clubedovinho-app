import { useState } from "react";
import "./styles.css";
import Input from "../../../components/Input";

const Hideki = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    return (
        <>
            <div>
                Ola, eu sou <span className="nome">{name}</span>
            </div>
            <Input id="name" />
            <Input id="email"
        </>
    )
}

export default Hideki;