import { 
	createUserWithEmailAndPassword, 
	signInWithEmailAndPassword, 
	signOut,
	GoogleAuthProvider,
	signInWithPopup,
	onAuthStateChanged,
	updateProfile

} from "firebase/auth";
import React, { createContext, useEffect, useState } from 'react';
import auth from "../../firebase/firebase.config";

export const authContext = createContext();

const AuthProvider = ({routes}) => {

	const googleProvider = new GoogleAuthProvider();

	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);


	const handleRegister = (email, password) =>{
		return createUserWithEmailAndPassword(auth, email, password)
	}

	const handleLogin = (email, password) =>{
		return signInWithEmailAndPassword(auth, email, password)
	}

	const handleGoogleLogin = () =>{
		return signInWithPopup(auth, googleProvider)
	}

	const manageProfile = (name, image) => {
		return updateProfile(auth, currentUser, {
			displayName:name, 
			photoURL:image,
		})
	}

	const handleLogOut = () =>{
		signOut(auth)
	}

	const authInfo = {
		handleRegister,
		handleLogin,
		handleGoogleLogin,
		handleLogOut,
		manageProfile,
		user,
		setUser,
		loading,
		setLoading,
	}


	useEffect(() =>{
		const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
			// console.log(currentUser);
			
			if(currentUser){
				setUser(currentUser);
			}else{
				setUser(null);
			}
			setLoading(false);

			return () =>{
				unsubscribe();
			}
		})
	}, [])
	return (
		<div>
			<authContext.Provider value={authInfo}>{routes}</authContext.Provider>
		</div>
	);
};

export default AuthProvider;