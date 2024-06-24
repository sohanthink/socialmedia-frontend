import React from 'react'
import Image from './Image'
import logo from '../assets/logo/logo.png'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAddUserMutation } from '../features/api/authApi';
import { Link, redirect, useNavigate, } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';


const AuthForm = () => {

    const [addUser, { isLoading, isSuccess, isError, error, data }] = useAddUserMutation();
    const navigate = useNavigate()
    const registration = async () => {
        try {
            const signUpMutation = await addUser({
                firstName: formik.values.firstName,
                lastName: formik.values.lastName,
                email: formik.values.email,
                userName: formik.values.userName,
                password: formik.values.password
            })

            if (signUpMutation?.data?.data) {

                toast.success(signUpMutation?.data.message)
                setTimeout(() => {
                    navigate('/')
                }, 4000);
            } else {
                const errmsg = signUpMutation.error?.data?.message
                toast.error(errmsg)
            }


        } catch (error) {
            console.error('Error during registration:', error);

        }
    }

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            userName: '',
            password: ''
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('First Name Required'),
            lastName: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Last Name Required'),
            email: Yup.string().email('Invalid email address').required('Email Required'),
            userName: Yup.string().required('Username Required'),
            password: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .min(6, 'Min 6 Character required')
                .required('Password Required'),
        }),
        onSubmit: () => {
            registration();
            formik.resetForm();
        }
    });

    // console.log(formik);

    return (
        <div className='py-20'>
            <Toaster />
            <div className='align-center justify-center flex'>
                <Image source={logo} className="w-24" alt="logo" />
            </div>
            <h3 className='text-center font-GilroyRegular mb-5'>Sohans Chat</h3>
            <h4 className="font-Gilroybold text-center mb-2 text-xl">Registration</h4>
            <form onSubmit={formik.handleSubmit} className='space-y-3'>
                <input className='w-full border-dark border px-3 py-3 rounded-full'
                    placeholder='First Name'
                    type="text"
                    name='firstName'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstName}
                    autoComplete='off'
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                    <p className='text-error font-GilroyRegular'>{formik.errors.firstName}</p>
                ) : null}

                <input className='w-full border-dark border px-3 py-3 rounded-full'
                    placeholder='Last Name'
                    type="text"
                    name='lastName'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastName}
                    autoComplete='off'
                />
                {formik.touched.lastName && formik.errors.lastName ? (
                    <p className='text-error font-GilroyRegular'>{formik.errors.lastName}</p>
                ) : null}

                <input className='w-full border-dark border px-3 py-3 rounded-full'
                    placeholder='Username'
                    type="text"
                    name='userName'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.userName}
                    autoComplete='off'
                />
                {formik.touched.userName && formik.errors.userName ? (
                    <p className='text-error font-GilroyRegular'>{formik.errors.userName}</p>
                ) : null}

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
                    type="text"
                    name='password'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                    autoComplete='off'
                />
                {formik.touched.password && formik.errors.password ? (
                    <p className='text-error font-GilroyRegular'>{formik.errors.password}</p>
                ) : null}
                {
                    !isLoading ?
                        <button type='submit' className='bg-dark px-4 py-2 rounded-full text-white block w-full'>Register</button>
                        :
                        <button disabled className='bg-dark px-4 py-2 rounded-full text-white block w-full'>Loading</button>
                }
                <h4 className='text-center font-GilroyRegular'>Already Registered? <Link to="/"><u>Login here!!</u></Link></h4>
            </form>
        </div>
    )
}

export default AuthForm