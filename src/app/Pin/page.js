'use client'
import Head from "next/head";
import { MagnifyingGlassIcon, ArrowLeftIcon, HomeIcon, UserIcon, HeartIcon, ChatBubbleLeftRightIcon, ChevronLeftIcon, ChevronRightIcon, MapPinIcon, MapIcon, StarIcon } from '@heroicons/react/24/solid'
import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import Datepicker from "tailwind-datepicker-react"
import MessageIcon from "@/components/Icon/MessageIcon";
import PinIcon from "@/components/Icon/PinIcon";

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

    const handlePin = () => {
        router.push('./Pin')
    }

    const handleHome = () => {
        router.push('./Home')
    }

    const handleFavourite = () => {
        router.push('./Favourite')
    }

    const handleGoogleMapPin = () => {
        router.push('./GoogleMapPin')
    }

    const handleMessage = () => {
        router.push('./Message')
    }

    const options = {
        title: "Calendar",
        autoHide: true,
        todayBtn: false,
        clearBtn: false,
        clearBtnText: "Clear",
        maxDate: new Date("2030-01-01"),
        minDate: new Date("1950-01-01"),
        theme: {
            background: "bg-[#e3dbdb] dark:bg-[#e3dbdb]",
            todayBtn: "",
            clearBtn: "",
            icons: "bg-white text-black dark:bg-white dark:text-black",
            text: "text-black dark:text-black",
            disabledText: "bg-gray-500 text-white dark:bg-gray-500 dark:text-white",
            input: "bg-white border-solid border-[#EEEEEE] border-[2px] text-black dark:bg-white dark:text-black dark:border-solid dark:border-[#EEEEEE] dark:border-[2px]",
            inputIcon: "",
            selected: "",
        },
        icons: {
            prev: () => <ChevronLeftIcon color="black" width={20} />,
            next: () => <ChevronRightIcon color="black" width={20} />,
        },
        datepickerClassNames: "top-[230px]",
        language: "ja",
        disabledDates: [],
        weekDays: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
        inputNameProp: "date",
        inputIdProp: "date",
        inputPlaceholderProp: "Select Date",
        inputDateFormatProp: {
            day: "numeric",
            month: "long",
            year: "numeric"
        }
    }

    const DemoComponent = () => {
        const [show, setShow] = useState(false)
        const handleChange = (selectedDate) => {
            console.log(selectedDate)
        }
        const handleClose = (state) => {
            setShow(state)
        }

        return (
            <div>
                <Datepicker options={options} onChange={handleChange} show={show} setShow={handleClose} />
            </div>
        )
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
                        <label className="text-[#5C5F5D] font-bold text-[32px]">PIN</label>
                    </div>
                </div>
                <div className="flex flex-col w-full bg-white px-2 mt-[60px] pt-7 pb-3">
                    <div className="flex justify-center">
                        <button className="bg-[#FAFB64] text-[16px] rounded-[100px] px-4 py-2 h-full mr-[-40px] z-[50]">PINをさす</button>
                        <button className="bg-white text-[16px] rounded-[100px] pl-12 pr-4 py-2 h-full z-[40] border-y-solid border-y-[2px] border-y-[#EEEEEE] border-r-solid border-r-[2px] border-r-[#EEEEEE]">PINをみる</button>
                    </div>
                    <div className="flex flex-col justify-center gap-4 mt-4 w-full h-[115px] rounded-2xl shadow-2xl shadow-[#00000029] py-2">
                        <label className="text-[19px] text-[#5C5F5D] text-center">Date</label>
                        <div className="w-[77%] ml-[12%]">
                            <DemoComponent />
                        </div>
                    </div>
                    <div className="flex justify-between gap-4 mt-7">
                        <button className="w-[30%] h-[105px] bg-[#EEEEEE] items-center drop-shadow-lg flex flex-col gap-3 pt-3 pb-2" onClick={handleGoogleMapPin}>
                            <MapPinIcon color="#A5A5A5" />
                            <label className="text-center">現在地周辺</label>
                        </button>
                        <button className="w-[30%] h-[105px] bg-[#EEEEEE] items-center drop-shadow-lg flex flex-col gap-3 pt-3 pb-2">
                            <MapIcon color="#A5A5A5" />
                            <label className="text-center">場所を検索</label>
                        </button>
                        <button className="w-[30%] h-[105px] bg-[#EEEEEE] items-center drop-shadow-lg flex flex-col gap-3 pt-3 pb-2">
                            <StarIcon color="#A5A5A5" />
                            <label className="text-center">お気に入り</label>
                        </button>
                    </div>
                    <div className="flex justify-between gap-4 mt-7">
                        <button className="relative rounded-[9999px] bg-[#EEEEEE] w-full h-[60px]">検索履歴をみる
                            <ChevronRightIcon className="absolute right-5 top-5" color="#5C5C5C" width={20} />
                        </button>
                    </div>
                </div>
                {isVisible ? <div className="flex justify-between gap-3 z-100 py-4 px-2 fixed bottom-0 w-full bg-[#A5A5A5] rounded-t-xl shadow-black shadow-lg h-[70px]">
                    <HomeIcon width={40} height={40} color="#C9C9C9" onClick={handleHome} />
                    <button onClick={handlePin}><PinIcon width={40} height={40} color="#EEEE54" /></button>
                    <HeartIcon width={40} height={40} color="#C9C9C9" onClick={handleFavourite} />
                    <button onClick={handleMessage}><MessageIcon width={40} height={40} color="#C9C9C9" /></button>
                    <UserIcon width={40} height={40} color="#C9C9C9" />

                </div> : null}
            </main>
        </>
    );
}
