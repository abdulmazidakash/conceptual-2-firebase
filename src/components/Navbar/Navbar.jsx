import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
	return (
		<div className="min-h-20 bg-blue-950 text-white flex items-center justify-between">
			<div>
				<h1 className='text-xl font-extrabold ml-4'>TEETH WIZARD</h1>
			</div>
			<div >
				<NavLink to='/'>Home</NavLink> 
				<NavLink className='ml-4' to='/allTreatments'>All Treatments</NavLink> 
				<NavLink className='ml-4' to='/myAppointments'>My Appointment</NavLink> 
				<NavLink className='ml-4' to='/profile'>Profile</NavLink> 
			</div>
			<div>
				<button className='btn btn-accent mr-4'>Login</button>
			</div>
		</div>
	);
};

export default Navbar;