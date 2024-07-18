import React, { useEffect, useState } from 'react'
import Feeling from '../../../svg/Feeling';
import EmojiPicker from 'emoji-picker-react';

const Emoji = ({ text, setText, textRef }) => {
    const [cursorPosition, setCursorPosition] = useState()
    const [showEmo, setShowEmo] = useState(false)


    const handleEmojiClick = ({ emoji }, e) => {
        const ref = textRef.current;
        ref.focus();

        const startPos = text.substring(0, ref.selectionStart);
        const endPos = text.substring(ref.selectionStart);

        const newText = startPos + emoji + endPos;
        setText(newText);
        setCursorPosition(startPos.length + emoji.length)
    };

    useEffect(() => {
        if (cursorPosition !== null) {
            textRef.current.selectionEnd = cursorPosition;
        }
    }, [cursorPosition])

    const toggleEmojiPicker = () => {
        setShowEmo((prev) => !prev);
        console.log("mnice");
        // showEmo ? setShowEmo(false) : setShowEmo(true)
    };

    return (
        <div onClick={toggleEmojiPicker} className='relative cursor-pointer'>
            <Feeling />
            {
                showEmo && (
                    <div className='absolute right-0 top-0 md:left-0 md:-top-[460px]'>
                        <EmojiPicker onEmojiClick={handleEmojiClick} />
                    </div>)
            }
        </div>
    )
}

export default Emoji