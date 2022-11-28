// import { useEffect, useState } from "react";
import { MdVerified } from "react-icons/md";

const CategoryProduct = ({ product, setProductDetails }) => {
    const { img, originalPrice, resalePrice, sellerName, yearsOfUse, title, location } = product;

    // const [isVerifiedUsers, setIsVerifiedUsers] = useState(null);
    // useEffect(() => {
    //     fetch('http://localhost:5000/verifiedUser')
    //         .then(res => res.json())
    //         .then(data => setIsVerifiedUsers(data))
    // }, [])

    // const verified = isVerifiedUsers?.map(verifiedUser => <></>)
    // // const verifyStatus = verified
    // console.log(verified);

    return (
        <div className="p-4 lg:w-1/2">
            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={img} />
                <div className="flex-grow sm:pl-8">
                    <h2 className="title-font font-medium text-lg text-gray-900">{title}</h2>
                    <h3 className="text-gray-800">Resale: <strong>{resalePrice}</strong>$</h3>
                    <h3 className="text-gray-800">Year of use: {yearsOfUse}</h3>
                    <h3 className="text-gray-800">Original Price: <strong>{originalPrice}</strong>$</h3>
                    <h3 className="text-gray-800">Seller Name: {sellerName} <MdVerified className='inline text-sky-600' /></h3>
                    <h3 className="text-gray-800 mb-3">Location: {location}</h3>
                    <label onClick={() => setProductDetails(product)} htmlFor="booking-modal" className="btn btn-primary ">Buy Now</label>
                </div>
            </div>
        </div>
    );
};

export default CategoryProduct;