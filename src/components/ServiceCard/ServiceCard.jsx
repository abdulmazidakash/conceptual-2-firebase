

const ServiceCard = ({ service }) => {
	// console.log(service);

	const { treatment, image, description, cost } = service;

	return (
		<div className="card bg-base-100 shadow-xl">
			<figure>
				<img
				src={image}
				alt="Shoes" />
			</figure>
			<div className="card-body">
				<h2 className="card-title" title={treatment}>
				{treatment.slice(0,5)}...
				<div className="badge badge-secondary w-24">$ {cost}</div>
				</h2>
				<p title={description}>{description.slice(0,100)}...</p>
				<div className="card-actions justify-end">

				<button className="badge badge-outline bg-success text-white font-bold p-4">Checkout More</button>
				</div>
			</div>
		</div>
	);
};

export default ServiceCard;