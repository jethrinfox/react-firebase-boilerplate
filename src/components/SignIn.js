import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { FaFacebookSquare, FaGithubSquare, } from 'react-icons/fa'
import { AiFillGoogleSquare, AiOutlineUserAdd, AiOutlineUser } from 'react-icons/ai'


const SignIn = () => {

    const { signIn } = useContext(GlobalContext)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSignIn = provider => signIn(provider)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (password.length > 3) {
            signIn("password", email, password)
            setEmail('')
            setPassword('')
        }
    }

    return (
        <div className="wrapper fadeInDown">
            <div id="formContent">
                <h2 className="active"> Sign In </h2>

                <div className="fadeIn first">
                    <AiOutlineUser id="icon" />
                </div>

                <form onSubmit={handleSubmit}>
                    <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" id="login" className="fadeIn second" name="email" placeholder="email" />
                    <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" id="password" className="fadeIn third" name="password" placeholder="password" />
                    <input type="submit" className="fadeIn fourth" value="Log In" />
                </form>

                <div className="oauth-providers">
                    <button className="sign-in" id="google" onClick={() => handleSignIn("google")}><AiFillGoogleSquare /> Sign in with Google</button>
                    <button className="sign-in" id="facebook" onClick={() => handleSignIn("facebook")}><FaFacebookSquare /> Sign in with Google</button>
                    <button className="sign-in" id="github" onClick={() => handleSignIn("github")}><FaGithubSquare /> Sign in with GitHub</button>
                    <button className="sign-in" id="anonymous" onClick={() => handleSignIn("anonymous")}><AiOutlineUserAdd /> Sign in Anonymous</button>
                </div>
                <div id="formFooter">
                    <a className="underlineHover" href="#/">Forgot Password?</a>
                </div>

            </div>
        </div>
    )
}

export default SignIn
