import React from 'react';

const FeedbackInfo = ({ detail }) => {
    return (
        <div className="max-w-md py-4 mx-2 px-6 bg-white border shadow-lg rounded-lg my-16">
            <div className="flex justify-center md:justify-end -mt-16">
                {detail.image &&
                    <img className="w-20 h-20 object-cover rounded-full border-2 border-cs-black" src={`https://tech-top.herokuapp.com${detail.image.url}`} alt="" />
                }
                {detail.avatar &&
                    <div>
                        <div className="cursor-pointer flex justify-center items-center w-20 h-20 bg-black text-white border-2 border-cs-black font-RobotoSlab rounded-full p-1.5 mx-auto"><span className="text-4xl">{detail.avatar}</span></div>
                    </div>
                }
            </div>
            <div className="overflow-y-auto h-28">
                <p className="mt-2 text-gray-700 font-Ubuntu"><span className="text-2xl font-bold">❝ </span>{detail.description}</p>
            </div>
            <div className="flex flex-col justify-end mt-1">
                {detail.position && detail.company ?
                    <h1 className="text-lg font-RobotoSlab font-semibold text-indigo-900">{detail.name}</h1>
                    :
                    <h1 className="text-lg font-RobotoSlab font-semibold text-indigo-900 mt-3.5 mb-1.5">{detail.name}</h1>
                }
                {detail.position && detail.company &&
                    <p className="font-Ubuntu text-sm font-semibold">{detail.position}, {detail.company}</p>
                }
            </div>
        </div>
    );
};

export default FeedbackInfo;