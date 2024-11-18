import React from 'react';
import Banner from '../Banner/Banner';
import { NavLink, useLoaderData } from 'react-router-dom';
import ServiceCard from '../ServiceCard/ServiceCard';
import FeedBack from '../FeedBack/FeedBack';

const Home = () => {

	const services = useLoaderData();
	// console.log(services);

	const { serviceData, feedBackData } = services;
	return (
		<div>
			<Banner></Banner>
			<div className='grid grid-cols-4 w-[80%] mx-auto max-w-[1200px] gap-2 mt-8'>
				{
					serviceData.slice(4,8).map(service => <ServiceCard service={service}></ServiceCard>)
				}
			</div>


			<button className='btn btn-info mx-auto block mt-4'>
				<NavLink to='/allTreatments'>Show More</NavLink>
			</button>

			<FeedBack feedBackData={feedBackData}></FeedBack>
		</div>
	);
};

export default Home;