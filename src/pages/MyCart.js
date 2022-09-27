import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Divider from '../component/Divider'
import today from '../utils/dateFormat'
import { deleteFromCart, pay } from '../Redux/action'


const MyCart = () => {
    const [showModal, setShowModal] = useState('hidden')
    const gameState = useSelector(state => state)
    const dispatch = useDispatch()
    const handleDelete = (index) => {
        dispatch(deleteFromCart(index))
    }
    let total = 0

    let cart = gameState.cart
    if (cart.length != 0) {
        total = cart.reduce((totale, item) => {
            totale = totale + (item.price) - (item.price) * (item.discount) / 100
            return totale
        }, 0)
    }

    const handlePay = () => {

        if (gameState.userWallet < total) {
            setShowModal('')
            return
        }
        dispatch(pay(total))
    }

    const handleModal = () => {
        setShowModal('hidden')
    }


    return (

        <>
            {/* modal */}
            <div className={`${showModal}`}>
                <div className='h-screen w-screen bg-black z-10 absolute opacity-30' onClick={handleModal}>

                </div>
                <div className='h-auto w-2/5 bg-white top-40 left-96 absolute z-20 p-4 rounded-2xl'>
                    <div className='flex text-center items-center space-x-4 '>

                        <span className='text-4xl text-red-600'><i className="fa-solid fa-circle-exclamation"></i></span>
                        <p className='text-xl'>Not enough balance !</p>
                    </div>
                    <div className='w-64 overflow-hidden rounded-lg items-center mx-auto my-3 '>
                        <img src='https://www.pngkey.com/png/detail/104-1044839_empty-wallet-png.png' />
                    </div>
                    <div className='flex space-x-4 mt-10 justify-evenly text-center '>
                        <p className=' h-10 w-20 border border-blue-600 font-semiboldbold rounded-lg pt-1 text-lg cursor-pointer' onClick={handleModal}>Top-up</p>
                        <p className=' h-10 w-20 border bg-red-600 font-semibold text-white rounded-lg pt-1 text-lg cursor-pointer' onClick={handleModal}>Cancel</p>
                    </div>
                </div>
            </div>

            {/* // --------------------TABLE---------------------- */}
            <div className='pb-5'>
                <div className='text-4xl mx-10 my-5'>
                    <p>MY CART</p>
                </div>
                <div className='flex'>
                    <div className="overflow-x-auto relative shadow-md sm:rounded-lg mx-10 w-3/5">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-800 uppercase bg-gray-200 dark:bg-gray-800 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="py-3 px-6">
                                        Product name
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        Unit price
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        Discount
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        Total
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        <span className="sr-only">Edit</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {gameState.cart.map((item, index) => {
                                    return (
                                        <tr key={item.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {item.name}
                                            </th>
                                            <td className="py-4 px-6">
                                                $ {item.price}
                                            </td>
                                            <td className="py-4 px-6">
                                                {item.discount} %
                                            </td>
                                            <td className="py-4 px-6">
                                                $ {item.price - item.discount * item.price / 100}
                                            </td>
                                            <td className="py-4 px-6 text-right">
                                                <button className='h-8 w-20 bg-red-700 rounded-lg text-white' onClick={() => handleDelete(index)}>Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>


                    {/* --------------------INVOICE------------------------------ */}

                    <div className='h-2/3 w-2/5 bg-slate-200 mr-10 shadow-lg rounded-xl'>
                        <div className='text-center text-xl font-bold m-3'>
                            <p>Invoice</p>
                        </div>
                        <Divider />
                        <div>
                            <div className=''>
                                <div className='flex justify-between my-2 p-2'>
                                    <div className='ml-4 font-mono' >
                                        <p className='text-xl'>Wallet: $ {gameState.userWallet}</p>
                                        <p className='text-base'>Due Dec 31, 2022</p>
                                    </div>
                                    <div className='mr-4'>
                                        <img className='object-cover h-16' src='https://oceanair.net/wp-content/uploads/2020/07/Invoice-Icon.png' />
                                    </div>
                                </div>
                                <div className='flex ml-3'>
                                    <div className='m-4'>
                                        <p>Invoice code:</p>
                                        <p>Account name:</p>
                                        <p>Date Issued:</p>
                                    </div>
                                    <div className='m-4'>
                                        <p>#2077</p>
                                        <p>Tung Trinh</p>
                                        <p>{today}</p>
                                    </div>
                                </div>
                                <div className='ml-10 my-2 text-xl font-bold'>
                                    <p>Total: $ {total}</p>
                                </div>
                                <Divider />
                            </div>
                            <div className='h-auto w-full ml-10'>
                                <div className='m-4 text-base'>
                                    <p>Select a payment method: </p>
                                </div>
                                <div className='flex space-x-2 m-3'>
                                    <div className='h-11 w-20 border border-black rounded-lg text-center pt-2 hover:bg-white cursor-pointer'>
                                        <i className="fa-regular fa-credit-card"></i>
                                    </div>
                                    <div className='h-11 w-20 border border-black rounded-lg text-center pt-2 hover:bg-white cursor-pointer'>
                                        <i className="fa-solid fa-building-columns"></i>

                                    </div>
                                    <div className='h-11 w-20 border border-black rounded-lg text-center pt-2 hover:bg-white cursor-pointer'>
                                        <i className="fa-brands fa-cc-visa"></i>

                                    </div>
                                    <div className='h-11 w-10 border border-black rounded-lg text-center pt-2 hover:bg-white cursor-pointer'>
                                        <i className="fa-solid fa-ellipsis"></i>
                                    </div>
                                </div>
                                <div className='space-y-1'>
                                    <input placeholder=' 1234 1234 1235 1236' className='w-72 h-7 rounded-lg border border-violet-800 mx-2 p-1' type='number' />
                                    <div className='space-x-2'>
                                        <input placeholder='MM/YY' className='w-36 h-7 rounded-lg border border-violet-800 mx-2 p-1' type='date' />
                                        <input placeholder='cvv: 123' className='w-32 h-7 rounded-lg border border-violet-800 mx-2 p-1 ' />
                                    </div>
                                </div>
                                <div className='bg-green-500 rounded-lg w-60 text-white m-4 p-2 cursor-pointer text-center text-lg hover:bg-green-800' onClick={handlePay}>
                                    Pay
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default MyCart