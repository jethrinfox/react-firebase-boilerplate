import React, { createContext, useEffect, useReducer } from 'react';
import AppReducer from './AppReducer';
import { auth, googleProvider, githubProvider, facebookProvider } from '../config/firebase'
// react-firebase-hooks
import { useAuthState } from 'react-firebase-hooks/auth'

// Initial state
const initialState = {
    user: undefined,
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {

    const [state, dispatch] = useReducer(AppReducer, initialState);

    const [user] = useAuthState(auth);


    useEffect(() => {
        if (user) {
            dispatch({
                type: "USER_CHANGE",
                payload: user
            })
        }
    }, [user])


    async function signIn(provider) {
        switch (provider) {
            case 'google':
                await auth.signInWithPopup(googleProvider)
                break;
            case 'facebook':
                await auth.signInWithPopup(facebookProvider)
                break;
            case 'github':
                await auth.signInWithPopup(githubProvider)
                break;
            case 'anonymous':
                await auth.signInAnonymously()
                break;
            default:
                break;
        }
    }

    async function signOut() {
        await auth.signOut()
        dispatch({
            type: "USER_CHANGE",
            payload: undefined
        })
    }


    return (<GlobalContext.Provider value={{
        user: state.user,
        signIn,
        signOut,
    }}>
        {children}
    </GlobalContext.Provider>);
}