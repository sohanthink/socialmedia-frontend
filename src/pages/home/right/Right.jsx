import React from 'react'
import RightFriends from './RightFriends'
import Story from './rightStory/Story'

const Right = () => {
    return (
        <>
            <div className='bg-white w-80'>
                <div className='flex justify-between px-3 pt-3'>
                    <span>Friend Requests</span>
                    <span className='text-link font-Gilroybold cursor-pointer'>See All</span>
                </div>
                <RightFriends />
                <RightFriends />
                <RightFriends />
            </div>
            <div className='bg-white p-3 w-80 mt-3'><Story /></div>
        </>
    )
}

export default Right