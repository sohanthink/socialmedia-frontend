import React from 'react'
import AuthContents from '../components/AuthContents'
import logo from "../assets/logo/logo.png"
import Image from '../components/Image'
import { Helmet } from 'react-helmet-async'
import { Link, useNavigate } from 'react-router-dom'
import { useLoginUserMutation } from '../features/api/authApi'
import toast, { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik'
import * as Yup from 'yup';

const Login = () => {
    const [loginUser] = useLoginUserMutation();
    const navigate = useNavigate()

    const login = async (values) => {
        console.log("aiche");
        try {
            const signInMutation = await loginUser({
                email: formik.values.email,
                password: formik.values.password
            })

            console.log(signInMutation);

            if (signInMutation?.data?.data) {
                toast.success(signInMutation?.data.message)
                formik.resetForm();
                navigate('/home')
            } else {
                const errmsg = signInMutation.error?.data?.message
                toast.error(errmsg)
            }


        } catch (error) {
            console.error('Error during registration:', error);
        }
    }

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Email Required'),
            password: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .min(6, 'Min 6 Character required')
                .required('Password Required'),
        }),
        onSubmit: async (values) => {
            await login(values);
        }
    });
    // console.log(formik);

    return (
        <>
            <Toaster />
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

                        <form onSubmit={formik.handleSubmit} className='space-y-3'>
                            <input className='w-full border-dark border px-3 py-3 rounded-full'
                                placeholder='Email'
                                type="email"
                                name='email'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                                autoComplete='off'
                            />

                            {formik.touched.email && formik.errors.email ? (
                                <p className='text-error font-GilroyRegular'>{formik.errors.email}</p>
                            ) : null}

                            <input className='w-full border-dark border px-3 py-3 rounded-full'
                                placeholder='Password'
                                type="password"
                                name='password'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.password}
                                autoComplete='off'
                            />
                            {formik.touched.password && formik.errors.password ? (
                                <p className='text-error font-GilroyRegular'>{formik.errors.password}</p>
                            ) : null}

                            <button type='submit' className='bg-dark px-4 py-2 rounded-full text-white block w-full'>Login</button>

                            <h4 className='text-center font-GilroyRegular'>Not Registered? <Link to="/registration"><u>Register here!!</u></Link></h4>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login