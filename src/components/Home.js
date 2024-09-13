'use client'
import Head from "next/head";
import { BeakerIcon, HomeIcon, UserGroupIcon, HeartIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";

export default function Home() {

    const router = useRouter();

    const [isVisible, setIsVisible] = useState(true);

    const handleScroll = useCallback(() => {
        const scroll = window.scrollY;

        const shouldBeVisible = scroll <= 400;
        if (shouldBeVisible === isVisible) return;
        console.log(scroll, isVisible)
        setIsVisible(shouldBeVisible);
    }, [isVisible]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    const [color1, setColor1] = useState("grey")
    const [color2, setColor2] = useState("grey")
    const [color3, setColor3] = useState("grey")
    const [color4, setColor4] = useState("grey")
    const [color5, setColor5] = useState("grey")
    const [color6, setColor6] = useState("grey")

    const handleOnClick = (value) => {
        switch (value) {
            case 1:
                color1 === "grey" ? setColor1("red") : setColor1("grey")
                break;
            case 2:
                color2 === "grey" ? setColor2("red") : setColor2("grey")
                break;
            case 3:
                color3 === "grey" ? setColor3("red") : setColor3("grey")
                break;
            case 4:
                color4 === "grey" ? setColor4("red") : setColor4("grey")
                break;
            case 10:
                color10 === "grey" ? setColor10("red") : setColor10("grey")
                break;
            case 11:
                color11 === "grey" ? setColor11("red") : setColor11("grey")
                break;
            case 5:
                color5 === "grey" ? setColor5("red") : setColor5("grey")
                break;
            case 6:
                color6 === "grey" ? setColor6("red") : setColor6("grey")
                break;
            default:
                break;
        }
    }

    const handleGoPayment = () => {
        router.push('./Payments')
    }

    return (
        <>
            <Head>
                <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
            </Head>
            <main className="flex h-screen flex-col items-center bg-white py-2 text-[#5C5F5D]">
                <div className="flex flex-col w-full bg-white px-2">
                    <div className="flex justify-between gap-4">
                        <div className="relative w-[48%] h-full">
                            <HeartIcon className="absolute top-2 right-2" width={30} height={30} color={color1} onClick={() => handleOnClick(1)} />
                            <img src="./user.jpg" className="rounded-md" />
                            <div className="text-white flex flex-col bg-gradient-to-b from-slate-900/25 to-slate-500/25 rounded-b-md px-[5px] w-full absolute bottom-0">
                                <label className="text-[16px] opacity-100">Yamada Ruske</label>
                                <label className="text-[12px] opacity-100">Book, Music...</label>
                            </div>
                        </div>
                        <div className="relative w-[48%] h-full">
                            <HeartIcon className="absolute top-2 right-2" width={30} height={30} color={color2} onClick={() => handleOnClick(2)} />
                            <img src="./user1.jpg" className="rounded-md" />
                            <div className="text-white flex flex-col bg-gradient-to-b from-slate-900/25 to-slate-500/25 rounded-b-md px-[5px] w-full absolute bottom-0">
                                <label className="text-[16px]">Tomo Yuki</label>
                                <label className="text-[12px]">Swim, Drive...</label>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between gap-4 mt-3">
                        <div className="relative w-[48%] h-full">
                            <HeartIcon className="absolute top-2 right-2" width={30} height={30} color={color3} onClick={() => handleOnClick(3)} />
                            <img src="./user2.jpg" className="rounded-md" />
                            <div className="text-white flex flex-col bg-gradient-to-b from-slate-900/25 to-slate-500/25 rounded-b-md px-[5px] w-full absolute bottom-0">
                                <label className="text-[16px] opacity-100">Yamada Ruske</label>
                                <label className="text-[12px] opacity-100">Book, Music...</label>
                            </div>
                        </div>
                        <div className="relative w-[48%] h-full">
                            <HeartIcon className="absolute top-2 right-2" width={30} height={30} color={color4} onClick={() => handleOnClick(4)} />
                            <img src="./user3.jpg" className="rounded-md" />
                            <div className="text-white flex flex-col bg-gradient-to-b from-slate-900/25 to-slate-500/25 rounded-b-md px-[5px] w-full absolute bottom-0">
                                <label className="text-[16px]">Tomo Yuki</label>
                                <label className="text-[12px]">Swim, Drive...</label>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between gap-4 mt-3">
                        <div className="relative w-[48%] h-full">
                            <HeartIcon className="absolute top-2 right-2" width={30} height={30} color={color5} onClick={() => handleOnClick(5)} />
                            <img src="./user4.jpg" className="rounded-md" />
                            <div className="text-white flex flex-col bg-gradient-to-b from-slate-900/25 to-slate-500/25 rounded-b-md px-[5px] w-full absolute bottom-0">
                                <label className="text-[16px] opacity-100">Yamada Ruske</label>
                                <label className="text-[12px] opacity-100">Book, Music...</label>
                            </div>
                        </div>
                        <div className="relative w-[48%] h-full">
                            <HeartIcon className="absolute top-2 right-2" width={30} height={30} color={color6} onClick={() => handleOnClick(6)} />
                            <img src="./user5.jpg" className="rounded-md" />
                            <div className="text-white flex flex-col bg-gradient-to-b from-slate-900/25 to-slate-500/25 rounded-b-md px-[5px] w-full absolute bottom-0">
                                <label className="text-[16px]">Tomo Yuki</label>
                                <label className="text-[12px]">Swim, Drive...</label>
                            </div>
                        </div>
                    </div>
                </div>
                {isVisible ? <div className="flex justify-between gap-3 py-2 px-2 fixed bottom-0 w-full bg-white shadow-black shadow-lg h-[70px]">
                    <HomeIcon width={40} height={40} color="#f10b36"></HomeIcon>
                    <UserGroupIcon width={40} height={40}></UserGroupIcon>
                    <HeartIcon width={40} height={40}></HeartIcon>
                    <CurrencyDollarIcon width={40} height={40} onClick={handleGoPayment}></CurrencyDollarIcon>
                </div> : null}
            </main>
        </>
    );
}
