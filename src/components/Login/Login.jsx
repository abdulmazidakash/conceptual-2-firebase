import React, { useContext, useState } from 'react';
import { authContext } from '../AuthProvider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {

	const {handleLogin, handleGoogleLogin} = useContext(authContext);
	const [error, setError] = useState('');
	const location = useLocation();
	// console.log(location);
	const navigate = useNavigate();

	const handleSubmit = e =>{
		e.preventDefault();

		const email = e.target.email.value;
		const password = e.target.password.value;

		// console.log(email, password);

		handleLogin(email, password)
			.then(res => {
				navigate(location.state.from)
			})
			.catch(err =>{
				setError(err.message);
			})
	}

	const googleLoginHandler = () =>{
		handleGoogleLogin()
			.then(res =>{
				navigate(location.state.from)
			})
	}
	return (
		<div className='w-6/12 mx-auto shadow-lg mt-8'>
			<form className="card-body " onSubmit={handleSubmit}>
				
				<div className="form-control">
					<label className="label">
						<span className="label-text">Email</span>
					</label>
				<input name='email' type="email" placeholder="email" className="input input-bordered" required />
				</div>
				<div className="form-control">
					<label className="label">
						<span className="label-text">Password</span>
					</label>
				<input name='password' type="text" placeholder="password" className="input input-bordered" required />
				</div>

				<button className='btn btn-info mt-4'>Login</button>
			
			</form>
			{error && <p className='text-red-500'>{error.split('/')[1].slice(0,18)}</p> }

			<button onClick={googleLoginHandler}>google login</button>
			{/* <button className="btn">Logout</button> */}
		</div>
	);
};

export default Login;