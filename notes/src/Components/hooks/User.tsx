import { useState } from 'react'

type AuthUser = {
    name: string,
    email: string
}

const User = () => {
    const [isLoggedIn, setIsLoggedIn] = useState<AuthUser>({} as AuthUser)
    const handleLoggedIn = () => {
        setIsLoggedIn({
            name: "Abhay Bisht",
            email: "abhayb2002@gmail.com"
        })
    }
    return (
        <div>
            <button onClick={handleLoggedIn}>Logged In</button>
            <div>{isLoggedIn.name}</div>
            <div>{isLoggedIn.email}</div>
        </div>
    )
}

export default User