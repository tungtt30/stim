import React from 'react'
import { useSelector } from 'react-redux'
import Divider from '../component/Divider'
import StoreList from '../component/Store/StoreList'



const Tag = ({ value }) => {
    return (
        <div className='h-14 w-28 bg-black text-white text-center text-base rounded-2xl cursor-pointer hover:bg-slate-600 border border-white'><p className='mt-4'>{value}</p></div>
    )
}




const Store = () => {
    const gameState = useSelector(state => state)


    return (
        <>
            <div className='p-2 bg-gradient-to-b from-black to-blue-800 w-auto overflow-hidden'>
                <div className='h-auto flex space-x-4 justify-center p-4 mb-2'>
                    <Tag value={'FPS'} />
                    <Tag value={'Action'} />
                    <Tag value={'Indie'} />
                    <Tag value={'Slash'} />
                    <Tag value={'MMORPG'} />
                </div>
                <Divider />
                <StoreList itemsPerPage={8} items={gameState.listGame} />
            </div>
        </>

    )
}

export default Store