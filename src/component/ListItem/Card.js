import React from 'react'
import image from "../assets/edr.jpg"

const Card = () => {
    return (
        <div className="flex font-sans bg-white rounded-xl">
            <div className="flex-none w-32 rounded-xl p-2 ">
                <img src={image} alt="" className=" inset-0 w-full h-full object-cover rounded-lg" loading="lazy" />
            </div>
            <form className="flex-auto p-4 overflow-hidden">
                <div className="flex flex-wrap">
                    <h1 className="flex-auto text-lg font-semibold text-slate-900">
                        Elden Ring
                    </h1>
                    <div className="text-lg font-semibold text-slate-500">
                        $70
                    </div>
                    <div className="w-full flex-none text-sm font-medium text-slate-700 my-3">
                        From Software
                    </div>
                </div>
                <div className="flex space-x-4 mb-6 text-sm font-medium">
                    <div className="space-y-2">
                        <button className="h-12 px-6 font-semibold rounded-md border block border-slate-400 text-slate-900" type="button">
                            Add to wish list
                        </button>
                        <button className="h-10 px-6 font-semibold rounded-md bg-black block text-white" type="submit">
                            Buy now
                        </button>
                    </div>
                    <button className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-red-500 border border-red-600" type="button" aria-label="Like">
                        <svg width="20" height="20" fill="currentColor" aria-hidden="true">
                            <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                        </svg>
                    </button>
                </div>
            </form>
        </div>

    )
}

export default Card