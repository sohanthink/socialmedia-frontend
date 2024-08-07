import React, { useState } from 'react'
import { Moon } from '../../../svg/Moon'
import { Logout } from '../../../svg/Logout'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logggedOutUsers } from '../../../features/users/authSlice'

const SettingOptions = () => {
    const [visible, setVisible] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate

    const handleClick = () => {
        setVisible(true)
        if (visible) {
            setVisible(false)
        }
    }

    const handleLogOut = () => {
        localStorage.removeItem("user")
        dispatch(logggedOutUsers())
        navigate("/login")
    }

    return (
        <div className='flex-col gap-5 bg-white font-GilroyExtrabold'>
            <div>
                <div onClick={handleClick} className='px-5 py-2 mb-2 mx-2 hover:text-link hover:font-extrabold transition-all ease-in cursor-pointer flex gap-3'>
                    <Moon />
                    Display & Accessibility
                </div>
                {
                    visible &&
                    <ul className='flex gap-3 ps-7 py-2 items-start'>
                        <li className='pt-1'><Moon /></li>
                        <li>
                            <span className='font-GilroyExtrabold'>Dark Mode</span>
                            <p className='text-sm font-GilroyRegular'>Lorem ipsum dolor, sit amet consectetur adipisi Repellat.</p>
                            <form className='pe-4 pt-3' action="">
                                <div className='flex justify-between'>
                                    <label htmlFor="on">on</label>
                                    <input id='on' name='darkMode' type="radio" />
                                </div>
                                <div className='flex justify-between'>
                                    <label htmlFor="off">off</label>
                                    <input id='off' name='darkMode' type="radio" />
                                </div>
                            </form>
                        </li>
                    </ul>
                }
            </div>

            <div onClick={handleLogOut} className='px-5 py-2 mb-2 mx-2 hover:text-link hover:font-extrabold transition-all ease-in cursor-pointer flex list-none gap-3'>
                <li><Logout /></li>
                <li>Logout</li>
            </div>


        </div>
    )
}

export default SettingOptions