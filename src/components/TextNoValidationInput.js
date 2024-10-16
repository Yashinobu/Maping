// components/PhoneAuth.js
import { useState } from 'react';

export default function TextNoValidationInput({ lableName, onChange, cName }) {
    const [text, setText] = useState("")
    const [textFlag, setTextFlag] = useState(false)
    const [errorText, setErrorText] = useState("")

    const handleTextChange = (e) => {

        let textValue = e.target.value
        let errorFlag = e.target.value.length === 0

        setText(textValue)

        setTextFlag(errorFlag)

        setErrorText(textValue.length === 0 ? `The ${lableName} is required` : null)

        onChange(textValue, errorFlag)
    }

    return (
        <div className={`flex flex-col gap-1 ${cName}`}>
            <label className="font-bold">{lableName}</label>
            <input
                type="text"
                value={text}
                onChange={handleTextChange}
                placeholder={`Enter your ${lableName}`}
                className='rounded-md w-full border-solid border-[2px] px-2 py-1 border-[#DFDFDF]'
            />
            {textFlag ? <label className="text-[10px] text-[#f30707]">{errorText}</label> : null}
        </div>
    );
};
