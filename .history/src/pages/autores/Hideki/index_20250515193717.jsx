import { useState } from "react";
import "./styles.css";
import Input from "../../../components/Input";

const Hideki = () => {
    const [data, setData] = useState({
        name: '',
        email: ''
    })

    const handleValue = (fieldName, element) => {
        if (fieldName === 'name') {
            setName(element.target.value)
        }
    };

    return (
        <>
            <div>
                Ola, eu sou <span className="nome">{name}</span>
            </div>
            <Input id="name" />
            <Input id="email" />
        </>
    )
}

export default Hideki;