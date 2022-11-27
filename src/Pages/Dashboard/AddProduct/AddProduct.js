import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [categories, setCategories] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:5000/selectCategories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    const imghostKey = process.env.REACT_APP_imgbb_key;

    const handleProductSubmit = data => {
        const image = data.photo[0]
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imghostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url);
                    const product = {
                        sellerName: data.name,
                        email: data.email,
                        title: data.product,
                        image: imgData.data.url,
                        originalPrice: data.originalPrice,
                        resalePrice: data.resalePrice,
                        location: data.location,
                        yearsOfUse: data.year,
                        category: data.category,
                        description: data.description,
                    }
                    console.log(product);

                    fetch('http://localhost:5000/products', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)
                    }).then(res => res.json())
                        .then(result => {
                            console.log(result);
                            toast.success('Product Added Successfully')
                            navigate('/dashboard/myProducts')
                        })
                }
            })

    }

    return (
        <div>

            <section className="bg-gray-100">
                <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                    <h2 className="text-3xl mb-5 ml-4 font-semibold">Add Product</h2>
                    <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-4">

                        <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                            <form onSubmit={handleSubmit(handleProductSubmit)} className="space-y-4">
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <input
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Enter your name"
                                        type="text"
                                        id="name"
                                        name='name'
                                        {...register("name", {
                                            required: "name is required"
                                        })}
                                    />
                                    {errors.name && <p className='text-red-600'>{errors.name.message}</p>}
                                    <input
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Email address"
                                        type="email"
                                        id="email"
                                        name='email'
                                        {...register("email")}
                                    />
                                </div>
                                <input
                                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    placeholder="Product Name"
                                    type="text"
                                    id="name"
                                    name='product'
                                    {...register("product", {
                                        required: "Product Name is required"
                                    })}
                                />
                                {errors.product && <p className='text-red-600'>{errors.product.message}</p>}
                                <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
                                    <input
                                        className="input input-bordered w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Product Name"
                                        type="file"
                                        id="photo"
                                        name='photo'
                                        {...register("photo", {
                                            required: "Photo is required"
                                        })}
                                    />
                                    {errors.photo && <p className='text-red-600'>{errors.photo.message}</p>}
                                    <input
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Original Price"
                                        type="text"
                                        id="originalPrice"
                                        name='originalPrice'
                                        {...register("originalPrice", {
                                            required: "Original price is required"
                                        })}
                                    />
                                    {errors.originalPrice && <p className='text-red-600'>{errors.originalPrice.message}</p>}
                                </div>

                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <input
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Resale Price"
                                        type="text"
                                        id="resalePrice"
                                        name='resalePrice'
                                        {...register("resalePrice", {
                                            required: "resale price is required"
                                        })}
                                    />
                                    {errors.resalePrice && <p className='text-red-600'>{errors.resalePrice.message}</p>}
                                    <input
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Location"
                                        type="text"
                                        id="location"
                                        name='location'
                                        {...register("location", {
                                            required: "location is required"
                                        })}
                                    />
                                    {errors.location && <p className='text-red-600'>{errors.location.message}</p>}
                                </div>

                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <input
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Year of Use"
                                        type="text"
                                        id="year-of-purchase"
                                        name='year'
                                        {...register("year", {
                                            required: "year is required"
                                        })}
                                    />
                                    {errors.year && <p className='text-red-600'>{errors.year.message}</p>}
                                    <select
                                        {...register("category", {
                                            required: "Category is required"
                                        })}
                                        className="select select-bordered w-full max-w-xs">
                                        {
                                            categories.map(category => <option
                                                key={category._id}
                                                value={category.categoryId}
                                            >{category.categoryId}</option>)
                                        }
                                    </select>
                                    {errors.category && <p className='text-red-600'>{errors.category.message}</p>}
                                </div>

                                <div>
                                    <textarea
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Product Description"
                                        rows="6"
                                        id="description"
                                        name='description'
                                        {...register("description")}
                                    ></textarea>
                                </div>

                                <div className="mt-4">
                                    <button className="inline-flex w-full items-center justify-center rounded-lg bg-black px-5 py-3 text-white sm:w-auto" type="submit">
                                        Add Product
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AddProduct;