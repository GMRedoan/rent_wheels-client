import React, { useEffect, useState } from 'react';
import { AuthContext } from './authContext';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../firebase/firebase.config';

const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [userInfo, setUserInfo] = useState(null);
    const [loading, setLoading] = useState(true)

    //    sign in 
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // log in
    const Login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // log out
    const logout = () => {
        setLoading(true)
        return signOut(auth)
    }

    // sign in with google
    const googleProvider = new GoogleAuthProvider()
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    //   preserve the user

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (CurrentUser) => {
            setUser(CurrentUser)
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }
    }, [])

    // show info
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile)
            .then(() => {
                setUser({
                    ...auth.currentUser,
                    ...profile
                })
            })
    }

    // get user role
    useEffect(() => {
        if (!user?.email) return;

        fetch(`https://rent-wheels-server-jet.vercel.app/role/${user.email}`)
            .then(res => res.json())
            .then(data => setUserInfo(data))
            .catch(err => console.error(err));

    }, [user?.email]);

    const authData = {
        user,
        loading,
        setUser,
        createUser,
        Login,
        logout,
        googleLogin,
        updateUserProfile,
        userInfo,
        setUserInfo
    }
    return (
        <AuthContext value={authData}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;