import React, { useContext } from 'react';
import { authContext } from '../AuthProvider/AuthProvider';

const Register = () => {

	const {handleRegister} = useContext(authContext);

	const handleSubmit = e =>{
		e.preventDefault();

		const name = e.target.name.value;
		const imageUrl = e.target.imageUrl.value;
		const email = e.target.email.value;
		const password = e.target.password.value;
		const confirmPassword = e.target.confirmPassword.value;

		console.log(name, imageUrl, email, password, confirmPassword);

		handleRegister(email, password);
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

				<button className='btn btn-info mt-4'>Submit</button>
			
			</form>
		</div>
	);
};

export default Register;