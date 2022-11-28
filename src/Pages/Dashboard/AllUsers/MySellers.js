import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';

const MySellers = () => {
    const [deleteUser, setDeleteUser] = useState(null);

    const closeModal = () => {
        setDeleteUser(null);
    }
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://smart-key-server.vercel.app/sellers')
            const data = await res.json();
            return data;
        }
    });

    const handleVerify = id => {
        fetch(`https://smart-key-server.vercel.app/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    toast.success('verified successful.')
                    refetch();
                }
            })
    }

    const handleDelete = user => {
        // console.log(user);
        fetch(`https://smart-key-server.vercel.app/user/${user._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success(`${user.name} Delete Successfully`)
                    refetch();
                }
            })
    }
    return (
        <div>
            <h2 className='text-2xl font-semibold my-2'>Sellers Information</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, i) => <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td><button onClick={() => handleVerify(user._id)} className='btn btn-xs btn-info'>{user?.status !== 'verified' ? 'verify' : 'verified'}</button></td>
                                <td><label onClick={() => setDeleteUser(user)} htmlFor="confirmation-modal" className="btn btn-outline btn-warning btn-sm">Delete</label></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deleteUser && <ConfirmationModal
                    title={`Are You Sure?`}
                    message={`You want to delete ${deleteUser.name}?`}
                    successButtonName='Delete'
                    successAction={handleDelete}
                    modalData={deleteUser}
                    closeModal={closeModal}
                ></ConfirmationModal>
            }
        </div>
    );
};

export default MySellers;