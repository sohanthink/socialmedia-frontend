import React from 'react'
import AuthContents from '../../components/AuthContents'
import AuthForm from '../../components/AuthForm'
import { Helmet } from 'react-helmet-async'

const Registration = () => {
    return (
        <>
            <Helmet>
                <title>Registration</title>
            </Helmet>
            <div className='md:flex justify-center items-center md:h-screen md:gap-40'>
                <div className='md:w-[35%] w-full'><AuthContents title="Chats That Always on your side." s_title="sohans chat is a full fledeged chatting app where you can chat with your personal person. anyone wont gonna disturb." paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel placeat mollitia ipsam? Vel placeat mollitia ipsam?" /></div>
                <div className='md:w-[20%] mx-5'><AuthForm /></div>
            </div>
        </>
    )
}

export default Registration