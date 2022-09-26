import React from 'react'
import GodLogo from '../assets/GodLogo.webp'
import FooterItem from './FooterItem'




const Footer = () => {
    return (
        <>
            <div className='bg-gradient-to-b from-black to-blue-900 h-48 grid-cols-4 grid gap-20  text-center text-white p-5'>
                <div className=' '>
                    <div>About GodSeeker</div>
                    <img className='h-16' src={GodLogo} />
                    <p className='text-left '>The Godseeker is a Quest NPC in Hollow Knight who travelled to Hallownest seeking "gods"</p>
                </div>
                <div className='px-12'>
                    <div>Product</div>
                    <div className='text-left space-y-1'>
                        <FooterItem text='Game dedign' />
                        <FooterItem text='Game build' />
                        <FooterItem text='Game sale' />
                        <FooterItem text='Game Marketing' />
                    </div>
                </div>
                <div className='px-12'>
                    <div>Solution</div>
                    <div className='text-left space-y-1'>
                        <FooterItem text='Game engine' />
                        <FooterItem text='Graphic solution' />
                        <FooterItem text='Software optimazation' />
                    </div>
                </div>
                <div className='px-6'>
                    <div className='mb-2'>Contact</div>
                    <div className='text-left space-y-4'>

                        <a className='flex space-x-2 leading-4' href='https://github.com/tungtt30' target='_blank' >
                            <i className="fa-brands fa-github"></i>
                            <FooterItem text='tungtt30' />
                        </a>
                        <a className='flex space-x-2 leading-4' href='https://www.linkedin.com/in/trinh-tung-213863224/' target='_blank'>
                            <i className="fa-brands fa-linkedin"></i>
                            <FooterItem text='trinh-tung-213863224' />
                        </a>
                        <a className='flex space-x-2 leading-4' href='' target='_blank'>
                            <i className="fa-brands fa-facebook"></i>
                            <FooterItem text='Facebook/userfb' />
                        </a>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Footer