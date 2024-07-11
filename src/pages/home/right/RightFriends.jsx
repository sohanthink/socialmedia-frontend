import React from 'react'
import Image from '../../../components/Image'

const RightFriends = () => {
    return (
        <div className='border-b border-gray'>
            <div className='flex gap-3 items-center justify-center my-2 p-3'>
                <div className='w-[20%] h-16'>
                    <Image className="bg-cover h-full rounded object-cover" source="https://scontent.fdac157-1.fna.fbcdn.net/v/t39.30808-1/439426752_1114499739876223_724619995359030685_n.jpg?stp=c0.142.480.480a_dst-jpg_p480x480&_nc_cat=105&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeEhex-IEYxGE_1WrHy24hfrp1IdgCY4OOqnUh2AJjg46gT4cUwbUAW6aR0zK0L9sIgfUNER1aPaWCGBug2Xwtnr&_nc_ohc=mPN8TwN7TpIQ7kNvgH7EsEj&_nc_ht=scontent.fdac157-1.fna&oh=00_AYDlWsvFgRkgaaQQWFtudC5FxzY4j1v68XHVNrsRaa3Wjw&oe=6694CA8C" />
                </div>
                <div className='flex flex-col gap-2 w-[80%]'>
                    <div className='flex justify-between'>
                        <span className='text-sm font-bold'>Muhammad sohan Mollah</span>
                        <span className='text-sm font-thin text-gray'>12h</span>
                    </div>
                    <div className='flex gap-3'>
                        <button className='bg-link text-white px-2 py-1 text-sm'>Accept</button>
                        <button className='bg-error text-white px-2 py-1 text-sm'>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightFriends