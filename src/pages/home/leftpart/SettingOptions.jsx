import React, { useState } from 'react'

const SettingOptions = () => {
    const [visible, setVisible] = useState(false)

    const handleClick = () => {
        setVisible(true)
        if (visible) {
            setVisible(false)
        }
    }

    return (
        <div className='flex-col gap-5 bg-white font-GilroyExtrabold'>
            <div onClick={handleClick} className='px-5 py-2 mb-2 mx-2 hover:text-link hover:font-extrabold transition-all ease-in cursor-pointer'>Display & Accessibility</div>

            {
                visible &&
                <ul>
                    <li>nice</li>
                    <li>nice</li>
                </ul>
            }

            <div className='px-5 py-2 mb-2 mx-2 hover:text-link hover:font-extrabold transition-all ease-in cursor-pointer'>Logout</div>


        </div>
    )
}

export default SettingOptions