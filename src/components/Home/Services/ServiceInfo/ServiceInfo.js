import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTag, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const ServiceInfo = ({ details }) => {
    const { name, img, price, description } = details;
    return (
        <div className="flex flex-1 flex-col border-2 border-gray-800 px-3 py-2 h-full shadow-lg transform sm:transform-gpu hover:scale-105 transition duration-500 ease-in-out cursor-pointer">
            <div className="h-full">
                <img className="mx-auto" src={img} alt="" />
                <h1 className="text-2xl font-RobotoSlab mb-4">{name}</h1>
                <p className="text-justify text-md font-Ubuntu text-gray-600">{description}</p>
            </div>
            <hr className="mb-2 mt-1" />
            <div className="flex flex-1 justify-around items-center">
                <p className="font-Signika text-lg text-gray-600"><FontAwesomeIcon icon={faTag} /> ${price}</p>
                <button className="px-5 py-2 rounded-lg bg-cs-black hover:bg-cs-ebony font-Signika text-white text-lg transition duration-300 ease-in-out"><FontAwesomeIcon icon={faShoppingCart} /> Buy</button>
            </div>
        </div>
    );
};

export default ServiceInfo;