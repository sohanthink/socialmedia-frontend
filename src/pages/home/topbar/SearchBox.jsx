import React, { useEffect, useRef } from 'react'
import { SearchIcon } from '../../../svg/SearchIcon'

const SearchBox = () => {
    const inputBox = useRef(null)

    useEffect(() => {
        inputBox.current.focus()
    }, [])

    return (
        <div className='bg-secondary_color p-3 rounded-3xl w-60  h-96'>
            <div className='flex gap-3 border p-2 rounded-3xl'>
                <div><SearchIcon /></div>
                <div>
                    <input ref={inputBox} className='bg-secondary_color focus:outline-none' />
                </div>
            </div>
            <div>
                <p className='py-3 font-bold'>Recent searches</p>
            </div>
        </div>
    )
}

export default SearchBox