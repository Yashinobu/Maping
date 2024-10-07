'use client'
import Head from "next/head";
import { MagnifyingGlassIcon, HomeIcon, UserIcon, HeartIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/solid'
import { useState, useEffect, useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import MessageIcon from "@/components/Icon/MessageIcon";
import PinIcon from "@/components/Icon/PinIcon";
import dynamic from "next/dynamic";
import { useParams } from 'next/navigation'
import axios from "axios";

export default function SearchResult() {

    const router = useRouter()

    const [isVisible, setIsVisible] = useState(true);
    const [state, setState] = useState(true);
    const [data, setData] = useState([])
    const [baseCoordinate, setBaseCoordinate] = useState([])

    const params = useParams()
    console.log(params)

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

    const handleGoSearch = () => {
        router.push('./Search')
    }

    useEffect(() => {
        async function searchMembers() {
            const response = await axios.post('http://57.181.114.135:5000/profile/get-members', { phoneId: localStorage.getItem('phoneId'), tall: params.tall, bodyStyle: params.bType, salary: params.salary, age: params.age, distance: params.distance })
            const { data } = response
            console.log(data)
            console.log(data.baseCoordinate)
            setBaseCoordinate(data?.baseCoordinate)
            setData(data?.members)
        }
        searchMembers()
    }, [])

    const Map = useMemo(() => dynamic(
        () => import('@/components/Map/SearchResultMap'),
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
                    <MagnifyingGlassIcon className="absolute top-3 left-2" width={30} height={30} onClick={handleGoSearch} />
                    <div className="flex place-content-center w-full gap-2">
                        {/* <img src="./Maping＿logo-ai.png" width={120} height={60} className="p-2" /> */}
                        <label className="text-[#5C5F5D] font-bold text-[25px] py-2">Results</label>
                    </div>
                </div>
                <div className="flex flex-col w-full bg-white px-5 mt-[60px] pt-3 pb-3">
                    <div className="w-[95%] h-[100%] absolute left-[2.5%] top-[60px] xs:h-[64%] xs:top-[68px] 2xs:h-[77%] 2xs:top-[75px] sm:h-[90%] md:h-[90%] sm:top-[60px]">
                        {data.length > 0 ? < Map state={state} age={params.age} tall={params.tall} bodyStyle={params.bType} salary={params.salary} distance={params.distance} data={data} baseCoordinate={baseCoordinate} /> : null}

                    </div>
                </div>
                {isVisible ? <div className="flex z-[9999] justify-between gap-3 py-4 px-4 fixed bottom-0 w-full bg-[#A5A5A5] rounded-t-xl shadow-black shadow-lg h-[70px]">
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
