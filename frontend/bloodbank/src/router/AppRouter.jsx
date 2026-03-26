import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import { Login } from "../components/Login";
import { SignUp } from '../components/SignUp';
import { Home } from '../components/Home';
import { AboutUs } from '../pages/AboutUs';
import { Contacts } from '../pages/Contacts';

const router = createBrowserRouter ([
    {path:'/',element:<Home/>},
    {path:'/login', element:<Login/>},
    {path:'/signup',element:<SignUp/>},
    {path:'/aboutus',element:<AboutUs/>},
    {path:'/contacts',element:<Contacts/>}
])

const  AppRouter = () => {
    return <RouterProvider router={router} ></RouterProvider>
}

export default AppRouter