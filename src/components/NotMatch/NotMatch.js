import React from 'react';
import { Link } from 'react-router-dom'

const NotMatch = () => {
    return (
        <div>
            <div className="absolute top-1/3 left-2/4 -ml-24 text-center">
                <div className="animate-bounce text-center">
                    <h2 className="text-5xl font-Signika font-bold">404 error</h2>
                    <h2 className="text-3xl font-Signika font-bold mt-1">(ノ﹏ヽ)</h2>
                </div>
                <button className="mt-10 px-5 py-2 rounded-lg border-2 border-black bg-black text-white font-Signika font-bold text-xl hover:bg-white hover:text-black transition duration-300"><Link to="/">Go to Home</Link></button>
            </div>
        </div>
    );
};

export default NotMatch;