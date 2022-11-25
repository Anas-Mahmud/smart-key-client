import React from 'react';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const CategoryProduct = ({ product }) => {
    const { img, originalPrice, resalePrice, sellerName, yearsOfUse, title } = product;

    return (
        <div class="p-4 lg:w-1/2">
            <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={img} />
                <div class="flex-grow sm:pl-8">
                    <h2 class="title-font font-medium text-lg text-gray-900">{title}</h2>
                    <h3 class="text-gray-800">Resale: <strong>{resalePrice}</strong>$</h3>
                    <h3 class="text-gray-800">Year of use: {yearsOfUse}</h3>
                    <h3 class="text-gray-800">Original Price: <strong>{originalPrice}</strong>$</h3>
                    <h3 class="text-gray-800 mb-3">Seller Name: {sellerName}</h3>
                    <PrimaryButton>Bye Now</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default CategoryProduct;