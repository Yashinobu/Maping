// pages/index.js
"use client"
import { useEffect, useState } from "react";

import Head from "next/head";
import PhoneAuth from '../../components/PhoneAuth';

const Register = () => {

    return (
        <>
            <Head>
                <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
            </Head>
            <main className="flex h-screen flex-col items-center bg-white text-[#5C5F5D]">
                <div className="bg-[#A5A5A5] w-full h-[130px] flex flex-col items-center py-8">
                    <label className="text-[#FBE027] text-[30px] ">無料登録</label>
                    <label className="text-white text-[13px] mt-[-10px]">Sign-up</label>
                </div>
                <div className="flex flex-col gap-4 w-full jsutify-start mt-[20px] px-8">
                    <PhoneAuth />
                </div>
            </main>
        </>

    );
};

export default Register;
