import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { FaSignOutAlt } from 'react-icons/fa'
import { AiOutlineUser } from 'react-icons/ai'


const SignOut = () => {

    const { signOut } = useContext(GlobalContext)

    const handleSignOut = () => signOut()

    return (
        <div className="wrapper fadeInDown">
            <div id="formContent">
                <h2 className="active"> Sign Out </h2>
                <div className="fadeIn first">
                    <AiOutlineUser id="icon" />
                </div>

                <div id="formFooter">
                    <button className="sign-out" onClick={() => handleSignOut()}><FaSignOutAlt />Sign Out</button>
                </div>

            </div>
        </div>
    )

}

export default SignOut
