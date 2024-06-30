import React from 'react'
import Profile from './Profile'
import { Data } from './Data'
import LeftMenu from './LeftMenu'

const Left = () => {
    return (
        <>
            <Profile />
            <div className='mt-2 bg-white py-3'>
                {
                    Data.map((data, index) => (
                        <LeftMenu key={index} data={data} />
                    ))
                }
            </div>
        </>
    )
}

export default Left