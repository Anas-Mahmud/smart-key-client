import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import useSeller from '../hooks/useSeller';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const [isSeller] = useSeller(user?.email);
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
                    <ul className="menu p-4 w-80 mr-3 font-semibold text-base-content">
                        {
                            !isAdmin && !isSeller &&
                            <li className='mt-5 bg-base-200 rounded-lg'><Link to={'/dashboard'}>My Orders</Link></li>
                        }
                        {
                            isSeller && <>
                                <li className='mt-5 bg-base-200 rounded-lg'><Link to={'/dashboard/myProducts'}>My Products</Link></li>
                                <li className='mt-5 bg-base-200 rounded-lg'><Link to={'/dashboard/addProduct'}>Add Product</Link></li>
                            </>
                        }
                        {
                            isAdmin && <>
                                <li className='mt-5 bg-base-200 rounded-lg'><Link to={'/dashboard/mySellers'}>My Seller</Link></li>
                                <li className='mt-5 bg-base-200 rounded-lg'><Link to={'/dashboard/allUsers'}>My Buyers</Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;