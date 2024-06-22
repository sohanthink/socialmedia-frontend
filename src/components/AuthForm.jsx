import React from 'react'
import Image from './Image'
import logo from '../assets/logo/logo.png'

const AuthForm = () => {
    return (
        <div className='py-20'>
            <div className='align-center justify-center flex'>
                <Image source={logo} className="w-24" alt="logo" />
            </div>
            <h3 className='text-center font-GilroyRegular mb-5'>Sohans Chat</h3>
            <h4 className="font-Gilroybold text-center mb-2 text-xl">Registration</h4>
            <form className='space-y-3'>
                <input className='w-full border-dark border px-3 py-3 rounded-full' placeholder='First Name' type="text" />
                <input className='w-full border-dark border px-3 py-3 rounded-full' placeholder='Last Name' type="text" />
                <input className='w-full border-dark border px-3 py-3 rounded-full' placeholder='Username' type="text" />
                <input className='w-full border-dark border px-3 py-3 rounded-full' placeholder='Email' type="text" />
                <input className='w-full border-dark border px-3 py-3 rounded-full' placeholder='Password' type="text" />
                <button className='bg-dark px-4 py-2 rounded-full text-white block w-full'>Register</button>
                <h4 className='text-center font-GilroyRegular'>Already Registered? <u>Login here!!</u></h4>
            </form>
        </div>
    )
}

export default AuthForm