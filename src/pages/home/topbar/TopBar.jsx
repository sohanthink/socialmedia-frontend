import React, { useRef, useState } from 'react'
import logo from '../../../assets/logo/logo.png'
import Image from '../../../components/Image'
import { SearchIcon } from '../../../svg/SearchIcon'
import SearchBox from './SearchBox'
import clickOutside from '../../../function/clickOutside'
import LeftMenu from '../leftpart/LeftMenu'
import { Data } from '../leftpart/Data'


export const TopBar = () => {
    const outClick = useRef(null);
    const [show, setShow] = useState(false)

    clickOutside(outClick, () => {
        setShow(false)
    })

    return (
        <div className='mx-2 my-2 md:mx-20 flex items-center justify-between'>
            <div className='hidden md:block'>
                <Image className="h-20 w-20 object-cover bg-cover" source={logo} />
            </div>

            {/* show profile image on mobile device */}
            <div className='h-10 w-10 mr-5 md:hidden'>
                <Image className="rounded-full" source="https://avatars.githubusercontent.com/u/83067253?v=4" />
            </div>

            <div className='flex md:hidden'>
                {
                    Data.map((data, index) => (
                        <div className="last:hidden" key={index}><LeftMenu data={data} /></div>
                    ))
                }
            </div>

            <div className='flex bg-secondary_color gap-3 p-3 rounded-3xl w-auto md:w-60' onClick={() => setShow(true)}>
                <div><SearchIcon /></div>
                <div className='hidden md:block'><input className='bg-secondary_color focus:outline-none w-5 md:w-auto' /></div>
            </div>

            <div ref={outClick} className='absolute top-0 right-0 md:top-3 md:right-[80px]'>
                {
                    show && <SearchBox />
                }
            </div>
        </div>
    )
}
