import React from 'react'
import Slider from './Slider'
import ListGame from './ListGame'
import Detail from './Detail'

const Center = () => {
    const hehe = () => {
        console.log("heeh")
    }
    return (
        <div className='text-white scrollbar-hidden flex-grow relative '>
            <section className='flex items-end space-x-7 bg-gradient-to-b from-yellow-500 to-black h-80 p-8'>
                <Slider />
            </section>

            <section className='flex' >
                <div className='overflow-y-scroll h-screen scrollbar-hidden w-2/3 '>
                    <ListGame />
                </div>
                <div>
                    <Detail />
                </div>
            </section>
        </div>
    )
}

export default Center