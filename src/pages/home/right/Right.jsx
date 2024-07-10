import React from 'react'
import RightFriends from './RightFriends'

const Right = () => {
    return (
        <>
            <div className='bg-white'>
                <div className='flex justify-between px-3 pt-3'>
                    <span>Friend Requests</span>
                    <span className='text-link font-Gilroybold cursor-pointer'>See All</span>
                </div>
                <RightFriends />
                <RightFriends />
                <RightFriends />
            </div>
        </>
    )
}

export default Right