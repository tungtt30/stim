import React from 'react'
import SideBar from './SideBar'
import Center from './Center'

const Home = () => {
    return (
        <div className='flex bg-black h-screen overflow-hidden'>
            <SideBar />
            <Center />
        </div>
    )
}

export default Home