import React, { useEffect, useState } from 'react'
import Image from '../../../components/Image'
import PostPopup from './PostPopup'

const PostBar = () => {
    const [PopupShow, setPopupShow] = useState(false)

    const handleclose = () => {
        setPopupShow(false)
    }

    const handleclick = () => {
        setPopupShow(true)
    }

    return (
        <>
            <div className='flex items-center justify-between p-5 bg-white' onClick={handleclick}>
                <div className='h-10 w-10 mr-5'>
                    <Image className="rounded-full" source="https://avatars.githubusercontent.com/u/83067253?v=4" />
                </div>
                <div className='w-4/5'>
                    <input className='w-full outline-none focus:hidden text-sm md:text-lg bg-white/0' placeholder='What is on your MInd?' type="text" />
                </div>
                <div>
                    <button className='px-3 py-2 bg-secondary_color text-nowrap text-white rounded-sm text-sm md:text-lg'>Publish It</button>
                </div>
            </div>
            {PopupShow && <PostPopup onClose={handleclose} />}
        </>
    )
}

export default PostBar