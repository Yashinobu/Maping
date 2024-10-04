"use client"

import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";

import L from 'leaflet';
import ReactDOMServer from 'react-dom/server';

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";


const SearchResultMap = (Map) => {
    const { zoom = 12, state, age, tall, bodyStyle, salary, distance } = Map

    const searchResult = axios.post('http://57.181.114.135:5000/profile/get-members', { phoneId: localStorage.getItem('phoneId'), tall: tall, bodyStyle: bodyStyle, salary: salary, age: age, distance: distance })
    console.log(searchResult)
    // useEffect(() => {
    // }, [])

    const [initialPosition, setInitialPosition] = useState([35.157545, 136.899904]);
    const [selectedPosition, setSelectedPosition] = useState([35.157545, 136.899904]);
    const userData = [
        { name: 'Yuki', age: 25, hobby: 'Music, Book...', url: '/user.jpg', coordinate: [35.157545, 136.899704] },
        { name: 'Nasuyi', age: 22, hobby: 'TV, Resturant...', url: '/user1.jpg', coordinate: [35.127645, 136.990904] },
        { name: 'Tomoda', age: 23, hobby: 'Swim, Game...', url: '/user2.jpg', coordinate: [35.155545, 136.999904] },
        { name: 'Maya', age: 27, hobby: 'Dance, Yard...', url: '/user3.jpg', coordinate: [35.167545, 136.899944] }]

    const [user, setUser] = useState(userData[0])
    const [markers, setMarkers] = useState(userData)

    const customIcon = (image_url) => L.divIcon({
        html: ReactDOMServer.renderToStaticMarkup(<div className="h-[70px] w-[70px] relative">
            <img src="/PIN_person.png" className="w-[70px] h-[70px] absolute top-0" />
            <img src={image_url} className="rounded-[100px] w-[45px] h-[45px] absolute top-3 left-3 marker-image" />
        </div>),
        iconSize: [0, 0]
    })

    const Markers = () => {

        return (
            markers.map((marker) => <Marker key={marker.coordinate[0]} position={marker.coordinate} icon={customIcon(marker.url)}><Popup className="absolute bottom-0 bg-[#FFFF54] text-[#5C5C5C]">
                <button className="flex w-[155px] h-[50px]">
                    <Image src={marker.url} alt={marker.name} width={50} height={50} />
                    <div className="flex flex-col ml-[9px] items-start">
                        <label>{marker.name}</label>
                        <label>{marker.age}</label>
                        <label>{marker.hobby}</label>
                    </div>
                </button>
            </Popup></Marker>)
        )
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
        </MapContainer >
    )
}

export default SearchResultMap