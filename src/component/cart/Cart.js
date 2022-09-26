import React from 'react'
import { useSelector } from 'react-redux'
import Divider from '../Divider'
const Cart = () => {
    const { cart } = useSelector(state => state)


    return (
        <div className='absolute bg-gradient-to-b from-black opa to-blue-800 h-64 text-white w-72 right-10 overflow-scroll scrollbar-hidden p-2 rounded-lg mt-1'>
            <p className='text-center p-2 text-lg'>My cart</p>
            <div className=''>
                {cart.map((item) => {
                    return (
                        <>
                            <div className='flex items-center '>
                                <div className='w-20 p-1 mx-1  overflow-hidden'>
                                    <img className='rounded-md' src={item.image} />
                                </div>
                                <div>
                                    <p>{item.name}</p>
                                </div>
                            </div>
                            <Divider />
                        </>
                    )
                })}
            </div>
        </div >
    )
}

export default Cart