// components/PhoneAuth.js
import { useState } from 'react';

export default function SelectInput({ lableName, onChange, oValueArr, cName }) {

    const [sValue, setSValue] = useState(oValueArr[0].value)

    const [selectFlag, setFlag] = useState(false)
    const [errorText, setErrorText] = useState("")

    const handleChange = (e) => {
        setSValue(e.target.value)
        onChange(e.target.value, e.target.value === oValueArr[0].value)

        setFlag(e.target.value === oValueArr[0].value)
        setErrorText(e.target.value === oValueArr[0].value ? `The ${lableName} field is unselected.` : null)

    }

    return (
        <div className={`flex flex-col gap-1 ${cName}`}>
            <label className="font-bold">{lableName}</label>
            <select className="rounded-md w-full border-solid border-[2px] px-2 py-2 border-[#DFDFDF]" onChange={handleChange} value={sValue}>
                {oValueArr.map((item, index) => <option key={index} value={item.value}>{item.text}</option>)}
            </select>
            {selectFlag ? <label className="text-[10px] text-[#f30707]">{errorText}</label> : null}
        </div >
    );
};
