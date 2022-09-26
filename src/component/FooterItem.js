import React from 'react'

const FooterItem = ({ text }) => {
    return (
        <p className='text-slate-400 hover:text-white cursor-pointer text-clip overflow-hidden'> {text}</p>
    )
}

export default FooterItem