import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useSelector } from 'react-redux'


const Home = () => {
    const { userInfo } = useSelector((state) => state.registration)

    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <h2>home things</h2>
        </>
    )
}

export default Home