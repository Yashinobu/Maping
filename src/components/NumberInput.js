// components/PhoneAuth.js
import { useState } from 'react';

export default function NumberInput({ lableName, onChange, min, max, cName }) {
    const [number, setNumber] = useState("")
    const [numberFlag, setNumberFlag] = useState(false)
    const [errorText, setErrorText] = useState("")

    const handleNumberChange = (e) => {

        const numberRegex = /^\s*[+-]?(\d+|\d*\.\d+|\d+\.\d*)([Ee][+-]?\d+)?\s*$/

        let isNumber = numberRegex.test(e)
        let numberValue = e.target.value
        let errorFlag = numberValue.length === 0 || parseFloat(numberValue) <= min || isNumber

        setNumber(numberValue)

        setNumberFlag(errorFlag)

        setErrorText(numberValue.length === 0 ? `The ${lableName} is required` : isNumber ? `The ${lableName} value is not matched number` : parseFloat(numberValue) <= min ? `The ${lableName} value is more than ${min}` : null)

        let numberValuefinal
        if (numberValue >= max) {
            setNumber(max)
            numberValuefinal = max
        } else {
            numberValuefinal = numberValue
        }
        onChange(numberValuefinal, errorFlag)
    }

    return (
        <div className={`flex flex-col gap-1 ${cName}`}>
            <label className="font-bold">{lableName}</label>
            <input
                type="text"
                value={number}
                onChange={handleNumberChange}
                placeholder={`Enter your ${lableName}`}
                className='rounded-md w-full border-solid border-[2px] px-2 py-1 border-[#DFDFDF]'
            />
            {numberFlag ? <label className="text-[10px] text-[#f30707]">{errorText}</label> : null}
        </div>
    );
};
