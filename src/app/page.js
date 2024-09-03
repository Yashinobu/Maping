import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-dvh flex-col items-center bg-white pt-[80px] pb-[100px]">
      <div className="flex flex-col h-[25%] w-full text-[#5C5F5D] items-center">
        <img src="./maping_logo.png" />
        <label className="text-[35px] font-bold">Maping</label>
      </div>
      <label className="text-[14px] text-[#A5A5A5] mt-[100px]">利用規約</label>
      <div className="flex flex-col w-[80%] mt-[20px] gap-4">
        <button className="bg-[#FAFB64] text-[#707070] text-[18px] px-[32px] font-bold py-[10px] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] rounded-full">アカウントを作成する</button>
        <button className="bg-[#A5A5A5] text-[#FFFFFF] text-[18px] px-[32px] font-bold py-[10px] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] rounded-full">ログイン</button>
      </div>
      <label className="text-[#A5A5A5] mt-[10px] text-[14px]">ログインできない場合はこちら-</label>
    </main>
  );
}