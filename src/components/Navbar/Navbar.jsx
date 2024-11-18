import { NavLink } from 'react-router-dom';
import './Navbar.css'
import { useContext } from 'react';
import { authContext } from '../AuthProvider/AuthProvider';

const Navbar = () => {

	const {user, handleLogOut} = useContext(authContext);
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
				{
					user?.email ? (
						<div className='flex items-center gap-2'>
							<img className='w-10 rounded-full object-cover' src={user.photoURL} alt="" />
							<button onClick={handleLogOut} className='btn btn-info'>Logout</button>
						</div>
					): (
						<NavLink to='/login'>
					<button className='btn btn-accent mr-4'>Login</button>
				</NavLink>
					)
				}
			</div>
		</div>
	);
};

export default Navbar;