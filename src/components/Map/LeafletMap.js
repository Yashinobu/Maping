"use client"

import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { useEffect, useState } from "react";
import Image from "next/image";
import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/solid";


const Map = (Map) => {
    const { zoom = 12, state, position } = Map
    const [initialPosition, setInitialPosition] = useState(position);
    const [selectedPosition, setSelectedPosition] = useState(position);
    const userData = [
        { name: 'Yuki', age: 25, hobby: 'Music, Book...', url: '/user.jpg' },
        { name: 'Nasuyi', age: 22, hobby: 'TV, Resturant...', url: '/user1.jpg' },
        { name: 'Tomoda', age: 23, hobby: 'Swim, Game...', url: '/user2.jpg' },
        { name: 'Maya', age: 27, hobby: 'Dance, Yard...', url: '/user3.jpg' }]

    const [user, setUser] = useState(userData[0])
    const [userIndex, setUserIndex] = useState(0)

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords;
            setInitialPosition([latitude, longitude]);
        });
    }, []);

    useEffect(() => {
        const userNumber = Math.round(Math.random() * 3);
        if (userNumber !== userIndex) {
            setUserIndex(userNumber);
            setUser(userData[userNumber])
        }
    }, [selectedPosition])

    const Popups = () => {
        return (
            <Popup className="absolute bottom-0 bg-[#FFFF54] text-[#5C5C5C]">
                <button className="flex w-[155px] h-[50px]">
                    <Image src={user.url} alt={user.name} width={50} height={50} />
                    <div className="flex flex-col ml-[9px] items-start">
                        <label>{user.name}</label>
                        <label>{user.age}</label>
                        <label>{user.hobby}</label>
                    </div>
                </button>
            </Popup>
        )
    }

    const Markers = () => {

        const map = useMapEvents({
            click(e) {
                setSelectedPosition([
                    e.latlng.lat,
                    e.latlng.lng
                ]);
            },
        })

        return (
            selectedPosition ?
                <Marker
                    key={selectedPosition[0]}
                    position={selectedPosition}
                    interactive={true}
                >
                    <Popups />
                </Marker >
                : null
        )

    }

    const lll = () => {
        console.log("RQWWEWEWEWREW")
    }
    return (
        <MapContainer
            center={selectedPosition || initialPosition}
            zoom={zoom}
            style={{ height: "100%", width: "100%" }}
        >
            {state ? <Markers /> : null}
            <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <div className="absolute bottom-[70px] border-solid border-[2px] border-[#FAFB64] border-rounded-lg z-[99999] w-[90%] h-[235px] left-[5%] bg-white rounded-lg">
                <div className="w-full px-4 flex justify-between pt-3">
                    <label className="text-[25px] text-[#5C5F5D] font-bold border-b-solid border-b-[2px] border-b-[#FAFB64] mb-[8px]">Name さん</label>
                    <button className="bg-[#FAFB64] text-[20px] px-4 py-2 font-bold rounded-[100px] drop-shadow-md" onClick={lll}>連絡する</button>
                </div>
                <div className="flex flex-col w-full justify-start gap-2">
                    <div className="flex gap-2 px-3">
                        <MagnifyingGlassCircleIcon color="#FAFB64" width={30} />
                        <label className="text-[20px] font-bold">平安神宮</label>
                    </div>
                    <div className="flex gap-2 px-3">
                        <label className="text-[16px] text-[#A5A5A5] font-bold">日本, 京都市東山</label>
                    </div>
                    <div className="flex gap-2 px-3">
                        <div className="flex justify-between gap-2 bg-[#EEEEEE] rounded-2xl px-3 py-2 text-[12px] text-[#5C5C5C] text-center font-bold">
                            <img src="./guide.svg" />
                            <label className="pt-1">ガイドしてほしい</label>
                        </div>
                    </div>
                    <div className="flex gap-3 px-3">
                        <div className="flex justify-between gap-2 bg-[#EEEEEE] rounded-2xl px-4 py-2 text-[12px] text-[#5C5C5C] text-center font-bold">
                            <img src="./calender.svg" width={25} />
                            <label className="pt-1">本日</label>
                        </div>
                        <div className="flex justify-between gap-2 bg-[#EEEEEE] rounded-2xl px-4 py-2 text-[12px] text-[#5C5C5C] text-center font-bold">
                            <img src="./time.svg" width={25} />
                            <label className="pt-1">16:00</label>
                        </div>
                    </div>
                </div>
            </div>
        </MapContainer>
    )
}

export default Map