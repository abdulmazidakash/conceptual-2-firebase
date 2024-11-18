import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Modal from '../Modal/Modal';
import { authContext } from '../AuthProvider/AuthProvider';

const Details = () => {

	const contextValue = useContext(authContext);
	// console.log(contextValue);

	const {cost, image, treatment, description} = useLoaderData();
	// console.log(singleData);


	return (
		<div
			className="hero min-h-screen"
			style={{
				backgroundImage:`url(${image})`,
				borderRadius: '20px',
			}}>
			<div className="hero-overlay bg-opacity-60"></div>
			<div className="hero-content text-neutral-content text-center">
				<div className="max-w-2xl">
				<h1 className="mb-5 text-5xl font-bold">{treatment}</h1>
				<p className="mb-5">
					{description}
				</p>
				<button onClick={()=>document.getElementById('my_modal_5').showModal()} className="btn btn-primary">Book Appointment</button>
				</div>
			</div>
			<Modal treatment={treatment}></Modal>
		</div>
	);
};

export default Details;