import { useState } from "react";

const Input = () => {

    const [inputValue, setInputValue] = useState('');
    return (
        <input
            type="text"
            onChange={(e) => setInputValue}
        />
    );
}

export default Input;