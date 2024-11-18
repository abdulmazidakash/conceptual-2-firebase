import { useLoaderData } from "react-router-dom";
import ServiceCard from "../ServiceCard/ServiceCard";


const AllTreatments = () => {
	const services = useLoaderData();
	return (
		<div className='grid grid-cols-4 gap-2 my-8 w-[80%] mx-auto max-w-[1200px] rounded-lg mt-8'>
				{
					services.map(service => <ServiceCard service={service}></ServiceCard>)
				}
			</div>
	);
};

export default AllTreatments;