import { NavLink, Outlet } from 'react-router'
import crudImage from "./Image/images.jpeg";
export default function Home() {
    return (
        <div>
            <h1 className='Home-Page-Header'>Home Page</h1>
            <div className='Homepage'>
                <NavLink className='link' to='/'>Home</NavLink>
                <NavLink className='link' to='/Get'>StudentsList</NavLink>
                <NavLink className='link' to='/Post'>Adduser</NavLink>
                <NavLink className='link' to='/About'>About</NavLink>
            </div>
            <Outlet />
            <div class="Home-Page-Background">
                <h1 className="Page-Heading">CRUD Application</h1>
                <div className="Home-Page-Image">
                    <img className='Home-Page-Image' src={crudImage} alt="image" />
                </div>
            </div>


        </div>
    )
}