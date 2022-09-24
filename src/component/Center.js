import React from 'react'
import Slider from './Slider'
import ListGame from './ListGame'
import Detail from './Detail'
import Divider from './Divider'


const Center = () => {

    return (
        <div className='text-white scrollbar-hidden flex-col w-full '>
            <section className='flex items-end space-x-7 bg-gradient-to-b from-blue-700 to-black h-72 p-8'>
                <Slider />
            </section>
            <Divider />
            <section className='grid grid-cols-2 space-x-1 ' >
                <div className='overflow-y-scroll h-screen scrollbar-hidden'>
                    <ListGame />
                </div>
                <div className=''>
                    <Detail />
                </div>
            </section>
        </div>
    )
}

export default Center