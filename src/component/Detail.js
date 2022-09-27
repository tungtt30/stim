import React from 'react'
import Divider from './Divider'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, addToWishlist } from '../Redux/action'

const Detail = ({ gameItem }) => {

    const { selectedGame } = useSelector((state) => state)
    const dispatch = useDispatch()

    let showBuy = selectedGame.name == '' ? false : true

    let only = (selectedGame.price - selectedGame.price * selectedGame.discount / 100)


    const handleClickBuy = () => {
        dispatch(addToCart(selectedGame))
    }
    const handleClickWishlist = () => {
        dispatch(addToWishlist(selectedGame))
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
            {showBuy && <div className='m-2'>
                <div className=''>
                    <div className='flex space-x-2'>
                        <span className='pt-1'>Price:</span>
                        <div className='h-10 w-16  border text-center pt-1 border-white rounded-md'>{selectedGame.price} $</div>
                        <span className='pt-1'>Discount:</span>
                        <div className='h-10 w-16 border text-red-400 text-center pt-1 border-white rounded-md'>{selectedGame.discount} %</div>
                        <span className='pt-1'>Only</span>
                        <div className='h-10 w-16 border text-red-400 text-center pt-1 border-white rounded-md'>{only} $</div>
                    </div>

                    <div className='mt-6 space-x-4'>
                        <button className=' h-12 w-auto p-2 border border-gray-300 rounded-md bg-blue-900 hover:bg-blue-700' onClick={handleClickBuy}>Add to cart</button>
                        <button className=' h-12 w-auto p-2 border border-gray-300 rounded-md hover:bg-slate-800' onClick={handleClickWishlist}>Add to wish list</button>
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default Detail