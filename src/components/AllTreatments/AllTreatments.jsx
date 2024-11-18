import { useLoaderData } from "react-router-dom";
import ServiceCard from "../ServiceCard/ServiceCard";


const AllTreatments = () => {
	const services = useLoaderData();
	return (
		<div className='grid grid-cols-4 w-[80%] mx-auto max-w-[1200px] gap-2 mt-8 pb-8'>
				{
					services.map(service => <ServiceCard service={service}></ServiceCard>)
				}
			</div>
	);
};

export default AllTreatments;