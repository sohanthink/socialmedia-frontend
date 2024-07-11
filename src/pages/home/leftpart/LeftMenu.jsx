import React, { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import SettingOptions from './SettingOptions';
import clickOutside from '../../../function/clickOutside';

const LeftMenu = ({ data }) => {
    const [show, setShow] = useState(false);
    const outClicked = useRef(null)
    const Icon = data.icon;

    const handleClick = () => {
        setShow(!show);
        // if (show) {
        //     setShow(false)
        // } else {
        //     setShow(true)
        // }
    };

    clickOutside(outClicked, () => {
        setShow(false)
    })


    const settingDropdown = (
        <>
            <div onClick={handleClick}
                className={`flex md:gap-5 md:p-5 md:mb-3 md:mx-2 hover:bg-dark hover:text-white transition-all ease-in rounded-full cursor-pointer ${show && 'bg-dark text-white'}`}>
                <div>
                    <Icon />
                </div>
                <div className='hidden md:block'>
                    <p>{data.title}</p>
                </div>
            </div>

            <div ref={outClicked}>
                {show && <SettingOptions />}
            </div>
        </>
    );

    const regularLink = (
        <NavLink to={data.to}
            className='flex p-2 md:gap-5 bg-white md:p-5 md:mb-3 md:mx-2 hover:bg-dark hover:text-white transition-all ease-in rounded-full' >
            <div>
                <Icon />
            </div>
            <div className='hidden md:block'>
                <p>{data.title}</p>
            </div>
        </NavLink>
    );

    return (
        <>
            <div className='hidden md:block'>
                {data.title === 'Settings' ? settingDropdown : regularLink}
            </div>
            <div className='md:hidden'>
                {
                    regularLink
                }
            </div>
        </>
    );
};

export default LeftMenu;
