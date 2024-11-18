import React from 'react';

const FeedBack = ({ feedBackData }) => {
	console.log(feedBackData);


	return (
		<div>
			{
				feedBackData.map(feed => <div className="card bg-base-100 w-96 shadow-xl">
					<div className="card-body">
						<div className='flex'>
							<img src={feed.userImg} className='w-12 h-12 rounded-full' alt="" />
							<h2 className="card-title ml-4">{feed.name}</h2>
							<p>date</p>
						</div>
						<p>{feed.review}</p>
						
						<div className="card-actions justify-end items-center">
						<div className="rating">
							<input type="radio" name="rating-1" className="mask mask-star" />
							<input type="radio" name="rating-1" className="mask mask-star" defaultChecked />
							<input type="radio" name="rating-1" className="mask mask-star" />
							<input type="radio" name="rating-1" className="mask mask-star" />
							<input type="radio" name="rating-1" className="mask mask-star" />
						</div>
						<button className="btn btn-primary">Buy Now</button>
						</div>
					</div>
				</div>)
			}
		</div>
	);
};

export default FeedBack;