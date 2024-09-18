'use client'
import Head from "next/head";
import { MagnifyingGlassIcon, HomeIcon, UserIcon, HeartIcon, ChatBubbleLeftRightIcon, ChevronLeftIcon, TrashIcon, MapPinIcon, ChevronRightIcon, ArrowLeftIcon, BookmarkIcon } from '@heroicons/react/24/solid'
import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import MessageIcon from "@/components/Icon/MessageIcon";
import PinIcon from "@/components/Icon/PinIcon";


export default function Favourite() {

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

    const handleHome = () => {
        router.push('./Home')
    }

    const handlePin = () => {
        router.push('./Pin')
    }

    const handleFavourite = () => {
        router.push('./Favourite')
    }

    const handleMyPage = () => [
        router.push('./MyPage')
    ]

    const userData = [
        { name: 'Yamada', age: 25, address: 'Tokyo', date: '9/3 18:00', favourite: false, index: 1, url: './user.jpg' },
    ]

    const [uData, setUData] = useState(userData);

    const handleChangeFavourite = (value) => {
        console.log(value)
        console.log(uData[value - 1].favourite)
        uData[value - 1].favourite = !uData[value - 1].favourite
        setUData(uData)
    }

    useEffect(() => {
        setUData(uData)
    }, [uData])

    return (
        <>
            <Head>
                <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
            </Head>
            <main className="flex h-screen flex-col items-center bg-white pb-2 text-[#5C5F5D]">
                <div className="fixed z-[100] h-[60px] bg-white w-full drop-shadow-lg border-b-solid border-b-[2px] border-b-[#00000029]">
                    <ArrowLeftIcon className="absolute top-2 left-2" width={30} height={30} />
                    <div className="flex place-content-center w-full gap-2">
                        <label className="text-[#5C5F5D] font-bold text-[32px]">メッセージ</label>
                    </div>
                </div>
                <div className="flex flex-col w-full bg-white px-2 mt-[60px] pt-7 pb-3">
                    <div className="flex justify-center">
                        <button className="bg-[#FAFB64] text-[16px] rounded-[100px] px-4 py-2 h-full mr-[-40px] z-[50]">すべて</button>
                        <button className="bg-white text-[16px] rounded-[100px] pl-12 pr-4 py-2 h-full z-[40] border-y-solid border-y-[2px] border-y-[#EEEEEE] border-r-solid border-r-[2px] border-r-[#EEEEEE]">ラベルつき</button>
                    </div>
                </div>
                <div className="flex flex-col w-full bg-white px-2 mt-2 gap-4">
                    {uData.map((item) => <div className="flex w-full h-[100px] px-3" key={item.index}>
                        <img src={item.url} width={'100px'} height={'100px'} className="rounded-xl mr-3" />
                        <div className="flex flex-col w-full gap-2">
                            <div className="flex w-full justify-between">
                                <div className="flex gap-2">
                                    <label>{item.name} {item.age}歳</label>
                                    <label>{item.date}</label>
                                </div>
                                <div className="flex">
                                    {item.favourite ? <BookmarkIcon color="#FAFB64" width={20} onClick={() => handleChangeFavourite(item.index)} /> : <BookmarkIcon width={20} onClick={() => handleChangeFavourite(item.index)} />}
                                    <TrashIcon width={20} />
                                </div>
                            </div>
                            <button className="flex gap-2">
                                <MapPinIcon width={20} />
                                <label>{item.address}</label>
                            </button>
                            <button className="flex justify-between gap-2">
                                <div className="flex">
                                    <ChevronLeftIcon width={20} />
                                    <label className="text-[14px]">メッセージがとどいています</label>
                                </div>
                                <ChevronRightIcon width={20} />
                            </button>
                        </div>
                    </div>)}
                </div>
                {isVisible ? <div className="flex justify-between gap-3 py-4 px-2 fixed bottom-0 w-full bg-[#A5A5A5] rounded-t-xl shadow-black shadow-lg h-[70px]">
                    <HomeIcon width={40} height={40} color="#C9C9C9" onClick={handleHome} />
                    <button onClick={handlePin}><PinIcon width={40} height={40} color="#C9C9C9" /></button>
                    <HeartIcon width={40} height={40} color="#C9C9C9" onClick={handleFavourite} />
                    <button className="relative" ><MessageIcon width={40} height={40} color="#EEEE54" /><label className="absolute bg-[#F3757D] rounded-[100px] w-[20px] h-[20px] px-2 top-0 right-[-10px] text-white text-[12px]">1</label></button>
                    <UserIcon width={40} height={40} color="#C9C9C9" onClick={handleMyPage} />
                </div> : null}
            </main>
        </>
    );
}
