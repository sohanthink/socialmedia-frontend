import React, { useRef, useState } from 'react'
import logo from '../../../assets/logo/logo.png'
import Image from '../../../components/Image'
import { SearchIcon } from '../../../svg/SearchIcon'
import SearchBox from './SearchBox'
import clickOutside from '../../../function/clickOutside'


export const TopBar = () => {
    const outClick = useRef(null);
    const [show, setShow] = useState(false)

    clickOutside(outClick, () => {
        setShow(false)
    })

    return (
        <div className='mb-2 mx-20 flex items-center justify-between'>
            <div><Image className="h-20 w-20 object-cover bg-cover" source={logo} /></div>
            <div className='flex bg-secondary_color gap-3 p-3 rounded-3xl w-60' onClick={() => setShow(true)}>
                <div><SearchIcon /></div>
                <div><input className='bg-secondary_color focus:outline-none' /></div>
            </div>

            <div ref={outClick} className='absolute top-3 right-[80px]'>
                {
                    show && <SearchBox />
                }
            </div>
        </div>
    )
}
