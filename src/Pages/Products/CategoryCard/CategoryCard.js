import React from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const CategoryCard = ({ category }) => {

    return (
        <div className='my-2'>
            <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                <img className="object-cover w-full h-56" src={category.img} alt="avatar" />
                <div className="py-5 text-center">
                    <h2 className="block text-2xl font-bold text-gray-800 dark:text-white my-2" tabindex="0" role="link">{category.title}</h2>
                    <Link to={category.categoryId}><PrimaryButton>See All Products</PrimaryButton></Link>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;