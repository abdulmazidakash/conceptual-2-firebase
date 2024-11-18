import React from 'react';

const Modal = () => {

	const handleSubmit = e =>{
		e.preventDefault();
	}
	return (
		<div>
			{/* Open the modal using document.getElementById('ID').showModal() method */}
			{/* <button className="btn" onClick={()=>document.getElementById('my_modal_5').showModal()}>open modal</button> */}
			<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
			<div className="modal-box">
			<form className="card-body" onSubmit={handleSubmit}>
				<div className="form-control">
					<label className="label">
						<span className="label-text">First Name</span>
					</label>
				<input name='fName' type="text" placeholder="First Name" className="input input-bordered" required />
				</div>

				<div className="form-control">
					<label className="label">
						<span className="label-text">Last Name</span>
					</label>
				<input name='lName' type="text" placeholder="Last Name" className="input input-bordered" required />
				</div>
				<div className="form-control">
					<label className="label">
						<span className="label-text">Email</span>
					</label>
				<input name='email' type="email" placeholder="email" className="input input-bordered" required />
				</div>
				<div className="form-control">
					<label className="label">
						<span className="label-text">Phone Number</span>
					</label>
				<input name='phone' type="text" placeholder="phone number" className="input input-bordered" required />
				</div>
				<div className="form-control">
					<label className="label">
						<span className="label-text">Appointment Date</span>
					</label>
				<input name='appointmentDate' type="date" placeholder="appointment date" className="input input-bordered" required />
				</div>
				<div className="form-control">
					<label className="label">
						<span className="label-text">Address</span>
					</label>
				<input name='address' type="text" placeholder="address" className="input input-bordered" required />
				</div>
				<button className='btn btn-success mt-4' type='submit'>Make Appointment</button>
			
			</form>

				<div className="modal-action justify-center">
					<form method="dialog">
						{/* if there is a button in form, it will close the modal */}
						<button className='btn btn-warning' type='submit'>Close</button>
					</form>
				</div>
			</div>
			</dialog>
		</div>
	);
};

export default Modal;