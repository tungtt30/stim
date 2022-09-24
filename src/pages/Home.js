import React from 'react'
import SideBar from '../component/SideBar'
import Center from '../component/Center'

const Home = () => {
    return (
        <div className='flex bg-black h-screen overflow-hidden'>
            <SideBar />
            <Center />
        </div>
    )
}

export default Home