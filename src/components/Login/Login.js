import React from 'react';
import Navbar from '../../shared/Navbar'

const Login = () => {


    // Form submit
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    // Input value validation
    const handleChange = (e) => {
        //.....for firstname .....
        if (e.target.name === 'firstname') {
            let isTrue = /^[A-Za-z\s]+$/.test(e.target.value);
            console.log(isTrue);
        }
    }
    return (
        <div>
            <Navbar></Navbar>
            {/* Login and signup form */}
            <div className="flex justify-center mt-16">
                <form onSubmit={handleSubmit} className="flex flex-col justify-center max-w-md w-full bg-white border-2 border-cs-black px-4 py-6 mx-3 rounded-lg font-Ubuntu">
                    <h1 className="text-center text-2xl font-RobotoSlab font-bold mb-6">Sign Up</h1>
                    <div className="flex flex-col sm:flex-row justify-center gap-x-4 gap-y-5 mb-5">
                        <input onChange={handleChange} type="text" name="firstname" id="fname" placeholder="Firstname" className="w-full p-1.5 flex-1 border border-cs-black rounded-md transition duration-200 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        <input onChange={handleChange} type="text" name="lastname" id="lname" placeholder="Lastname" className="w-full p-1.5 flex-1 border border-cs-black rounded-md transition duration-200 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <input onChange={handleChange} type="email" name="email" id="email" placeholder="Email" className="border p-1.5 border-cs-black mb-5 rounded-md transition duration-200 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <input onChange={handleChange} type="password" name="password" id="password" placeholder="Password" className="border p-1.5 border-cs-black mb-5 rounded-md transition duration-200 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <input onChange={handleChange} type="password" name="confirmpass" id="cinfirmpass" placeholder="confirm Password" className="border p-1.5 border-cs-black mb-5 rounded-md transition duration-200 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <button className="px-5 py-3 bg-cs-black text-white font-bold rounded-md hover:bg-gray-800 transition duration-200 ease-in-out">Create Account</button>
                    <div className="mt-3">
                        <small>Already have an account? Login</small>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;