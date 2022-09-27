import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../component/Store/Card'


const Store = () => {
    const gameState = useSelector(state => state)

    return (
        <div className='h-screen bg-black text-white grid grid-cols-5 overflow-scroll scrollbar-hidden p-2 gap-3'>
            <Card gameData={''} />
        </div>
    )
}

export default Store