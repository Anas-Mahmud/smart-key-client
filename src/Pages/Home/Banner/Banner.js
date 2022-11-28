import React from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const Banner = () => {
    return (
        <div>
            <section>
                <div className="dark:bg-gray-200">
                    <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-900">
                        <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-900">Resell your keyboard</h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-900">We are always open to expand our reseller and distribution community. Let’s find out how we can work together.</p>
                        <div className="flex flex-wrap justify-center">
                            <Link to={'/dashboard/addProduct'}><PrimaryButton>Resell</PrimaryButton></Link>
                            <Link to={'/blog'}><button type="button" className="px-8 py-3 m-2 text-lg border rounded dark:border-primary dark:text-gray-900 font-semibold">Blogs</button></Link>
                        </div>
                    </div>
                </div>
                <img src="https://hardwarecanucks.com/wp-content/uploads/LowProfileKeyboardRoundup-33.jpg" alt="" className="w-5/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 dark:bg-gray-500" />
            </section>
        </div>
    );
};

export default Banner;