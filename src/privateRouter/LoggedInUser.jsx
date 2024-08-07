import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import Login from '../pages/Login'

const LoggedInUser = () => {
    const { userInfo } = useSelector((state) => state.registration)
    return userInfo ? <Outlet /> : <Login />
}

export default LoggedInUser 