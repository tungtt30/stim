import React from 'react'
import { useDispatch, useSelector } from 'react-redux'


const MyCart = () => {
    const gameState = useSelector(state => state)
    const dispatch = useDispatch()
    const handleDelete = () => {

    }
    return (
        <div className='h-screen'>
            <div className='text-4xl mx-10 my-5'>
                <p>MY CART</p>
            </div>
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
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {item.name}
                                    </th>
                                    <td className="py-4 px-6">
                                        {item.price}
                                    </td>
                                    <td className="py-4 px-6">
                                        {item.discount}
                                    </td>
                                    <td className="py-4 px-6">
                                        {item.price - item.discount * item.price}
                                    </td>
                                    <td className="py-4 px-6 text-right">
                                        <button className='h-8 w-20 bg-red-700 rounded-lg text-white' onClick={handleDelete}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div >
    )
}

export default MyCart