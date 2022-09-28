import React from 'react'
import { useDispatch } from 'react-redux'
import Divider from '../Divider'
import { addToCart } from '../../Redux/action'

const Card = ({ gameData }) => {
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(addToCart(gameData))
    }
    return (
        <div className='w-64 h-96 bg-gradient-to-b from-blue-400 to-black rounded-3xl drop-shadow-xl m-5 hover:scale-105 transition-all overflow-hidden border border-white select-none '>
            <div className='h-32'>
                <img className='object-cover' src={gameData.image} />
            </div>
            <div className='h-auto items-center text-center mt-10'>
                <p className='text-white text-2xl font-thin'>{gameData.name}</p>
            </div>
            <div className='h-auto text-center my-5 '>
                <p>Release: {gameData.year}</p>
                <p>{gameData.genre}</p>
                <p>{gameData.rating}</p>
            </div>
            <div className='flex hover:scale-105 mt-6'>
                <button className='h-12 w-28 bg-blue-600 justify-center mx-auto rounded-xl' onClick={handleClick}>Buy ${gameData.price}</button>
            </div>

        </div>
    )
}

export default Card