import React from 'react'
import { useSelector } from 'react-redux'
const Slider = () => {
    const gamedata = useSelector((state => state))
    // console.log(gamedata)
    return (
        <div>
            Day la slideshow
        </div >
    )
}

export default Slider