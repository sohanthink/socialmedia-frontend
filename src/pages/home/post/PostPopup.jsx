import React, { useEffect, useRef, useState } from 'react';
import { CircleCloseIcon } from '../../../svg/CircleClose';
import { Media } from '../../../svg/Media';
import Feeling from '../../../svg/Feeling';
import Emoji from './Emoji';

const PostPopup = ({ onClose }) => {
    const [text, setText] = useState('');
    const textRef = useRef(null);


    return (
        <div className='absolute top-0 left-0 w-full h-screen bg-blur z-10 flex flex-col items-center justify-center'>
            <div className='w-4/5 md:w-1/3 bg-white p-5 flex justify-between border-b border-gray'>
                <h4 className='font-Gilroybold text-xl text-dark'>Create Post</h4>
                <div className="cursor-pointer text-secondary_color" onClick={onClose}>
                    <CircleCloseIcon />
                </div>
            </div>
            <div className='bg-white p-5 w-4/5 md:w-1/3'>
                <textarea
                    onChange={(e) => setText(e.target.value)}
                    ref={textRef}
                    className='w-full h-28 outline-none'
                    value={text}
                    name="post"
                    placeholder="What's on your mind?"
                ></textarea>
            </div>
            <div className='bg-white p-5 w-4/5 md:w-1/3 flex justify-between items-center'>
                <div className='bg-gray text-white rounded-sm w-8 h-8'></div>
                <div>
                    <Emoji textRef={textRef} text={text} setText={setText} />
                </div>
            </div>
            <div className='bg-white p-2 w-4/5 md:w-1/3'>
                <div className='border p-4 border-gray flex justify-between items-center'>
                    <button className='bg-link px-3 py-2 text-white rounded-sm'>Post</button>
                    <div className='flex gap-3 cursor-pointer'>
                        <Media />
                        <Feeling />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostPopup;
