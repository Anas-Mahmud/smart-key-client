import React, { useEffect, useState } from 'react';
import ProductCategories from '../../Products/ProductCategories/ProductCategories';
import Banner from '../Banner/Banner';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    // console.log(categories);

    return (
        <div className=''>
            <Banner></Banner>
            <ProductCategories
                categories={categories}
            ></ProductCategories>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;