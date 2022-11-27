import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-200 rounded-2xl mr-3 font-semibold text-base-content">
                        <li className='mt-5'><Link to={'/dashboard'}>My Orders</Link></li>
                        <li className='mt-5'><Link to={'/dashboard/myProducts'}>My Products</Link></li>
                        <li className='mt-5'><Link to={'/dashboard/addProduct'}>Add Product</Link></li>
                        {
                            isAdmin && <>
                                <li className='mt-5'><Link to={'/dashboard/allUsers'}>All Buyers</Link></li>
                                <li className='mt-5'><Link >All Seller</Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;