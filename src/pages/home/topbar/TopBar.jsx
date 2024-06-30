import React from 'react'
import logo from '../../../assets/logo/logo.png'
import Image from '../../../components/Image'
import { SearchIcon } from '../../../svg/SearchIcon'


export const TopBar = () => {
    return (
        <div className='mb-2 mx-20 flex items-center justify-between'>
            <div><Image className="h-20 w-20" source={logo} /></div>
            <div className='flex bg-secondary_color gap-3 p-3 rounded-3xl w-60'>
                <div><SearchIcon /></div>
                <div><input className='bg-secondary_color focus:outline-none' /></div>
            </div>
            <div className='flex bg-secondary_color gap-3 p-3 rounded-3xl w-60 absolute top-4 right-[80px] h-96'>
                <div><SearchIcon /></div>
                <div><input className='bg-secondary_color focus:outline-none' /></div>
            </div>
        </div>
    )
}
