// components/PhoneAuth.js
import { Textarea } from '@nextui-org/react';
import { useState } from 'react';

export default function TextAreaInput({ lableName, onChange, cName }) {
    const [text, setText] = useState("")

    const handleTextChange = (e) => {

        let textValue = e.target.value

        setText(textValue)

        onChange(textValue)
    }

    return (
        <div className={`flex flex-col gap-1 ${cName}`}>
            <label className="font-bold">{lableName}</label>
            <textarea
                value={text}
                onChange={handleTextChange}
                rows='4'
                className='rounded-md w-full border-solid border-[2px] px-2 py-1 border-[#DFDFDF]'
            />
        </div>
    );
};
