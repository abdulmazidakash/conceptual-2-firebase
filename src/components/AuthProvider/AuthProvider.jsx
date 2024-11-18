import { 
	createUserWithEmailAndPassword, 
	signInWithEmailAndPassword, 
	signOut,
	GoogleAuthProvider,
	signInWithPopup,
	onAuthStateChanged

} from "firebase/auth";
import React, { createContext, useEffect, useState } from 'react';
import auth from "../../firebase/firebase.config";

export const authContext = createContext();

const AuthProvider = ({routes}) => {

	const googleProvider = new GoogleAuthProvider();

	const [user, setUser] = useState(null);

	const handleRegister = (email, password) =>{
		createUserWithEmailAndPassword(auth, email, password)
	}

	const handleLogin = (email, password) =>{
		signInWithEmailAndPassword(auth, email, password)
	}

	const handleGoogleLogin = () =>{
		signInWithPopup(auth, googleProvider)
	}

	const handleLogOut = () =>{
		signOut(auth)
	}

	const authInfo = {
		handleRegister,
		handleLogin,
		handleGoogleLogin,
		handleLogOut
	}


	useEffect(() =>{
		const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
			console.log(currentUser);

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