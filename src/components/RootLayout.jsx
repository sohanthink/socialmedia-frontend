import React from 'react'
import { Outlet } from 'react-router-dom'
import Right from '../pages/home/right/Right'
import Left from '../pages/home/leftpart/Left'
import { TopBar } from '../pages/home/topbar/TopBar'

const RootLayout = () => {
    return (
        <div className='bg-[#f1f0f0] font-GilroyRegular'>
            <div className='bg-white'>
                <TopBar />
            </div>

            <div className='grid grid-cols-[1fr,3fr,1fr] mx-20 gap-3'>
                <div><Left /></div>
                <div><Outlet /></div>
                <div><Right /></div>
            </div>
        </div>
    )
}

export default RootLayout