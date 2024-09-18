"use client"

import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { useEffect, useState } from "react";
import Image from "next/image";
import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/solid";


const CurrentMap = (Map) => {
    const { zoom = 12, state } = Map
    const [initialPosition, setInitialPosition] = useState([35.157545, 136.899904]);
    const [selectedPosition, setSelectedPosition] = useState([35.157545, 136.899904]);
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

    // useEffect(() => {
    //     const userNumber = Math.round(Math.random() * 3);
    //     if (userNumber !== userIndex) {
    //         setUserIndex(userNumber);
    //         setUser(userData[userNumber])
    //     }
    // }, [selectedPosition])

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
            <div className="absolute bottom-[70px] z-[99999] w-[90%] right-[5%] h-[150px] sm:h-[100px] sm:bottom-[75px]">
                <img src="./PIN_tap.png" className="w-[150px] sm:w-[100px] h-full absolute right-0" />
                <label className="w-[25px] h-[25px] bg-[#F3757D] rounded-[100px] text-[14px] text-center text-white px-1 py-1 absolute top-9 sm:top-5 right-9 sm:right-5">1</label>
                <label className="w-[25px] h-[25px] bg-white rounded-[100px] drop-shadow-md text-[18px] text-center text-[#F3757D] px-1 pb-1 absolute bottom-4 sm:bottom-2 right-5 sm:right-4">+</label>
            </div>
        </MapContainer>
    )
}

export default CurrentMap