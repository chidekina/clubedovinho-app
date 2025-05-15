import { useState } from "react";
import "./styles.css";
import Input from "../../../components/Input";

const Hideki = () => {


    return (
        <>
            <div>
                Ola, eu sou <span className="nome">{name.value}</span>
            </div>
            <Input id="name" />
            <Input id="email" />
        </>
    )
}

export default Hideki;