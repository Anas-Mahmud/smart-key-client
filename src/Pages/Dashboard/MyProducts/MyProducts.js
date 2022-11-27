import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import Spinner from '../../../components/Spinner/Spinner';
import { AuthContext } from '../../../contexts/AuthProvider';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';

const MyProducts = () => {
    const [deleteProduct, setDeleteProduct] = useState(null);
    const { user } = useContext(AuthContext);

    const closeModal = () => {
        setDeleteProduct(null);
    }

    const { data: myProducts, isLoading, refetch } = useQuery({
        queryKey: ['myProducts'],
        queryFn: async () => {
            try {
                const res = await fetch(`http://localhost:5000/myProducts?email=${user?.email}`, {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                const data = await res.json();
                return data;
            }
            catch (error) {

            }
        }
    })

    const handleDelete = product => {
        fetch(`http://localhost:5000/product/${product._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success(`${product.title} Delete Successfully`)
                    refetch();
                }
            })
    }

    if (isLoading) {
        return <Spinner></Spinner>
    }

    return (
        <div>
            <h2 className="text-3xl">my products</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image <span className='ml-16'>Product</span></th>
                            <th>Price</th>
                            <th>Availability</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            myProducts?.map((product, i) => <tr key={product._id}>
                                <th>{i + 1}</th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={product.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold ml-10">{product.title}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className='font-bold'>{product.resalePrice} $</td>
                                <td>
                                    <button className="btn btn-accent btn-md">Available</button>
                                </td>
                                <th>
                                    <label onClick={() => setDeleteProduct(product)} htmlFor="confirmation-modal" className="btn btn-outline btn-warning btn-md">Delete</label>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deleteProduct && <ConfirmationModal
                    title={`Are You Sure?`}
                    message={`You want to delete ${deleteProduct.title}?`}
                    successButtonName='Delete'
                    successAction={handleDelete}
                    modalData={deleteProduct}
                    closeModal={closeModal}
                ></ConfirmationModal>
            }
        </div>
    );
};

export default MyProducts;