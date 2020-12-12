import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { FaFacebookSquare, FaGithubSquare, } from 'react-icons/fa'
import { AiFillGoogleSquare, AiOutlineUserAdd } from 'react-icons/ai'

const SignIn = () => {

    const { signIn } = useContext(GlobalContext)

    const handleSignIn = provider => signIn(provider)

    return (
        <>
            <button className="sign-in" onClick={() => handleSignIn("google")}><AiFillGoogleSquare /> Sign in with Google</button>
            <button className="sign-in" onClick={() => handleSignIn("facebook")}><FaFacebookSquare /> Sign in with Google</button>
            <button className="sign-in" onClick={() => handleSignIn("github")}><FaGithubSquare /> Sign in with GitHub</button>
            <button className="sign-in" onClick={() => handleSignIn("anonymous")}><AiOutlineUserAdd /> Sign in Anonymous</button>
        </>
    )
}

export default SignIn
