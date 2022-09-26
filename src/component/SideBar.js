import React, { useState } from 'react'
import {
    HeartIcon,
    PlusCircleIcon,
    FireIcon,
    ReceiptRefundIcon
} from "@heroicons/react/24/outline";
import IconButton from './IconButton';
import Divider from './Divider';
import QrCode from '../assets/qr.png'
import { useSelector } from 'react-redux';

const SideBar = () => {
    const [showQr, setShowQr] = useState(false)
    const gameState = useSelector(state => state)
    const handleHoverOn = () => {
        setShowQr(true)
    }
    const handleHoverOff = () => {
        setShowQr(false)
    }
    return (
        <div className="text-gray-500 w-4/12 bg-black px-5 pt-5 pb-36 scrollbar-hidden overflow-y-scroll lg:text-xs border-r border-gray-900 h-screen  sm:max-w-[12rem] lg:max-w-[15rem] hidden md:block ">
            <div className='h-40 bg-black mb-2 text-white '>
                <div className='h-9 w-auto text-lg text-center'>
                    <p className=''>Wallet</p>
                </div>
                <div className='flex space-x-2 justify-center text-center'>
                    <div className='w-20 h-10 bg-slate-700 rounded-lg text-lg pt-1'><span className=''>500 $</span></div>
                </div>
                <div className='space-y-2 p-2 cursor-pointer' >
                    <div className='h-8 bg-blue-900 p-2 rounded-md hover:bg-blue-500'>
                        <span>Top-up with sms (discount 5 %)</span>
                    </div>
                    <div className='h-8 bg-red-800 p-2 rounded-md hover:bg-red-500 cursor-wait' onMouseMove={handleHoverOn} onMouseLeave={handleHoverOff}>
                        <span>Add money Qr</span>
                    </div>
                </div>
                {showQr && <div className=' absolute -translate-y-2 p-2' onMouseMove={handleHoverOn} onMouseLeave={handleHoverOff}>
                    <img className='h-60 w-auto rounded-xl' src={QrCode} />
                </div>}
            </div>
            <Divider />
            <div className="space-y-4 mt-3">
                <IconButton icon={HeartIcon} label="My Favorite" />
                <IconButton icon={PlusCircleIcon} label="Playing..." />
                <IconButton icon={ReceiptRefundIcon} label="Your achievement" />
                <Divider />
            </div>
            <div className='space-y-4 mt-2'>
                {
                    gameState.listGame.map((item, index) => {
                        return (
                            <IconButton key={index} icon={FireIcon} label={item.name} />
                        )
                    })
                }
            </div>
        </div >
    )
}

export default SideBar