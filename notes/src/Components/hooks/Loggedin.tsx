import { useState } from 'react'

const Loggedin = () => {
    const [isLoggedIn , setIsLoggedIn] = useState(false)
    const handleLoggedIn = () => {
        setIsLoggedIn(true)
    }
    const handleLoggedOut = () => {
        setIsLoggedIn(false)
    }
  return (
    <div>
        <button onClick={handleLoggedIn}>Logged In</button>
        <button onClick={handleLoggedOut}>Logged Out</button>
        <div>User is {isLoggedIn ? "Yes" : "No"} Logged In</div>
    </div>
  )
}

export default Loggedin