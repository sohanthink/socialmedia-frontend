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
                className={`flex gap-5 p-5 mb-3 mx-2 hover:bg-dark hover:text-white transition-all ease-in rounded-full cursor-pointer ${show && 'bg-dark text-white'}`}>
                <div>
                    <Icon />
                </div>
                <div>
                    <p>{data.title}</p>
                </div>
            </div>

            <div ref={outClicked}>
                {show && <SettingOptions />}
            </div>
        </>
    );

    const regularLink = (
        <NavLink
            to={data.to}
            className='flex gap-5 bg-white p-5 mb-3 mx-2 hover:bg-dark hover:text-white transition-all ease-in rounded-full' >
            <div>
                <Icon />
            </div>
            <div>
                <p>{data.title}</p>
            </div>
        </NavLink>
    );

    return (
        <>
            {data.title === 'Settings' ? settingDropdown : regularLink}
            {/* {settingDropdown} */}
        </>
    );
};

export default LeftMenu;
