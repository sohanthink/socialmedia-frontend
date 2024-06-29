import React from 'react'

const LeftMenu = ({ data }) => {
    console.log(data);
    const Icon = data.icon
    return (
        <div className='flex gap-5 bg-white p-5 mb-3 mx-2 hover:bg-dark hover:text-white transition-all ease-in rounded-full'>
            <div>
                <Icon />
            </div>
            <div>
                <p>{data.title}</p>
            </div>
        </div>
    )
}

export default LeftMenu 