'use client'
import Chat from "@/components/Chat";
import Head from "next/head";
import { useParams } from "next/navigation";
import { ArrowLeftIcon } from '@heroicons/react/24/solid'

const ChatPage = () => {
    const params = useParams()
    if (!params.roomId) {
        return <div>Loading....</div>
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
                        <label className="text-[#5C5F5D] font-bold text-[25px] pt-2">恵</label>
                    </div>
                </div>
                <div className="flex flex-col w-full bg-white mt-[60px] sm:mt-[40px] pt-7 sm:pt-7 pb-3 h-screen">
                    <Chat roomId={params.roomId} />
                </div>
            </main>
        </>
    )
}

export default ChatPage