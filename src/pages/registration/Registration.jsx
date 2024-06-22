import React from 'react'
import AuthContents from '../../components/AuthContents'
import AuthForm from '../../components/AuthForm'

const Registration = () => {
    return (
        <div className='flex justify-center items-center h-screen gap-40'>
            <div className='w-[35%]'><AuthContents title="Chats That Always on your side." s_title="sohans chat is a full fledeged chatting app where you can chat with your personal person. anyone wont gonna disturb." paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel placeat mollitia ipsam? Vel placeat mollitia ipsam?" /></div>
            <div className='w-[20%]'><AuthForm /></div>
        </div>
    )
}

export default Registration