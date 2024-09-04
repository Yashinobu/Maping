'use client'
import Head from "next/head";
import { useEffect, useState } from "react";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import Home from "@/components/Home";

export default function Login() {

    const { data: session } = useSession();

    const isValidEmailAddress = (value) => {
        const testEmail = /^[ ]*([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})[ ]*$/i;
        return testEmail.test(value);
    }

    const users = [
        { email: 'matching1@gmail.com', password: 'matching1@gmail.com' },
        { email: 'matching2@gmail.com', password: 'matching2@gmail.com' },
        { email: 'matching3@gmail.com', password: 'matching3@gmail.com' },
        { email: 'matching4@gmail.com', password: 'matching4@gmail.com' }
    ]

    const [emailFlag, setEmailflag] = useState(false);
    const [passFlag, setPassFlag] = useState(false);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [result, setResult] = useState({ flag: false, msg: 'information is incorrect' })

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setEmailflag(!isValidEmailAddress(e.target.value))
    }

    const handlePasswordChange = (e) => {
        setPassFlag(false)
        setPassword(e.target.value)
    }

    const handleLoginClick = (email, password) => {
        const flag = users.some((user) => user.email === email)
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
        return setResult({ flag: true, msg: 'Success!' })
    }
    return (
        <>
            <Head>
                <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
            </Head>
            {!session ? <main className="flex h-screen flex-col items-center bg-white p-2 text-[#5C5F5D]">
                <h1 className="text-[25px] mt-[100px]">Sing in to Matching App</h1>
                <button className="flex gap-2 rounded-full border border-solid border-[#5C5F5D] px-[25px] py-[5px] w-[72%] mt-[30px]" onClick={() => signIn("google", { prompt: "select_account" })}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                    </svg>
                    Continue with google
                </button>
                <p className="mt-[20px]">or</p>
                <div className="flex flex-col gap-4 w-full items-center mt-[20px]">
                    <label className="relative">
                        <div className="w-8 h-8 absolute top-[22px] transform -translate-y-1/2 left-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>
                        </div>
                        <input type="text" className="rounded-full border border-solid border-[#5C5F5D] py-[5px] pl-[40px] pr-[5px]" onChange={handleEmailChange} value={email} />
                        <br />
                        {emailFlag ? <label className="text-[10px] text-[#f30707]">The email is incorrect.</label> : null}
                    </label>
                    <label className="relative">
                        <div className="w-8 h-8 absolute top-[22px] transform -translate-y-1/2 left-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z" />
                            </svg>
                        </div>
                        <input type="password" className="rounded-full border border-solid border-[#5C5F5D] py-[5px] pl-[40px] pr-[5px]" onChange={handlePasswordChange} value={password} />
                        <br />
                        {passFlag ? <label className="text-[10px] text-[#f30707]">The password is incorrect.</label> : null}
                    </label>
                    <button className="bg-[#FAFB64] text-[#707070] text-[18px] px-[32px] font-bold py-[5px] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] rounded-full w-[72%]" onClick={() => handleLoginClick(email, password)}>Log in</button>
                </div>
                <div className="flex flex-col gap-4 w-full items-center mt-[20px]">
                    <button className="text-[12px] text-[#007be5]">Reset password</button>
                    <div className="flex text-[12px] gap-2"><label>No account?</label><button className="text-[#007be5]">Create one</button></div>
                </div>
            </main> : <Home />}

        </>
    );
}
