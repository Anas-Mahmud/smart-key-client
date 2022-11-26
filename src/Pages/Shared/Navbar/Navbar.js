import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../assets/logo.png";
import { AuthContext } from '../../../contexts/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const menuItems = <React.Fragment>
        <li><Link to={'/'}>Home</Link></li>
        {
            user?.uid ?
                <li><Link to={'/dashboard'}>Dashboard</Link></li>
                :
                <></>
        }
        <li><Link to={'/blog'}>Blogs</Link></li>
    </React.Fragment>

    return (
        <div className='my-2'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <div className="flex items-center justify-center w-12 h-12 rounded-full dark:bg-accent">
                        <img src={logo} alt="" />
                    </div>
                    <Link to={'/'} className="btn btn-ghost normal-case text-2xl font-semibold">Smart Key</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user?.uid ?
                            <button onClick={handleLogOut} className="btn btn-primary">Sign out</button>
                            :
                            <>
                                <Link to={'/login'} className="btn btn-primary">Login</Link>
                                <Link to={'/signup'} className="btn btn-primary ml-3">Sign up</Link>
                            </>
                    }
                </div>
                <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>
    );
};

export default Navbar;