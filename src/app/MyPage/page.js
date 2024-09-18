'use client'
import Head from "next/head";
import { MagnifyingGlassIcon, HomeIcon, UserIcon, HeartIcon, ChatBubbleLeftRightIcon, ChevronLeftIcon, TrashIcon, MapPinIcon, ChevronRightIcon, ArrowLeftIcon, PlusCircleIcon, NewspaperIcon, QuestionMarkCircleIcon, DevicePhoneMobileIcon, Cog6ToothIcon } from '@heroicons/react/24/solid'
import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import MessageIcon from "@/components/Icon/MessageIcon";
import PinIcon from "@/components/Icon/PinIcon";


export default function MyPage() {

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

    const handleMyPage = () => {
        router.push('./MyPage')
    }

    const handleMessage = () => {
        router.push('./Message')
    }

    return (
        <>
            <Head>
                <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
            </Head>
            <main className="flex h-screen flex-col items-center bg-white pb-2 text-[#5C5F5D]">
                <div className="fixed z-[100] h-[60px] bg-white w-full drop-shadow-lg border-b-solid border-b-[2px] border-b-[#00000029]">
                    <ArrowLeftIcon className="absolute top-2 left-2" width={30} height={30} />
                    <div className="flex place-content-center w-full gap-2">
                        <label className="text-[#5C5F5D] font-bold text-[32px]">マイページ</label>
                    </div>
                </div>
                <div className="w-full bg-white px-2 mt-[60px] pt-5">
                    <button className="flex justify-center gap-2 bg-white text-[#5C5F5D] text-[14px] px-2 py-2 ml-[5%] w-[90%] h-full font-bold border-solid border-[2px] border-[#FAFB64] rounded-xl drop-shadow-md">すき有料プランにアップデートしよう！
                    </button>
                </div>
                <div className="flex flex-col gap-2 w-full px-7 mt-5">
                    <div className="flex gap-2 mt-4">
                        <div className="relative">
                            <UserIcon className="bg-[#FEFF3F] rounded-[100px] px-4 py-4" width={120} color="#FAFB64">
                            </UserIcon>
                            <PlusCircleIcon className="absolute bottom-0 right-0" color="#FAFB64" width={30} />
                        </div>
                        <div className="flex w-full justify-between items-center gap-2">
                            <label>プロフィール確認</label>
                            <ChevronRightIcon width={25} />
                        </div>
                    </div>
                    <div className="flex gap-4 mt-4">
                        <div className="flex flex-col gep-3">
                            <label className="text-[#A5A5A5]">本人証明</label>
                            <label className="flex text-[#5C5F5D]">未承認<ChevronRightIcon width={20} /></label>
                        </div>
                        <div className="flex flex-col gep-3">
                            <label className="text-[#A5A5A5]">会員ステータス</label>
                            <label className="flex text-[#5C5F5D]">無料会員<ChevronRightIcon width={20} /></label>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col bg-[#E8E8E8] gap-6 w-full px-7 py-5 mt-5">
                    <div className="flex justify-between gap-3">
                        <button className="flex items-center w-[45%] rounded-lg px-5 py-5 flex-col gap-3 bg-[#FAFB64]">
                            <NewspaperIcon width={70} />
                            <label className="text-[15px] font-bold">おしらせ</label>
                        </button>
                        <button className="flex items-center w-[45%] rounded-lg px-5 py-5 flex-col gap-3 bg-[#FAFB64]">
                            <QuestionMarkCircleIcon width={70} />
                            <label className="text-[15px] font-bold">お問い合わせ</label>
                        </button>
                    </div>
                    <div className="flex justify-between gap-3">
                        <button className="flex items-center w-[45%] rounded-lg px-5 py-5 flex-col gap-3 bg-[#FAFB64]">
                            <DevicePhoneMobileIcon width={70} />
                            <label className="text-[15px] font-bold">よくある質問</label>
                        </button>
                        <button className="flex items-center w-[45%] rounded-lg px-5 py-5 flex-col gap-3 bg-[#FAFB64]">
                            <Cog6ToothIcon width={70} />
                            <label className="text-[15px] font-bold">設定</label>
                        </button>
                    </div>
                </div>

                {isVisible ? <div className="flex justify-between gap-3 py-4 px-2 fixed bottom-0 w-full bg-[#A5A5A5] rounded-t-xl shadow-black shadow-lg h-[70px]">
                    <HomeIcon width={40} height={40} color="#C9C9C9" onClick={handleHome} />
                    <button onClick={handlePin}><PinIcon width={40} height={40} color="#C9C9C9" /></button>
                    <HeartIcon width={40} height={40} color="#C9C9C9" onClick={handleFavourite} />
                    <button onClick={handleMessage}><MessageIcon width={40} height={40} color="#C9C9C9" /></button>
                    <UserIcon width={40} height={40} color="#EEEE54" onClick={handleMyPage} />
                </div> : null}
            </main>
        </>
    );
}
