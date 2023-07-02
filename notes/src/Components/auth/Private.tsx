import React from 'react'
import Login from './Login'
import { ProfileProps } from './Profile'

type PrivateProps = {
    isLoggedin: boolean,
    Component : React.ComponentType<ProfileProps>
}

const Private = ({ isLoggedin, Component } : PrivateProps) => {
    if (isLoggedin) {
        return <Component name="Abhay Bisht" email="abhayb2002@gmail.com" age={21}/>
    } else {
        return <Login />
    }
}

export default Private