'use client'
import React from "react"
import Head from "next/head";
import { MagnifyingGlassIcon, HomeIcon, UserIcon, HeartIcon, ChatBubbleLeftRightIcon, ArrowLeftIcon } from '@heroicons/react/24/solid'
import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import MessageIcon from "@/components/Icon/MessageIcon";
import PinIcon from "@/components/Icon/PinIcon";
import { Slider } from "@nextui-org/slider";

export default function Search() {

    const router = useRouter()

    const [isVisible, setIsVisible] = useState(true);
    const [age, setAge] = useState(0)
    const [tall, setTall] = useState(0)
    const [bodyType, setBodyType] = useState('all')
    const [salary, setSalary] = useState(0)
    const [distance, setDistance] = useState(0)

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

    const handleChangeAge = (e) => {
        setAge(e.target.value)
    }

    const handleChangeTall = (e) => {
        setTall(e.target.value)
    }

    const handleChangeBodyType = (e) => {
        setBodyType(e.target.value)
    }

    const handleChangeSalary = (e) => {
        setSalary(e.target.value)
    }

    const handleChangeDistance = (value) => {
        setDistance(value)
    }

    const hanldeSearchConditionInit = () => {
        setAge(0)
        setTall(0)
        setBodyType('all')
        setSalary('all')
        setDistance(0)
    }

    const handleSearchSubmit = () => {
        router.push(`./Search/Result/${age}/${tall}/${bodyType}/${salary}/${distance}`)
    }

    return (
        <>
            <Head>
                <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
            </Head>
            <main className="flex h-screen flex-col items-center bg-white pb-2 text-[#5C5F5D]">
                <div className="fixed z-[100] h-[60px] bg-white w-full drop-shadow-lg border-b-solid border-b-[2px] border-b-[#00000029]">
                    <ArrowLeftIcon className="absolute top-3 left-2" width={30} height={30} />
                    <div className="flex place-content-center w-full gap-2">
                        {/* <img src="./Maping＿logo-ai.png" width={120} height={60} className="p-2" /> */}
                        <label className="text-[#5C5F5D] font-bold text-[25px] py-3">検索</label>
                    </div>
                </div>
                <div className="flex flex-col w-full bg-white mt-[60px] pt-3 pb-3">
                    <div className="w-full border-b-solid border-b-[#EEEEEE] border-b-[1px] h-[70px] px-5">
                        <div className="flex justify-between gap-2 w-full">
                            <label className="text-[#5C5F5D] text-[14px] py-6">年齡</label>
                            <select onChange={handleChangeAge} value={age}>
                                <option value={0}>こだわらない</option>
                                <option value={20}>20歳 ~ 30歳</option>
                                <option value={30}>30歳 ~ 40歳</option>
                                <option value={40}>40歳 ~ 50歳</option>
                            </select>
                        </div>
                    </div>
                    <div className="w-full border-b-solid border-b-[#EEEEEE] border-b-[1px] h-[70px] px-5">
                        <div className="flex justify-between gap-2 w-full">
                            <label className="text-[#5C5F5D] text-[14px] py-6">身長</label>
                            <select onChange={handleChangeTall} value={tall}>
                                <option value={0}>こだわらない</option>
                                <option value={150}>150 ~ 160cm</option>
                                <option value={160}>160 ~ 170cm</option>
                                <option value={170}>170 ~ 180cm</option>
                                <option value={180}>180cm ~ </option>
                            </select>
                        </div>
                    </div>
                    <div className="w-full border-b-solid border-b-[#EEEEEE] border-b-[1px] h-[70px] px-5">
                        <div className="flex justify-between gap-2 w-full">
                            <label className="text-[#5C5F5D] text-[14px] py-6">体型</label>
                            <select onChange={handleChangeBodyType} value={bodyType}>
                                <option value={'all'}>こだわらない</option>
                                <option value={'slender'}>マッスル</option>
                                <option value={'normal'}>ほっそりした</option>
                                <option value={'flat0'}>ノーマル</option>
                                <option value={'flat1'}>太った</option>
                            </select>
                        </div>
                    </div>
                    <div className="w-full border-b-solid border-b-[#EEEEEE] border-b-[1px] h-[70px] px-5">
                        <div className="flex justify-between gap-2 w-full">
                            <label className="text-[#5C5F5D] text-[14px] py-6">年収</label>
                            <select onChange={handleChangeSalary} value={salary}>
                                <option value={0}>こだわらない</option>
                                <option value={30000}>高い</option>
                                <option value={20000}>通常</option>
                                <option value={10000}>低い</option>
                            </select>
                        </div>
                    </div>
                    <div className="w-full flex flex-col px-5 py-2">
                        <label>自分との距離</label>
                        <label className="text-[#C9C9C9]">ここから</label>
                        <Slider
                            label="(km)"
                            step={0.01}
                            maxValue={10}
                            minValue={0}
                            defaultValue={4}
                            className="max-w-md"
                            color={"warning"}
                            size="sm"
                            onChange={(value) => handleChangeDistance(value)}
                            value={distance}
                        />
                    </div>
                    <div className="w-full justify-center flex gap-2 px-5 py-9">
                        <button className="px-3 py-2 bg-[#C9C9C9] rounded-md drop-shadow-lg text-[#5C5F5D]" onClick={hanldeSearchConditionInit}>すべてリセット</button>
                        <button className="px-3 py-2 bg-[#FAFB64] rounded-md drop-shadow-lg text-[#5C5F5D]" onClick={handleSearchSubmit}>この条件で検索</button>
                    </div>
                </div>
                {isVisible ? <div className="flex justify-between gap-3 py-4 px-4 fixed bottom-0 w-full bg-[#A5A5A5] rounded-t-xl shadow-black shadow-lg h-[70px]">
                    <HomeIcon width={40} height={40} color="#EEEE54" />
                    <button onClick={handlePin}><PinIcon width={40} height={40} color="#C9C9C9" /></button>
                    <HeartIcon width={40} height={40} color="#C9C9C9" onClick={handleFavourite} />
                    <button onClick={handleMessage}><MessageIcon width={40} height={40} color="#C9C9C9" /></button>
                    <UserIcon width={40} height={40} color="#C9C9C9" onClick={handleMyPage} />
                </div> : null}
            </main>
        </>
    );
}
