'use client'
import Head from "next/head";
import { BeakerIcon, HomeIcon, UserGroupIcon, StarIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";

export default function Home() {

    const router = useRouter()

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
    const [color7, setColor7] = useState("grey")
    const [color8, setColor8] = useState("grey")
    const [color9, setColor9] = useState("grey")
    const [color10, setColor10] = useState("grey")
    const [color11, setColor11] = useState("grey")
    const [color12, setColor12] = useState("grey")
    const [color13, setColor13] = useState("grey")
    const [color14, setColor14] = useState("grey")

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
            case 7:
                color7 === "grey" ? setColor7("red") : setColor7("grey")
                break;
            case 8:
                color8 === "grey" ? setColor8("red") : setColor8("grey")
                break;
            case 9:
                color9 === "grey" ? setColor9("red") : setColor9("grey")
                break;
            case 12:
                color12 === "grey" ? setColor12("red") : setColor12("grey")
                break;
            case 13:
                color13 === "grey" ? setColor13("red") : setColor13("grey")
                break;
            case 14:
                color14 === "grey" ? setColor14("red") : setColor14("grey")
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
                            <StarIcon className="absolute top-2 right-2" width={30} height={30} color={color1} onClick={() => handleOnClick(1)} ></StarIcon>
                            <img src="./user.png" className="rounded-md" />
                            <div className="text-white flex flex-col bg-gradient-to-b from-slate-900/25 to-slate-500/25 rounded-b-md px-[5px] w-full absolute bottom-0">
                                <label className="text-[16px] opacity-100">Yamada Ruske</label>
                                <label className="text-[12px] opacity-100">Book, Music...</label>
                            </div>
                        </div>
                        <div className="relative w-[48%] h-full">
                            <StarIcon className="absolute top-2 right-2" width={30} height={30} color={color2} onClick={() => handleOnClick(2)}></StarIcon>
                            <img src="./user1.png" className="rounded-md" />
                            <div className="text-white flex flex-col bg-gradient-to-b from-slate-900/25 to-slate-500/25 rounded-b-md px-[5px] w-full absolute bottom-0">
                                <label className="text-[16px]">Tomo Yuki</label>
                                <label className="text-[12px]">Swim, Drive...</label>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between gap-4 mt-3">
                        <div className="relative w-[48%] h-full">
                            <StarIcon className="absolute top-2 right-2" width={30} height={30} color={color3} onClick={() => handleOnClick(3)}></StarIcon>
                            <img src="./user2.png" className="rounded-md" />
                            <div className="text-white flex flex-col bg-gradient-to-b from-slate-900/25 to-slate-500/25 rounded-b-md px-[5px] w-full absolute bottom-0">
                                <label className="text-[16px] opacity-100">Yamada Ruske</label>
                                <label className="text-[12px] opacity-100">Book, Music...</label>
                            </div>
                        </div>
                        <div className="relative w-[48%] h-full">
                            <StarIcon className="absolute top-2 right-2" width={30} height={30} color={color4} onClick={() => handleOnClick(4)}></StarIcon>
                            <img src="./user3.png" className="rounded-md" />
                            <div className="text-white flex flex-col bg-gradient-to-b from-slate-900/25 to-slate-500/25 rounded-b-md px-[5px] w-full absolute bottom-0">
                                <label className="text-[16px]">Tomo Yuki</label>
                                <label className="text-[12px]">Swim, Drive...</label>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between gap-4 mt-3">
                        <div className="relative w-[48%] h-full">
                            <StarIcon className="absolute top-2 right-2" width={30} height={30} color={color5} onClick={() => handleOnClick(5)}></StarIcon>
                            <img src="./user4.png" className="rounded-md" />
                            <div className="text-white flex flex-col bg-gradient-to-b from-slate-900/25 to-slate-500/25 rounded-b-md px-[5px] w-full absolute bottom-0">
                                <label className="text-[16px] opacity-100">Yamada Ruske</label>
                                <label className="text-[12px] opacity-100">Book, Music...</label>
                            </div>
                        </div>
                        <div className="relative w-[48%] h-full">
                            <StarIcon className="absolute top-2 right-2" width={30} height={30} color={color6} onClick={() => handleOnClick(6)}></StarIcon>
                            <img src="./user5.png" className="rounded-md" />
                            <div className="text-white flex flex-col bg-gradient-to-b from-slate-900/25 to-slate-500/25 rounded-b-md px-[5px] w-full absolute bottom-0">
                                <label className="text-[16px]">Tomo Yuki</label>
                                <label className="text-[12px]">Swim, Drive...</label>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between gap-4 mt-3">
                        <div className="relative w-[48%] h-full">
                            <StarIcon className="absolute top-2 right-2" width={30} height={30} color={color7} onClick={() => handleOnClick(7)}></StarIcon>
                            <img src="./user6.png" className="rounded-md" />
                            <div className="text-white flex flex-col bg-gradient-to-b from-slate-900/25 to-slate-500/25 rounded-b-md px-[5px] w-full absolute bottom-0">
                                <label className="text-[16px] opacity-100">Yamada Ruske</label>
                                <label className="text-[12px] opacity-100">Book, Music...</label>
                            </div>
                        </div>
                        <div className="relative w-[48%] h-full">
                            <StarIcon className="absolute top-2 right-2" width={30} height={30} color={color8} onClick={() => handleOnClick(8)}></StarIcon>
                            <img src="./user.png" className="rounded-md" />
                            <div className="text-white flex flex-col bg-gradient-to-b from-slate-900/25 to-slate-500/25 rounded-b-md px-[5px] w-full absolute bottom-0">
                                <label className="text-[16px]">Tomo Yuki</label>
                                <label className="text-[12px]">Swim, Drive...</label>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between gap-4 mt-3">
                        <div className="relative w-[48%] h-full">
                            <StarIcon className="absolute top-2 right-2" width={30} height={30} color={color9} onClick={() => handleOnClick(9)}></StarIcon>
                            <img src="./user.png" className="rounded-md" />
                            <div className="text-white flex flex-col bg-gradient-to-b from-slate-900/25 to-slate-500/25 rounded-b-md px-[5px] w-full absolute bottom-0">
                                <label className="text-[16px] opacity-100">Yamada Ruske</label>
                                <label className="text-[12px] opacity-100">Book, Music...</label>
                            </div>
                        </div>
                        <div className="relative w-[48%] h-full">
                            <StarIcon className="absolute top-2 right-2" width={30} height={30} color={color10} onClick={() => handleOnClick(10)}></StarIcon>
                            <img src="./user1.png" className="rounded-md" />
                            <div className="text-white flex flex-col bg-gradient-to-b from-slate-900/25 to-slate-500/25 rounded-b-md px-[5px] w-full absolute bottom-0">
                                <label className="text-[16px]">Tomo Yuki</label>
                                <label className="text-[12px]">Swim, Drive...</label>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between gap-4 mt-3">
                        <div className="relative w-[48%] h-full">
                            <StarIcon className="absolute top-2 right-2" width={30} height={30} color={color11} onClick={() => handleOnClick(11)}></StarIcon>
                            <img src="./user2.png" className="rounded-md" />
                            <div className="text-white flex flex-col bg-gradient-to-b from-slate-900/25 to-slate-500/25 rounded-b-md px-[5px] w-full absolute bottom-0">
                                <label className="text-[16px] opacity-100">Yamada Ruske</label>
                                <label className="text-[12px] opacity-100">Book, Music...</label>
                            </div>
                        </div>
                        <div className="relative w-[48%] h-full">
                            <StarIcon className="absolute top-2 right-2" width={30} height={30} color={color12} onClick={() => handleOnClick(12)}></StarIcon>
                            <img src="./user3.png" className="rounded-md" />
                            <div className="text-white flex flex-col bg-gradient-to-b from-slate-900/25 to-slate-500/25 rounded-b-md px-[5px] w-full absolute bottom-0">
                                <label className="text-[16px]">Tomo Yuki</label>
                                <label className="text-[12px]">Swim, Drive...</label>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between gap-4 mt-3">
                        <div className="relative w-[48%] h-full">
                            <StarIcon className="absolute top-2 right-2" width={30} height={30} color={color13} onClick={() => handleOnClick(13)}></StarIcon>
                            <img src="./user4.png" className="rounded-md" />
                            <div className="text-white flex flex-col bg-gradient-to-b from-slate-900/25 to-slate-500/25 rounded-b-md px-[5px] w-full absolute bottom-0">
                                <label className="text-[16px] opacity-100">Yamada Ruske</label>
                                <label className="text-[12px] opacity-100">Book, Music...</label>
                            </div>
                        </div>
                        <div className="relative w-[48%] h-full">
                            <StarIcon className="absolute top-2 right-2" width={30} height={30} color={color14} onClick={() => handleOnClick(14)}></StarIcon>
                            <img src="./user5.png" className="rounded-md" />
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
                    <StarIcon width={40} height={40}></StarIcon>
                    <CurrencyDollarIcon width={40} height={40} onClick={handleGoPayment}></CurrencyDollarIcon>
                </div> : null}
            </main>
        </>
    );
}
