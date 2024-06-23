import React from 'react'
import AuthContents from '../components/AuthContents'
import logo from "../assets/logo/logo.png"
import Image from '../components/Image'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <>
            <Helmet>
                <title>Login</title>
            </Helmet>
            <div className='md:flex justify-center items-center h-screen gap-40'>
                <div className='md:w-[35%]'><AuthContents
                    title="Login to start chitchat with your guy."
                    s_title="sohans chat is a full fledeged chatting app where you can chat with your personal person. anyone wont gonna disturb."
                    paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel placeat mollitia ipsam? Vel placeat mollitia ipsam?" /></div>

                <div className='md:w-[20%]'>
                    <div className='py-20 mx-5 '>
                        <div className='align-center justify-center flex'>
                            <Image source={logo} className="w-24" alt="logo" />
                        </div>
                        <h3 className='text-center font-GilroyRegular mb-5'>Sohans Chat</h3>
                        <h4 className="font-Gilroybold text-center mb-2 text-xl">Login</h4>
                        <form className='space-y-3'>
                            <input className='w-full border-dark border px-3 py-3 rounded-full' placeholder='Email or UserName' type="text" />
                            <input className='w-full border-dark border px-3 py-3 rounded-full' placeholder='Password' type="text" />
                            <button className='bg-dark px-4 py-2 rounded-full text-white block w-full'>Login</button>
                            <h4 className='text-center font-GilroyRegular'>Not Registered? <Link to="/registration"><u>Register here!!</u></Link></h4>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login