'use client'
import Head from "next/head";
import { useEffect, useState } from "react";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import Home from "@/components/Home";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import { useRouter } from "next/navigation";

export default function Login() {

    const { data: session } = useSession();
    const [phone, setPhone] = useState("");

    const router = useRouter();

    const users = [
        { phone: '818088459635', password: 'matching1' },
        { phone: '818088459636', password: 'matching2' },
        { phone: '818088459637', password: 'matching3' },
        { phone: '818088459638', password: 'matching4' }
    ]

    const [passFlag, setPassFlag] = useState(false);
    const [phoneFlag, setPhoneFlag] = useState(false);
    const [password, setPassword] = useState();
    const [result, setResult] = useState({ flag: false, msg: 'information is incorrect' })

    const handlePasswordChange = (e) => {
        setPassFlag(e.target.value.length == 0 ? true : false)
        setPassword(e.target.value)
    }

    const handlePhoneChange = (phone) => {
        console.log(phone)
        console.log(phone.length <= 3 ? true : false)
        setPhoneFlag(phone.length <= 3 ? true : false)
        setPhone(phone)
    }

    const handleLoginClick = (phone, password) => {
        console.log(phone)
        const flag = users.some((user) => user.phone === phone)
        const flag1 = users.some((user) => user.password === password)
        if (flag == false) {
            alert('You are new member')
            return setResult({ flag: flag, msg: 'You are new member' })
        }
        if (flag1 === false) {
            alert('Password incorrect')
            return setResult({ flag: flag, msg: 'Password incorrect!' })
        }
        alert("Success!")
        setResult({ flag: true, msg: 'Success!' })
        return router.push('./Home')
    }
    return (
        <>
            <Head>
                <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
            </Head>
            <main className="flex h-screen flex-col items-center bg-white text-[#5C5F5D]">
                <div className="bg-[#A5A5A5] w-full h-[130px] flex flex-col items-center py-8">
                    <label className="text-[#FBE027] text-[30px] ">ログイン</label>
                    <label className="text-white text-[13px] mt-[-10px]">Login</label>
                </div>
                <div className="flex flex-col gap-4 w-full jsutify-start mt-[20px] px-8">
                    <div className="flex flex-col relative gap-1">
                        <label className="font-bold">電話番号</label>
                        <PhoneInput
                            country={"jp"}
                            enableSearch={true}
                            value={phone}
                            onChange={(phone) => handlePhoneChange(phone)}
                        />
                        {phoneFlag ? <label className="absolute bottom-[-20px] text-[10px] text-[#f30707]">Please input your phone number</label> : null}
                    </div>

                    <div className="flex flex-col gap-1 relative mt-5">
                        <label className="font-bold">パスワード</label>
                        <input type="password" className="rounded-md border border-solid border-[#CACACA] py-[5px] pl-[15px] pr-[5px]" onChange={handlePasswordChange} value={password} />
                        <br />
                        {passFlag ? <label className="absolute bottom-2 text-[10px] text-[#f30707]">Please input your password</label> : null}
                    </div>
                    <button className="bg-gradient-to-l from-[#FCEE21] via-[#FBD42B] to-[#FBB03B] text-[#707070] text-[18px] px-[32px] font-bold py-[5px] drop-shadow-[0_2px_2px_rgba(0,0,0,0.25)] rounded-md mt-9" onClick={() => handleLoginClick(phone, password)}>ログイン</button>
                </div>

            </main>

        </>
    );
}
