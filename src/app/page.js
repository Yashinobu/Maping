'use client'
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import Head from "next/head";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault()
    router.push('./Login');
  }

  const handleRegister = (e) => {
    e.preventDefault()
    router.push('./Register');
  }

  return (
    <>
      <Head>
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </Head>
      <main className="flex flex-col h-screen items-center bg-white py-3">
        <div className="w-full px-2 justify-end flex gap-2">
          <button className="text-[#555555] px-[12px] py-2 drop-shadow-md bg-gradient-to-t from-[#FCEE21] via-[#FBD42B] to-[#FBB03B] w-[91px] h-[35px] text-[12px] font-bold" onClick={handleRegister}>無料登録</button>
          <button className="text-[#555555] px-[12px] py-2 drop-shadow-md bg-[#E8E4E4] w-[91px] h-[35px] text-[12px]" onClick={handleLogin}>ログイン</button>
        </div>
        <div className="w-full px-5 flex flex-col justify-start gap-1 pt-2">
          <label className="text-[#292929] text-[35px] font-bold font-mincho">仕事帰り、</label>
          <label className="text-[#292929] text-[35px] font-bold font-mincho">旅先でも、</label>
          <label className="text-[#292929] text-[35px] font-bold font-mincho">上質な出会いを。</label>
          <lable className="text-[#292929] text-[12px] font-mincho z-50">Enjoy quality encounters during your free time in Japan Utilize your precious time to maximize the chance to meet with someone who you like</lable>
          <div className="flex mt-[-20px] z-0">
            <img src="./banner.png" />
          </div>
        </div>
        <div className="flex flex-col w-full px-5 z-50 bg-white">
          <label className="text-[#292929] text-[20px] font-mincho">まずは近くのカフェで</label>
          <label className="text-[#292929]  text-[20px] font-mincho">お茶できる方を探してみませんか？</label>
          <div className="w-full flex flex-col items-center gap-1 mt-1">
            <div className="w-[70%] flex gap-2">
              <button className="flex justify-center gap-2 items-center text-white bg-[#292929] w-[122px] h-[52px] rounded-lg">男性 <ChevronRightIcon width={10} /></button>
              <button className="flex text-black justify-center gap-2 items-center bg-gradient-to-r from-[#FCEE21] via-[#FBD42B] to-[#FBB03B] w-[122px] h-[52px] rounded-lg">女性 <ChevronRightIcon width={10} /></button>
            </div>
            <label className="text-black font-noto text-[14px]">※18歳未満の方はご利用いただけません</label>
          </div>
        </div>
      </main>
    </>
  );
}