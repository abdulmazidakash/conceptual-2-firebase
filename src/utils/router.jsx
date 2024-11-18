import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout/MainLayout";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import AllTreatments from "../components/AllTreatments/AllTreatments";
import MyAppointments from "../components/MyAppointment/MyAppointment";
import Profile from "../components/Profile/Profile";

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout></MainLayout>,
		children: [
			{
				path: '/',
				element: <Home></Home>,
				loader: async () => {
					const servicesRes = await fetch('/service.json');
					const serviceData = await servicesRes.json();

					const feedBackRes = await fetch('/happyclients.json');
					const feedBackData = await feedBackRes.json();

					return {serviceData, feedBackData};
				}
			},
			{
				path: '/allTreatments',
				element: <AllTreatments></AllTreatments>,
				loader: () => fetch('/service.json'),
			},
			{
				path: '/myAppointments',
				element: <MyAppointments></MyAppointments>,
			},
			{
				path: '/profile',
				element: <Profile></Profile>,
			}
		]
	}
]);

export default router;