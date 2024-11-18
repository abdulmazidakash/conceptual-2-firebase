import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";


const MainLayout = () => {
	return (
		<div>
			<Navbar></Navbar>

			<div className="w-[80%] mx-auto max-w-[1200px]  my-8">
				<Outlet></Outlet>
			</div>
		</div>
	);
};

export default MainLayout;