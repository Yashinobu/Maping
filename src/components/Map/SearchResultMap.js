"use client"

import { MapContainer, TileLayer, Marker, Popup, useMapEvents, Circle } from "react-leaflet";

import L from 'leaflet';
import ReactDOMServer from 'react-dom/server';

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";


const SearchResultMap = (Map) => {
    const router = useRouter()
    const { zoom = 12, state, data, baseCoordinate, distance } = Map

    const [initialPosition, setInitialPosition] = useState(baseCoordinate);
    const [selectedPosition, setSelectedPosition] = useState(baseCoordinate);

    const [markers, setMarkers] = useState(data)

    const customIcon = (image_url) => L.divIcon({
        html: ReactDOMServer.renderToStaticMarkup(<div className="h-[70px] w-[70px] relative">
            <img src="/PIN_person.png" className="w-[70px] h-[70px] absolute top-[-65px] left-[-50px]" />
            <img src={"/" + image_url} className="rounded-[100px] w-[45px] h-[45px] absolute top-[-53px] left-[-38px] marker-image" />
        </div>),
        iconSize: [5, 5],
    })

    const handlePrivateChat = (user1, user2) => {
        let rommId = user1 > user2 ? user1 + user2 : user2 + user1
        router.push(`/Chat/${rommId}`)
    }

    const Markers = () => {

        return (
            markers.map((marker, index) => <Marker key={marker.coordinate} position={marker.coordinate} icon={customIcon(marker.photo)}><Popup className="absolute bottom-0 bg-[#FFFF54] rounded-lg text-[#5C5C5C]">
                <button className="flex " onClick={() => handlePrivateChat(localStorage.getItem('phoneId'), marker._id)}>
                    <label>Start Chatting</label>
                </button>
            </Popup></Marker >)
        )
    }
    const fillBlueOptions = { fillColor: 'blue' }

    return (
        <MapContainer
            center={selectedPosition || initialPosition}
            zoom={zoom}
            style={{ height: "100%", width: "100%" }}
        >
            <Marker
                position={baseCoordinate}>
            </Marker>
            {state ? <Markers /> : null}
            <Circle center={baseCoordinate} pathOptions={fillBlueOptions} radius={distance * 1000} />
            {/* <Circle */}

            <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        </MapContainer >
    )
}

export default SearchResultMap