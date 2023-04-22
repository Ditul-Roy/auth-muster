import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const users = "nahd";
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const updateName = (user, name) =>{
       return updateProfile(user, {
            displayName: name
        })
    }

    const logInUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInwithGoogle = () =>{
       return signInWithPopup(auth, googleAuthProvider)
    }

    const logOut = () =>{
        return signOut(auth)
    }

    const forgoten = (email) =>{
        return sendPasswordResetEmail(auth, email)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUer=>{
            console.log('state, changed', currentUer);
            setUser(currentUer);
            setLoading(false)
        });

        return () =>{
            unsubscribe()
        }
    },[])

    const userAuth = {
        user,
        createUser,
        updateName,
        logInUser,
        signInwithGoogle, 
        logOut,
        loading,
        forgoten,
    }

    return (
        <AuthContext.Provider value={userAuth}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;