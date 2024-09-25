'use client'
import Head from "next/head";
import { MagnifyingGlassIcon, ArrowLeftIcon, HomeIcon, UserIcon, HeartIcon, ChatBubbleLeftRightIcon, ChevronLeftIcon, ChevronRightIcon, MapPinIcon, MapIcon, StarIcon } from '@heroicons/react/24/solid'
import { useState, useEffect, useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import MessageIcon from "@/components/Icon/MessageIcon";
import PinIcon from "@/components/Icon/PinIcon";

export default function Home() {

    const router = useRouter()

    const [isVisible, setIsVisible] = useState(true);
    const [state, setState] = useState(true);

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

    const handleFavourite = () => {
        router.push('./Favourite')
    }

    const handleMyPage = () => {
        router.push('./MyPage')
    }

    const handleMessage = () => {
        router.push('./Message')
    }


    const handlePin = () => {
        router.push('./Pin')
    }
    // Part of Map

    const Map = useMemo(() => dynamic(
        () => import('@/components/Map/LeafletMap'),
        {
            loading: () => <p>A map is loading</p>,
            ssr: false
        }
    ), [])

    return (
        <>
            <Head>
                <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
            </Head>
            <main className="flex h-screen flex-col items-center bg-white pb-2 text-[#5C5F5D]">
                <div className="fixed z-[100] h-[60px] bg-white w-full drop-shadow-lg border-b-solid border-b-[2px] border-b-[#00000029]">
                    <ArrowLeftIcon className="absolute top-2 left-2" width={30} height={30} />
                    <div className="flex place-content-center w-full gap-2">
                        <label className="text-[#5C5F5D] font-bold text-[25px] pt-2">Name</label>
                    </div>
                </div>
                <div className="flex flex-col w-full bg-transparent px-2 mt-[60px] z-[9999] pt-7 pb-3">
                    <div className="flex justify-center">
                        <button className="bg-[#FAFB64] text-[13px] rounded-[100px] px-4 py-2 h-full mr-[-40px] z-[50]">PINをさす</button>
                        <button className="bg-white text-[13px] rounded-[100px] pl-12 pr-4 py-2 h-full z-[40] border-y-solid border-y-[2px] border-y-[#EEEEEE] border-r-solid border-r-[2px] border-r-[#EEEEEE]">PINをみる</button>
                    </div>

                    {/* <div className="flex justify-center mt-5">
                        <button className="flex justify-center gap-2 bg-white text-[#5C5F5D] text-[14px] rounded-lg px-4 py-2 h-full z-[50]">すきな場所をタップしてPINをさそう！\
                            <img src="./tap.svg" />
                        </button>
                    </div> */}
                </div>
                <div className="w-[95%] h-[80%] absolute left-[2.5%] top-[60px] xs:h-[64%] xs:top-[68px] 2xs:h-[77%] 2xs:top-[75px] sm:h-[90%] md:h-[90%] sm:top-[60px]">
                    <Map state={true} />
                </div>
                {isVisible ? <div className="flex justify-between gap-3 py-4 px-4 z-[9999] fixed bottom-0 w-full bg-[#A5A5A5] rounded-t-xl shadow-black shadow-lg h-[70px]">
                    <HomeIcon width={40} height={40} color="#C9C9C9" onClick={handleHome} />
                    <button onClick={handlePin}><PinIcon width={40} height={40} color="#EEEE54" /></button>
                    <HeartIcon width={40} height={40} color="#C9C9C9" onClick={handleFavourite} />
                    <button onClick={handleMessage}><MessageIcon width={40} height={40} color="#C9C9C9" /></button>
                    <UserIcon width={40} height={40} color="#C9C9C9" onClick={handleMyPage} />
                </div> : null}
            </main>
        </>
    );
}
