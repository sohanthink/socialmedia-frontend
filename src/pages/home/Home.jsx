import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useSelector } from 'react-redux'
import Story from './right/rightStory/Story'


const Home = () => {
    const { userInfo } = useSelector((state) => state.registration)

    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <div>
                <div className='bg-white p-3 w-full mt-3 md:hidden'><Story /></div>
            </div>
            <h2>home things</h2>
        </>
    )
}

export default Home