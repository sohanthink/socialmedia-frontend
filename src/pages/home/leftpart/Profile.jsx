import React from 'react'
import Image from '../../../components/Image'

const Profile = () => {
    return (
        <div className='flex bg-white p-3'>
            <div className='h-14 w-14 mr-5'>
                <Image className="rounded-full" source="https://avatars.githubusercontent.com/u/83067253?v=4" />
            </div>
            <div className=''>
                <h4 className='capitalize'>muhammad sohan mollah</h4>
                <h4 className='text-link font-Gilroybold'>@sohanthink</h4>
            </div>
        </div>
    )
}

export default Profile