'use client'
import Head from "next/head";
import { MagnifyingGlassIcon, HomeIcon, UserIcon, HeartIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/solid'
import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";

export default function Home() {

    const router = useRouter()

    const [isVisible, setIsVisible] = useState(true);

    const handleScroll = useCallback(() => {
        const scroll = window.scrollY;

        const shouldBeVisible = scroll <= 100;
        if (shouldBeVisible === isVisible) return;
        console.log(scroll, isVisible)
        setIsVisible(shouldBeVisible);
    }, [isVisible]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    const [color1, setColor1] = useState("#A5A5A5")
    const [color2, setColor2] = useState("gre#A5A5A5y")
    const [color3, setColor3] = useState("#A5A5A5")
    const [color4, setColor4] = useState("#A5A5A5")
    const [color5, setColor5] = useState("#A5A5A5")
    const [color6, setColor6] = useState("#A5A5A5")

    const handleOnClick = (value) => {
        switch (value) {
            case 1:
                color1 === "#A5A5A5" ? setColor1("yellow") : setColor1("#A5A5A5")
                break;
            case 2:
                color2 === "#A5A5A5" ? setColor2("yellow") : setColor2("#A5A5A5")
                break;
            case 3:
                color3 === "#A5A5A5" ? setColor3("yellow") : setColor3("#A5A5A5")
                break;
            case 4:
                color4 === "#A5A5A5" ? setColor4("yellow") : setColor4("#A5A5A5")
                break;
            case 10:
                color10 === "#A5A5A5" ? setColor10("yellow") : setColor10("#A5A5A5")
                break;
            case 11:
                color11 === "#A5A5A5" ? setColor11("yellow") : setColor11("#A5A5A5")
                break;
            case 5:
                color5 === "#A5A5A5" ? setColor5("yellow") : setColor5("#A5A5A5")
                break;
            case 6:
                color6 === "#A5A5A5" ? setColor6("yellow") : setColor6("#A5A5A5")
                break;
            default:
                break;
        }
    }

    const handlePin = () => {
        router.push('./Pin')
    }

    return (
        <>
            <Head>
                <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
            </Head>
            <main className="flex h-screen flex-col items-center bg-white pb-2 text-[#5C5F5D]">
                <div className="fixed z-[100] h-[60px] bg-white w-full drop-shadow-lg border-b-solid border-b-[2px] border-b-[#00000029]">
                    <MagnifyingGlassIcon className="absolute top-2 left-2" width={30} height={30} />
                    <div className="flex place-content-center w-full gap-2">
                        <img src="./maping_logo.png" width={20} height={20} className="pt-3 pb-5" />
                        <label className="text-[#5C5F5D] font-bold text-[32px]">Maping</label>
                    </div>
                </div>
                <div className="flex flex-col w-full bg-white px-2 mt-[60px] pt-3 pb-3">
                    <div className="flex justify-between gap-4">
                        <div className="relative w-[48%] h-[217px] bg-[#EEEEEE] rounded-lg">
                            <HeartIcon className="absolute top-2 right-2" width={30} height={30} color={color1} onClick={() => handleOnClick(1)} ></HeartIcon>
                            <img src="./guide1.svg" className="rounded-md w-full h-full" />
                            <div className="text-white flex flex-col bg-gradient-to-b from-slate-900/25 to-slate-500/25 rounded-b-md px-[5px] w-full absolute bottom-0">
                                <label className="text-[16px] opacity-100">Yamada Ruske</label>
                                <label className="text-[12px] opacity-100">Book, Music...</label>
                            </div>
                        </div>
                        <div className="relative w-[48%] h-[217px] bg-[#EEEEEE] rounded-lg">
                            <HeartIcon className="absolute top-2 right-2" width={30} height={30} color={color2} onClick={() => handleOnClick(2)}></HeartIcon>
                            <img src="./user1.jpg" className="rounded-md w-full h-full" />
                            <div className="text-white flex flex-col bg-gradient-to-b from-slate-900/25 to-slate-500/25 rounded-b-md px-[5px] w-full absolute bottom-0">
                                <label className="text-[16px]">Tomo Yuki</label>
                                <label className="text-[12px]">Swim, Drive...</label>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between gap-4 mt-3">
                        <div className="relative w-[48%] h-[217px] bg-[#EEEEEE] rounded-lg">
                            <HeartIcon className="absolute top-2 right-2" width={30} height={30} color={color3} onClick={() => handleOnClick(3)}></HeartIcon>
                            <img src="./user2.jpg" className="rounded-md w-full h-full" />
                            <div className="text-white flex flex-col bg-gradient-to-b from-slate-900/25 to-slate-500/25 rounded-b-md px-[5px] w-full absolute bottom-0">
                                <label className="text-[16px] opacity-100">Yamada Ruske</label>
                                <label className="text-[12px] opacity-100">Book, Music...</label>
                            </div>
                        </div>
                        <div className="relative w-[48%] h-[217px] bg-[#EEEEEE] rounded-lg">
                            <HeartIcon className="absolute top-2 right-2" width={30} height={30} color={color4} onClick={() => handleOnClick(4)}></HeartIcon>
                            <img src="./user3.jpg" className="rounded-md w-full h-full" />
                            <div className="text-white flex flex-col bg-gradient-to-b from-slate-900/25 to-slate-500/25 rounded-b-md px-[5px] w-full absolute bottom-0">
                                <label className="text-[16px]">Tomo Yuki</label>
                                <label className="text-[12px]">Swim, Drive...</label>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between gap-4 mt-3">
                        <div className="relative w-[48%] h-[217px] bg-[#EEEEEE] rounded-lg">
                            <HeartIcon className="absolute top-2 right-2" width={30} height={30} color={color5} onClick={() => handleOnClick(5)}></HeartIcon>
                            <img src="./guide1.svg" className="rounded-md w-full h-full" />
                            <div className="text-white flex flex-col bg-gradient-to-b from-slate-900/25 to-slate-500/25 rounded-b-md px-[5px] w-full absolute bottom-0">
                                <label className="text-[16px] opacity-100">Yamada Ruske</label>
                                <label className="text-[12px] opacity-100">Book, Music...</label>
                            </div>
                        </div>
                        <div className="relative w-[48%] h-[217px] bg-[#EEEEEE] rounded-lg">
                            <HeartIcon className="absolute top-2 right-2" width={30} height={30} color={color6} onClick={() => handleOnClick(6)}></HeartIcon>
                            <img src="./guide1.svg" className="rounded-md w-full h-full" />
                            <div className="text-white flex flex-col bg-gradient-to-b from-slate-900/25 to-slate-500/25 rounded-b-md px-[5px] w-full absolute bottom-0">
                                <label className="text-[16px]">Tomo Yuki</label>
                                <label className="text-[12px]">Swim, Drive...</label>
                            </div>
                        </div>
                    </div>
                </div>
                {isVisible ? <div className="flex justify-between gap-3 py-2 px-2 fixed bottom-0 w-full bg-[#A5A5A5] rounded-t-xl shadow-black shadow-lg h-[70px]">
                    <HomeIcon width={40} height={40} color="#EEEE54" />
                    <MagnifyingGlassIcon width={40} height={40} color="#C9C9C9" onClick={handlePin} />
                    <HeartIcon width={40} height={40} color="#C9C9C9" />
                    <ChatBubbleLeftRightIcon width={40} height={40} color="#C9C9C9" />
                    <UserIcon width={40} height={40} color="#C9C9C9" />
                </div> : null}
            </main>
        </>
    );
}
