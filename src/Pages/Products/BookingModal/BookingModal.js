import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const BookingModal = ({ productDetails }) => {
    const { user } = useContext(AuthContext)
    console.log(user);
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-xl font-bold mb-4">Product Name: <span className='text-secondary text-2xl'>{productDetails?.title}</span></h3>
                    <form >
                        <div className='grid grid-cols-2 gap-3'>
                            <input type="text" value={user?.displayName} disabled className="input input-bordered w-full" />
                            <input type="text" value={user?.email} disabled className="input input-bordered w-full" />
                            <input type="text" value={productDetails.originalPrice} disabled className="input input-bordered w-full" />
                            <input type="text" value={productDetails.location} disabled className="input input-bordered w-full" />
                            <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                            <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                        </div>
                        <br />
                        <input className='btn btn-accent w-full' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;