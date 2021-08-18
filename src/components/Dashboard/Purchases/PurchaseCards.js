import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const PurchaseCards = ({ details }) => {

    const serviceName = details.service.split('');
    serviceName.splice(-1, 1);

    return (
        <div className="p-4 border-2 border-black shadow-lg rounded-lg">
            <h1 className="uppercase text-xl font-RobotoSlab font-bold">{serviceName}</h1>
            <p className="uppercase font-RobotoSlab font-bold">{details.type}</p>
            <div className="my-2 rounded-lg bg-black text-white p-3">
                <h1 className="text-4xl font-Ubuntu font-bold">${details.price}</h1>
                <p className="font-Ubuntu">per month per project</p>
            </div>
            <div className="flex justify-end mt-5">
                {details.completed ?
                    <p className="bg-green-600 bg-opacity-90 rounded p-2 text-white font-Signika font-bold"><FontAwesomeIcon icon={faCheckCircle} /> Completed</p>
                    : <p className="bg-red-500 bg-opacity-90 rounded p-2 text-white font-Signika font-bold"><FontAwesomeIcon icon={faClock} /> Pending</p>
                }
            </div>
        </div>
    );
};

export default PurchaseCards;