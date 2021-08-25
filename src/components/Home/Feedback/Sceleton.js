import React from 'react';

const Sceleton = () => {
    return (
        <div className="animate-pulse max-w-md py-4 mx-3 px-6 bg-white border border-gray-900 shadow-lg rounded-lg my-16">
            {/* Image Scalaton */}
            <div className="flex justify-center md:justify-end -mt-16">
                <div>
                    <div className="cursor-pointer flex justify-center items-center w-20 h-20 bg-gray-400 text-white font-RobotoSlab rounded-full p-1.5 mx-auto"></div>
                </div>
            </div>
            {/* Description Scalaton */}
            <div className="mt-3 flex flex-col gap-y-1">
                <div className="rounded-md h-3 bg-gray-400"></div>
                <div className="rounded-md h-3 bg-gray-400 w-8/12"></div>
                <div className="rounded-md h-3 bg-gray-400 w-10/12"></div>
                <div className="rounded-md h-3 bg-gray-400"></div>
            </div>
            <div className="flex flex-col mt-4">
                <div className="h-6 w-5/12 bg-gray-400 rounded-md"></div>
                <div className="h-4 w-6/12 bg-gray-400 rounded-md mt-1.5"></div>
            </div>
        </div>
    );
};

export default Sceleton;