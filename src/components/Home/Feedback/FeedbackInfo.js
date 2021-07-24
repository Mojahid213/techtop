import React from 'react';

const FeedbackInfo = ({ detail }) => {
    return (
        <div className="max-w-md py-4 mx-2 px-6 bg-white border shadow-lg rounded-lg my-16">
            <div className="flex justify-center md:justify-end -mt-16">
                <img className="w-20 h-20 object-cover rounded-full border-2 border-cs-black" src={`http://localhost:5000${detail.image.url}`} alt="" />
            </div>
            <div className="overflow-y-auto h-24">
                <p className="mt-2 text-gray-700 font-Ubuntu"><span className="text-2xl font-bold">❝ </span>{detail.description}</p>
            </div>
            <div className="flex flex-col justify-end mt-4">
                <h1 className="text-lg font-RobotoSlab font-semibold text-indigo-900">{detail.name}</h1>
                <p className="font-Ubuntu text-sm font-semibold">{detail.profession}</p>
            </div>
        </div>
    );
};

export default FeedbackInfo;