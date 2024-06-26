import React from 'react'

const AuthContents = ({ title, s_title, paragraph }) => {
    return (
        <div className="py-14 md:py-44 font-GilroyRegular text-white bg-dark px-14 md:px-20 space-y-5 rounded-md">
            <h3 className="text-6xl text-gray-400" > {title}</h3 >
            <h3>{s_title}</h3>
            <div className="bg-secondary_color rounded-md text-dark p-5">
                <h3 className='text-sm md:text-lg'>{paragraph}</h3>
            </div>
        </div >
    )
}

export default AuthContents