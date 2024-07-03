import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const LeftMenu = ({ data }) => {
    const [show, setShow] = useState(false);
    const Icon = data.icon;

    const handleClick = () => {
        console.log("clicked");
        setShow(!show);
    };

    const settingDropdown = (
        <>
            <div onClick={handleClick}
                className='flex gap-5 bg-white p-5 mb-3 mx-2 hover:bg-dark hover:text-white transition-all ease-in rounded-full cursor-pointer' >
                <div>
                    <Icon />
                </div>
                <div>
                    <p>{data.title}</p>
                </div>
            </div>
            {show && <div>showing things easily</div>}
        </>
    );

    const regularLink = (
        <NavLink
            to={data.to}
            className='flex gap-5 bg-white p-5 mb-3 mx-2 hover:bg-dark hover:text-white transition-all ease-in rounded-full'
        >
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
