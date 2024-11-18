import React, { useContext, useState } from 'react';
import { authContext } from '../AuthProvider/AuthProvider';

const Register = () => {

	const {handleRegister, manageProfile} = useContext(authContext);
	const [error, setError] = useState('');

	const handleSubmit = e =>{
		e.preventDefault();
		setError('');

		const name = e.target.name.value;
		const imageUrl = e.target.imageUrl.value;
		const email = e.target.email.value;
		const password = e.target.password.value;
		const confirmPassword = e.target.confirmPassword.value;

		if(password.length < 6){
			setError('password must contain at least 6 characters');
			return;
		}

		if(password !== confirmPassword){
			setError('did not match password');
			return;
		}

		if(!/[a-z]/.test(password)){
			setError('password must contain at least one lowercase letter');
			return;
		}

		if(!/[A-Z]/.test(password)){
			setError('password must contain at least one uppercase letter');
			return;
		}

		// console.log(name, imageUrl, email, password, confirmPassword);

		handleRegister(email, password)
			.then(res =>{
				manageProfile(name, image);
			})
	}
	return (
		<div className='w-6/12 mx-auto shadow-lg mt-8'>
			<form className="card-body " onSubmit={handleSubmit}>
				<div className="form-control">
					<label className="label">
						<span className="label-text">Name</span>
					</label>
				<input name='name' type="text" placeholder="Name" className="input input-bordered" required />
				</div>

				<div className="form-control">
					<label className="label">
						<span className="label-text">Image</span>
					</label>
				<input name='imageUrl' type="text" placeholder="image url" className="input input-bordered" required />
				</div>
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
				<div className="form-control">
					<label className="label">
						<span className="label-text">Confirm Password</span>
					</label>
				<input name='confirmPassword' type="text" placeholder="confirm password" className="input input-bordered" required />
				</div>

				<button className='btn btn-info mt-4'>Register</button>
			
			</form>
			{error && <p className='text-red-500'>{error}</p>}
		</div>
	);
};

export default Register;