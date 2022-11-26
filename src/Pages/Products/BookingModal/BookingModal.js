import React, { useContext } from 'react';
import { format } from 'date-fns';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';

const BookingModal = ({ productDetails, setProductDetails }) => {
    const { user } = useContext(AuthContext)
    // console.log(user);

    const time = new Date();
    const date = format(time, "PP")

    const handleOrder = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const photo = event.target.photo.value;
        const price = event.target.price.value;
        const location = event.target.location.value;
        const phone = event.target.phone.value;
        const meetingLocation = event.target.meetingLocation.value;

        const orderProduct = {
            productId: productDetails._id,
            productName: productDetails?.title,
            name,
            email,
            photo,
            price,
            location,
            phone,
            meetingLocation,
            purchaseTime: date,
        }
        console.log(orderProduct);

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setProductDetails(null);
                    toast.success("Product Booking successfully")
                }
            })

    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-xl font-bold mb-4">Product Name: <span className='text-secondary text-2xl'>{productDetails?.title}</span></h3>
                    <form onSubmit={handleOrder}>
                        <div className='grid grid-cols-2 gap-3'>
                            <input name='name' type="text" value={user?.displayName} disabled className="input input-bordered w-full" />
                            <input name='email' type="email" value={user?.email} disabled className="input input-bordered w-full" />
                            <input name='photo' type="email" value={productDetails?.img} disabled className="input input-bordered w-full" />
                            <input name='price' type="text" value={productDetails.originalPrice} disabled className="input input-bordered w-full" />
                            <input name='location' type="text" value={productDetails.location} disabled className="input input-bordered w-full" />
                            <input name='phone' type="text" placeholder="Your phone" className="input input-bordered w-full" />
                            <input name='meetingLocation' type="text" placeholder="Meeting location" className="input input-bordered w-full" />
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