import { useState } from 'react';
import axios from 'axios';
import { useRouter } from "next/navigation";
import Datepicker from "tailwind-datepicker-react"
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import NumberInput from './NumberInput';
import SelectInput from './SelectInput';
import TextAreaInput from './TextAreaInput';
import TextNoValidationInput from './TextNoValidationInput';

export default function UserInfo({ pNumber, password, gender }) {

    const router = useRouter()

    const [nickname, setNickname] = useState("")
    const [birthday, setBirthday] = useState(new Date("1990-01-01"))
    const [birthdayFormat, setBirthdayFormat] = useState("")
    const [address, setAddress] = useState("")
    const [tall, setTall] = useState("")
    const [bType, setBType] = useState("")
    const [salary, setSalary] = useState("")
    const [selfIntro, setSelfIntro] = useState("")

    const [nicknameFlag, setNicknameFlag] = useState(false)
    const [birthdayFlag, setBirthdayFlag] = useState(false)
    const [addressFlag, setAddressFlag] = useState(false)
    const [tallFlag, setTallFlag] = useState(false)
    const [bTypeFlag, setBTypeFlag] = useState(false)
    const [salaryFlag, setSalaryFlag] = useState(gender === "1" ? true : false)

    const [btnFlag, setBtnFlag] = useState(false)

    const handleNicknameChange = (value, flag) => {
        setNickname(value)
        setNicknameFlag(!flag)
        setBtnFlag(!flag && birthdayFlag && addressFlag && tallFlag && bTypeFlag && salaryFlag)
    }

    const handleAddressChange = (value, flag) => {
        setAddress(value)
        setAddressFlag(!flag)
        setBtnFlag(nicknameFlag && birthdayFlag && !flag && tallFlag && bTypeFlag && salaryFlag)
    }

    const handleTallChange = (value, flag) => {
        setTall(value)
        setTallFlag(!flag)
        setBtnFlag(nicknameFlag && birthdayFlag && addressFlag && !flag && bTypeFlag && salaryFlag)
    }

    const handleSalaryChange = (value, flag) => {
        setSalary(value)
        setSalaryFlag(!flag)
        setBtnFlag(nicknameFlag && birthdayFlag && addressFlag && tallFlag && bTypeFlag && !flag)
    }

    const handleBTypeChange = (value, flag) => {
        setBType(value)
        setBTypeFlag(!flag)
        setBtnFlag(nicknameFlag && birthdayFlag && addressFlag && tallFlag && !flag && salaryFlag)
    }

    const hanldeTextareaChange = (value) => {
        setSelfIntro(value)
    }

    const options = {
        title: "Birthday",
        autoHide: true,
        todayBtn: false,
        clearBtn: false,
        clearBtnText: "Clear",
        maxDate: new Date("2030-01-01"),
        minDate: new Date("1950-01-01"),
        theme: {
            background: "bg-[#e3dbdb] dark:bg-[#e3dbdb]",
            todayBtn: "",
            clearBtn: "",
            icons: "bg-white text-black dark:bg-white dark:text-black",
            text: "text-black dark:text-black",
            disabledText: "bg-gray-500 text-white dark:bg-gray-500 dark:text-white",
            input: "bg-white border-solid border-[#EEEEEE] border-[2px] text-black dark:bg-white dark:text-black dark:border-solid dark:border-[#EEEEEE] dark:border-[2px]",
            inputIcon: "",
            selected: "",
        },
        icons: {
            prev: () => <ChevronLeftIcon color="black" width={20} />,
            next: () => <ChevronRightIcon color="black" width={20} />,
        },
        datepickerClassNames: "top-[90px]",
        language: "ja",
        disabledDates: [],
        weekDays: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
        inputNameProp: "date",
        inputIdProp: "date",
        inputPlaceholderProp: "Select Date",
        inputDateFormatProp: {
            day: "numeric",
            month: "long",
            year: "numeric"
        }
    }

    const DemoComponent = () => {
        const [show, setShow] = useState(false)
        const handleChange = (selectedDate) => {
            let date = new Date(selectedDate)
            let dateFormat = date.getFullYear() + "-" + (parseInt(date.getMonth()) + 1) + "-" + date.getDate()
            setBirthday(selectedDate)
            setBirthdayFlag(true)
            setBirthdayFormat(dateFormat)
            setBtnFlag(nicknameFlag && birthdayFlag && addressFlag && tallFlag && bTypeFlag && salaryFlag)
        }
        const handleClose = (state) => {
            setShow(state)
        }

        return (
            <div>
                <Datepicker options={options} value={birthday} onChange={handleChange} show={show} setShow={handleClose} />
            </div>
        )
    }

    const convertAddressToCoordinate = async () => {
        const age = new Date().getFullYear() - parseInt(birthdayFormat.split("-")[0])
        const phone = "+" + pNumber

        try {
            const response = await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${address}&key=${process.env.NEXT_PUBLIC_OPENCAGE_API_KEY}`)

            const response1 = await axios.post('http://57.181.114.135:5000/auth/register', { phone, password, address, birthday: birthdayFormat, tall, bodyStyle: bType, salary, nickname, selfIntro, age, coordinate: [response.data.results[0].geometry.lat, response.data.results[0].geometry.lng], gender: gender, photo: "user_default.jpg" });
            localStorage.setItem("phoneId", response1.data.newMember._id)
            localStorage.setItem("gender", response1.data.newMember.gender)
            router.push('/Home')
        } catch (error) {
            console.log("Error", error)
        }

    }

    const handleSubmit = () => {
        convertAddressToCoordinate(address)
    }

    return (
        <div>
            <TextNoValidationInput
                lableName={"ニックネーム"}
                onChange={handleNicknameChange}
            />
            <div className='flex flex-col relative mt-4'>
                <div className='flex flex-col relative gap-1'>
                    <label className="font-bold">生年月日</label>
                    <DemoComponent />
                </div>
            </div>
            <TextNoValidationInput
                lableName={"地域"}
                onChange={handleAddressChange}
                cName={'mt-4 w-[70%]'}
            />
            <NumberInput
                lableName={"身長"}
                onChange={handleTallChange}
                min={150} max={250}
                cName={'mt-4 w-[70%]'}
            />
            <SelectInput
                lableName={"体型"}
                onChange={handleBTypeChange}
                oValueArr={[
                    { value: 'all', text: "" },
                    { value: 'slender', text: "マッスル" },
                    { value: 'normal', text: "ほっそりした" },
                    { value: 'flat0', text: "ノーマル" },
                    { value: 'flat1', text: "太った" }
                ]}
                cName={'mt-4 w-[70%]'}
            />
            {gender === "1" ? null : <NumberInput
                lableName={"年収"}
                onChange={handleSalaryChange}
                min={0} max={Math.pow(10, 10)}
                cName={'mt-4 w-[70%]'} />}
            <TextAreaInput
                lableName={"自己紹介"}
                cName={'mt-4'}
                onChange={hanldeTextareaChange}
            />
            {btnFlag ? <button className="bg-[#FAFB64] my-5 px-5 py-2 w-full rounded-lg font-bold text-[#707070]" onClick={handleSubmit}>入力内容を確認</button> : <button className="bg-[#A5A5A5] my-5 px-5 py-2 w-full rounded-lg font-bold text-[#707070]" >入力内容を確認</button>}
        </div >
    );
};
