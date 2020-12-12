import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const SignOut = () => {

    const { signOut } = useContext(GlobalContext)

    const handleSignOut = () => signOut()

    return <button onClick={() => handleSignOut()}>Sign Out</button>

}

export default SignOut
