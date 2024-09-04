'use client'
import Head from "next/head";
import { HomeIcon, UserGroupIcon, StarIcon, CurrencyDollarIcon, ChevronLeftIcon } from '@heroicons/react/24/solid'
import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";

export default function Payment() {

    const router = useRouter()

    const [isVisible, setIsVisible] = useState(true);

    const handleScroll = useCallback(() => {
        const scroll = window.scrollY;

        const shouldBeVisible = scroll <= 20;
        if (shouldBeVisible === isVisible) return;
        console.log(scroll, isVisible)
        setIsVisible(shouldBeVisible);
    }, [isVisible]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    const [btnCol1, setBtnCol1] = useState(true)
    const [btnCol2, setBtnCol2] = useState(false)
    const [btnCol3, setBtnCol3] = useState(false)
    const [btnCol4, setBtnCol4] = useState(false)

    const handleClick = (value) => {
        switch (value) {
            case 1:
                setBtnCol1(true)
                setBtnCol2(false)
                setBtnCol3(false)
                setBtnCol4(false)
                break;
            case 2:
                setBtnCol1(false)
                setBtnCol2(true)
                setBtnCol3(false)
                setBtnCol4(false)
                break;
            case 3:
                setBtnCol1(false)
                setBtnCol2(false)
                setBtnCol3(true)
                setBtnCol4(false)
                break;
            case 4:
                setBtnCol1(false)
                setBtnCol2(false)
                setBtnCol3(false)
                setBtnCol4(true)
                break;

            default:
                break;
        }
    }

    const handleGoHome = () => {
        router.push('./Home')
    }

    return (
        <>
            <Head>
                <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
            </Head>
            <main className="flex h-screen flex-col items-center bg-white py-2 text-[#5C5F5D]">
                <div className="flex flex-col relative w-full bg-white">
                    {/* Part of Top */}
                    <div className="fixed top-0 h-[50px] w-full border-solid border-b-[#e3e3e3] border-b-[2px]">
                        <div className="relative w-full h-full">
                            <ChevronLeftIcon className="absolute top-1 left-1" color="#b6b6b6" width={40} height={40} />
                            <label className="absolute left-[40%] top-3 text-center font-bold">料金プラン</label>
                        </div>
                    </div>

                    {/* Part of content */}
                    <div className="w-full px-2 mt-[70px]">
                        {/* Part of Button */}
                        <div className="w-full flex flex-col">
                            <p className="text-black border-solid border-l-[#c63548] border-l-[3px] pl-3 font-bold">決済方法を選択</p>
                            <div className="flex gap-3 justify-between mt-5">
                                <button className={`text-[${btnCol1 ? "#c63548" : "#e3e3e3"}] border-solid border-[${btnCol1 ? "#c63548" : "#e3e3e3"}] border-[2px] font-bold rounded-full w-[48%] py-1`} onClick={() => handleClick(1)}>クレジット</button>
                                <button className={`text-[${btnCol2 ? "#c63548" : "#e3e3e3"}] border-solid border-[${btnCol2 ? "#c63548" : "#e3e3e3"}] border-[2px] font-bold rounded-full w-[48%] py-1`} onClick={() => handleClick(2)}>あと払い(ペイディ)</button>
                            </div>

                            <div className="flex gap-3 justify-between mt-3">
                                <button className={`text-[${btnCol3 ? "#c63548" : "#e3e3e3"}] border-solid border-[${btnCol3 ? "#c63548" : "#e3e3e3"}] border-[2px] font-bold rounded-full w-[48%] py-1`} onClick={() => handleClick(3)}>ビットキャッシュ</button>
                                <button className={`text-[${btnCol4 ? "#c63548" : "#e3e3e3"}] border-solid border-[${btnCol4 ? "#c63548" : "#e3e3e3"}] border-[2px] font-bold rounded-full w-[48%] py-1`} onClick={() => handleClick(4)}>銀行振込</button>
                            </div>
                        </div>

                        {/* Part of Premium */}
                        <div className="w-full flex flex-col items-center mt-6 gap-5">
                            <label className="text-[35px] text-[#93835f] font-bold">PREMIUM</label>
                            <label className="text-[15px] text-[#93835f] font-bold mt-[-25px]">プレミアム</label>

                            {/* Part of Each Button */}
                            <butoon className="flex relative w-full border-solid border-[#93835f] border-[2px] rounded-lg">
                                <label className="bg-[#c3293d] absolute top-[-15px] right-[-5px] px-2 py-1 text-white text-[12px] font-bold">おすすめ</label>

                                <div className="flex w-full">

                                    {/* Part of Left of Button */}
                                    <div className="flex flex-col bg-[#93835f] w-[45%] font-bold px-4 pt-3 pb-5">
                                        <label className="text-white text-[15px] text-center"><label className="text-[35px]">12</label>ヶ月プラ</label>
                                        <label className="rounded-full bg-white text-[15px] text-center text-[#93835f]">24,000円お得</label>
                                    </div>

                                    {/* Part of Right of Button */}
                                    <div className="flex flex-col bg-white w-[55%] font-bold px-4 py-3 rounded-lg">
                                        <div className="flex items-center gap-2 px-4 border-b-solid border-b-[2px] border-b-[#b3b3b3] ">
                                            <div className="text-[12px] text-[#b3b3b3]">1ヶ月</div>
                                            <div className="text-black text-[25px]">¥6,000</div>
                                        </div>
                                        <div className="flex items-center gap-2 px-4 mt-2">
                                            <div className="bg-[#b3b3b3] text-white text-[12px] rounded-full px-2">一括</div>
                                            <div className="text-black text=[12px]">¥72,000</div>
                                        </div>
                                    </div>
                                </div>
                            </butoon>

                            <butoon className="flex relative w-full border-solid border-[#a8a08e] border-[2px] rounded-lg">
                                {/* <label className="bg-[#c3293d] absolute top-[-15px] right-[-5px] px-2 py-1 text-white text-[12px] font-bold">おすすめ</label> */}

                                <div className="flex w-full">

                                    {/* Part of Left of Button */}
                                    <div className="flex flex-col bg-[#a8a08e] w-[45%] font-bold px-4 pt-3 pb-5">
                                        <label className="text-white text-[15px] text-center"><label className="text-[35px]">6</label>ヶ月プラ</label>
                                        <label className="rounded-full bg-white text-[15px] text-center text-[#93835f]">6,000円お得</label>
                                    </div>

                                    {/* Part of Right of Button */}
                                    <div className="flex flex-col bg-white w-[55%] font-bold px-4 py-3 rounded-lg">
                                        <div className="flex items-center gap-2 px-4 border-b-solid border-b-[2px] border-b-[#b3b3b3] ">
                                            <div className="text-[12px] text-[#b3b3b3]">1ヶ月</div>
                                            <div className="text-black text-[25px]">¥7,000</div>
                                        </div>
                                        <div className="flex items-center gap-2 px-4 mt-2">
                                            <div className="bg-[#b3b3b3] text-white text-[12px] rounded-full px-2">一括</div>
                                            <div className="text-black text=[12px]">¥42,000</div>
                                        </div>
                                    </div>
                                </div>
                            </butoon>

                            <butoon className="flex relative w-full border-solid border-[#a8a08e] border-[2px] rounded-lg">
                                {/* <label className="bg-[#c3293d] absolute top-[-15px] right-[-5px] px-2 py-1 text-white text-[12px] font-bold">おすすめ</label> */}

                                <div className="flex w-full">

                                    {/* Part of Left of Button */}
                                    <div className="flex flex-col bg-[#a8a08e] w-[45%] font-bold px-4 pt-3 pb-5">
                                        <label className="text-white text-[15px] text-center"><label className="text-[35px]">3</label>ヶ月プラ</label>
                                        <label className="rounded-full bg-white text-[15px] text-center text-[#93835f]">8,000円お得</label>
                                    </div>

                                    {/* Part of Right of Button */}
                                    <div className="flex flex-col bg-white w-[55%] font-bold px-4 py-3 rounded-lg">
                                        <div className="flex items-center gap-2 px-4 border-b-solid border-b-[2px] border-b-[#b3b3b3] ">
                                            <div className="text-[12px] text-[#b3b3b3]">1ヶ月</div>
                                            <div className="text-black text-[25px]">¥8,000</div>
                                        </div>
                                        <div className="flex items-center gap-2 px-4 mt-2">
                                            <div className="bg-[#b3b3b3] text-white text-[12px] rounded-full px-2">一括</div>
                                            <div className="text-black text=[12px]">¥24,000</div>
                                        </div>
                                    </div>
                                </div>
                            </butoon>

                        </div>
                    </div>
                </div>

                {isVisible ? <div className="flex justify-between gap-3 py-2 px-2 fixed bottom-0 w-full bg-white shadow-black shadow-lg h-[70px]">
                    <HomeIcon width={40} height={40} onClick={handleGoHome}></HomeIcon>
                    <UserGroupIcon width={40} height={40}></UserGroupIcon>
                    <StarIcon width={40} height={40}></StarIcon>
                    <CurrencyDollarIcon width={40} height={40} color="#f10b36"></CurrencyDollarIcon>
                </div> : null}
            </main>
        </>
    );
}
