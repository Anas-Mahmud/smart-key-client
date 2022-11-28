import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';
import CategoryProduct from './CategoryProduct';

const AllCategoryProducts = () => {
    const products = useLoaderData()
    const [productDetails, setProductDetails] = useState(null);
    // console.log(products);

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                    {
                        products?.map(product => <CategoryProduct
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
                        setProductDetails={setProductDetails}
                    ></BookingModal>}
            </div>
        </section>
    );
};

export default AllCategoryProducts;