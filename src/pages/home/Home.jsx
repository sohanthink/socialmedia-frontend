import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useSelector } from 'react-redux'
import Story from './right/rightStory/Story'
import Post from './post/Post'


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
            <div>
                <Post />
            </div>
        </>
    )
}

export default Home