import React from 'react'
import { useSelector } from 'react-redux'
const Cart = () => {
    const { cart } = useSelector(state => state)


    return (
        <div className='absolute bg-white h-64 text-black w-72 right-10'>
            <p>This is my cart</p>
            {cart.map((item) => {
                return (
                    <p>{item.name}</p>
                )
            })}
        </div >
    )
}

export default Cart