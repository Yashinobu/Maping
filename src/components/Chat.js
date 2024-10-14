// components/Chat.js
'use client'
import { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { PaperAirplaneIcon } from '@heroicons/react/24/outline'

const socket = io('http://57.181.114.135:3002'); // The Express.js server URL

const Chat = ({ roomId }) => {
    const [message, setMessage] = useState('');
    const [chat, setChat] = useState([]);

    useEffect(() => {
        // Join the room when the component mounts
        socket.emit('join room', roomId)

        // Listen for incoming private messages
        socket.on('private message', ({ message, id }) => {
            setChat((prevChat) => [...prevChat, { message, id }])
        })

        // Cleanup on unmount
        return () => {
            socket.off('private message');
        };
    }, [roomId]);

    const sendMessage = (e) => {
        e.preventDefault();
        if (message.trim()) {
            socket.emit('private message', { roomId, message, id: localStorage.getItem('phoneId') });
            setMessage(''); // Clear the input
        }
    };

    return (
        <div>
            <div className="px-4 sm:h-[500px] overflow-y-scroll">
                {chat.map(({ message, id }, index) => (
                    <div key={index} className={`${id === localStorage.getItem('phoneId') ? 'flex flex-col justify-start bg-[#FAFB64]' : 'flex flex-col ml-[20%] justify-end bg-[#EEEEEE]'} w-[80%] rounded-lg py-1 px-1 mt-3`}>{message.split("\n").map((item, index) => <label key={index}>{item}</label>)}</div>
                ))}
            </div>
            <form onSubmit={sendMessage} className="absolute w-full bottom-0 bg-[#EEEEEE] p-3 flex justify-between">
                <textarea
                    className="rounded-lg drop-shadow-lg p-3 w-[80%]"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="自分のメッセージが入ります。"
                />
                <button type="submit" className="bg-[#FAFB64] h-[30px] px-2 text-[12px] rounded-lg drop-shadow-lg font-bold flex gap-1 py-1.5 mt-10">送信<PaperAirplaneIcon width={13} height={13} className="mt-0.5" /></button>
            </form>
        </div>
    );
};

export default Chat;
