import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import { Login } from "../components/Login";
import { SignUp } from '../components/SignUp';
import { Home } from '../components/Home';

const router = createBrowserRouter ([
    {path:'/',element:<Home/>},
    {path:'/login', element:<Login/>},
    {path:'/signup',element:<SignUp/>}
])

const  AppRouter = () => {
    return <RouterProvider router={router} ></RouterProvider>
}

export default AppRouter