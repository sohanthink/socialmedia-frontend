import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useSelector } from 'react-redux'
import { TopBar } from './topbar/TopBar'
import Left from './leftpart/Left'
import Post from './post/Post'
import Right from './right/Right'

const Home = () => {
    const { userInfo } = useSelector((state) => state.registration)

    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>

            <div className='bg-[#D9D9D9] font-GilroyRegular'>
                <div className='mx-20'>
                    <TopBar />
                </div>

                <div className='grid grid-cols-[1fr,3fr,1fr] mx-20 gap-3'>
                    <div><Left /></div>
                    <div><Post /></div>
                    <div><Right /></div>
                </div>
            </div>
        </>
    )
}

export default Home