import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';
import CategoryProduct from './CategoryProduct';

const AllCategoryProducts = () => {
    const products = useLoaderData()
    const [productDetails, setProductDetails] = useState(null);

    return (
        <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-col text-center w-full mb-20">
                    <h1 class="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">OUR TEAM</h1>
                    <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
                </div>
                <div class="flex flex-wrap -m-4">
                    {
                        products.map(product => <CategoryProduct
                            key={product._id}
                            product={product}
                            setProductDetails={setProductDetails}
                        ></CategoryProduct>)
                    }
                </div>
                {
                    productDetails &&
                    <BookingModal
                        productDetails={productDetails}
                    ></BookingModal>}
            </div>
        </section>
    );
};

export default AllCategoryProducts;