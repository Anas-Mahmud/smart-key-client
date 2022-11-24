import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='mb-4'>
            <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 space-y-10 py-12 px-4 sm:px-6 lg:px-8">
                <div>
                    <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Login to your account</h1>
                    <p className="mt-2 text-center text-sm text-gray-200">
                        Or
                        <Link to={'/signup'} className="font-medium text-indigo-500 border-b border-indigo-600"> register your FREE account </Link>
                    </p>
                </div>
                <div className="max-w-md w-full mx-auto bg-white shadow rounded-lg p-7 py-16 space-y-6">
                    <div className="flex flex-col">
                        <label className="text-sm font-bold text-gray-600 mb-1" for="email">Email Address</label>
                        <input className="border rounded-md bg-white px-3 py-2" type="text" name="email" id="email" placeholder="Enter your Email Address" />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm font-bold text-gray-600 mb-1" for="password">Password</label>
                        <input className="border rounded-md bg-white px-3 py-2" type="password" name="password" id="password" placeholder="Enter your Password" />
                    </div>
                    <div>
                        <button className="w-full bg-indigo-600 text-white rounded-md p-2">Sign in</button>
                    </div>
                    <div className="relative pb-2">
                        <div className="absolute top-0 left-0 w-full border-b"></div>
                        <div className="absolute -top-3 left-0 w-full text-center">
                            <span className="bg-white px-3 text-sm">or continue via</span>
                        </div>
                    </div>
                    <div className="">
                        <div className="border-2 rounded-md p-3 cursor-pointer hover:border-gray-600 text-center">
                            <h2 className='font-semibold'>Sign in with Google</h2>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Login;