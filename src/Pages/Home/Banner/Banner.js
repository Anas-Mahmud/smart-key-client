import React from 'react';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const Banner = () => {
    return (
        <div>
            <section>
                <div className="dark:bg-gray-200">
                    <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-900">
                        <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-900">Provident blanditiis cum exercitationem</h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-900">Cupiditate minima voluptate temporibus quia? Architecto beatae esse ab amet vero eaque explicabo!</p>
                        <div className="flex flex-wrap justify-center">
                            <PrimaryButton>Get started</PrimaryButton>
                            <button type="button" className="px-8 py-3 m-2 text-lg border rounded dark:border-primary dark:text-gray-900 font-semibold">Learn more</button>
                        </div>
                    </div>
                </div>
                <img src="https://hardwarecanucks.com/wp-content/uploads/LowProfileKeyboardRoundup-33.jpg" alt="" className="w-5/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 dark:bg-gray-500" />
            </section>
        </div>
    );
};

export default Banner;