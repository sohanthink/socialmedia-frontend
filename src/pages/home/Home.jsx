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
            <div>Home</div>
        </>
    )
}

export default Home