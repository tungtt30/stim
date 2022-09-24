import React, { useState } from 'react'
import Divider from './Divider'
import { useSelector } from 'react-redux'

const Detail = ({ gameItem }) => {

    const { selectedGame } = useSelector((state) => state)


    const handleClick = () => {

    }

    return (
        <div className='text-white'>
            <div className='h-44 m-2 bg-white object-cover rounded-md  overflow-hidden'>
                <img className='' src={selectedGame.image} />
            </div>
            <Divider />
            <div className='h-40 m-2 rounded-md block w-3/4'>
                <p className='text-clip'> {selectedGame.describe}</p>
            </div>
            <Divider />
            <div className='m-2'>
                <div className=''>
                    <div className='flex space-x-2'>
                        <span className='pt-1'>Price:</span>
                        <div className='h-10 w-16  border text-center pt-1 border-white rounded-md'>{selectedGame.price} $</div>
                        <span className='pt-1'>Discount:</span>
                        <div className='h-10 w-16 border text-red-400 text-center pt-1 border-white rounded-md'>-{selectedGame.discount} %</div>
                    </div>

                    <div className='mt-4 space-x-2'>
                        <button className=' h-10 w-16 border border-gray-300 rounded-md bg-blue-900 hover:bg-blue-700' onClick={handleClick}>Buy</button>
                        <button className=' h-10 p-1 border border-gray-300 rounded-md hover:bg-slate-800' onClick={handleClick}>Add to wish list</button>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Detail