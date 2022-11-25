// import React, { useEffect, useState } from 'react';
import CategoryCard from '../CategoryCard/CategoryCard';

const ProductCategories = ({ categories }) => {
    // const [allProducts, setAllProducts] = useState([])
    // // const [productCategory, setProductCategory] = useState([])

    // useEffect(() => {
    //     fetch('http://localhost:5000/allProducts')
    //         .then(res => res.json())
    //         .then(data => setAllProducts(data))
    // }, [])

    // const productCategories = allProducts.map(product => product.category)
    // console.log(productCategories);

    // useEffect(() => {
    //     fetch(`http://localhost:5000/products/${productCategories}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //         })
    // }, [productCategories])

    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Master Cleanse Reliac Heirloom</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
                    </div>
                    <div className="flex flex-wrap justify-evenly">
                        {
                            categories.map(category => <CategoryCard
                                key={category.categoryId}
                                category={category}
                            ></CategoryCard>)
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProductCategories;