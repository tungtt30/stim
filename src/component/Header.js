import React from 'react'
import Navbar from './Navbar';
import Cart from './cart/Cart';
import { useSelector } from 'react-redux';


const Header = () => {
    const { isCartShow } = useSelector(state => state)


    return (
        <div className=''>
            <Navbar />
            {isCartShow && <Cart />}
        </div>
    )
}

export default Header