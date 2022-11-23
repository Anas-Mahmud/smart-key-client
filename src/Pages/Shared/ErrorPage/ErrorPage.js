import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="grid h-screen place-content-center bg-white mb-10 -mt-20">
            <div className="text-center">
                <img className='' src="https://cdn.svgator.com/images/2022/01/funny-404-error-page-design.gif" alt="" />
                <h1 className="text-2xl font-bold tracking-tight text-secondary sm:text-5xl">Uh-oh!</h1>
                <h1 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">Look like you're lost</h1>
                <p className="mt-4 text-lg font-medium text-gray-500">The page you are looking for not availble</p>
                <Link to={'/'}>
                    <button type="button" className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-gray-800 dark:text-gray-50 bg-gradient-to-r from-primary to-secondary">Back to home</button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;