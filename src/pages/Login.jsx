import React from 'react'
import AuthContents from '../components/AuthContents'
import AuthForm from '../components/AuthForm'

const Login = () => {
    return (
        <div className='flex justify-center items-center h-screen gap-24'>
            <div className='w-[40%]'><AuthContents /></div>
            <div className='w-[25%]'><AuthForm /></div>
        </div>
    )
}

export default Login