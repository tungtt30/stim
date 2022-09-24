import React from 'react'
import Navbar from './Navbar';
import Cart from './cart/Cart';



const Header = () => {
    return (
        <div className=''>
            <Navbar />
            <Cart />
        </div>
    )
}

export default Header