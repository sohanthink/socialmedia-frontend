import React from 'react'
import { Outlet } from 'react-router-dom'
import Right from '../pages/home/right/Right'
import Left from '../pages/home/leftpart/Left'
import { TopBar } from '../pages/home/topbar/TopBar'

const RootLayout = () => {
    return (
        <div className='bg-[#f2f1f1] font-GilroyRegular'>
            <div className='bg-white py-2 md:py-0'>
                <TopBar />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-[1fr,3fr,1fr] mx-5 md:mx-20 gap-3'>
                <div className='hidden md:block'><Left /></div>
                <div><Outlet /></div>
                <div className='hidden md:block'><Right /></div>
            </div>
        </div>
    )
}

export default RootLayout