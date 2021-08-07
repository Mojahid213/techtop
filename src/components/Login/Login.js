import React, { useContext, useState } from 'react';
import Navbar from '../../shared/Navbar'
import axios from 'axios';
import { UserContext } from '../../App';
import cogoToast from 'cogo-toast';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";



const Login = () => {
    // User context
    const UserInfo = useContext(UserContext);

    // Login and signup toggle
    const [SignStatus, setSignStatus] = useState({
        signup: false
    });

    // The Input validation sate
    const [IsValid, setIsValid] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirmpass: '',
        isFirstVlid: true,
        isLastValid: true,
        isEmailValid: true,
        isPassValid: true,
        isConfPassValid: true,
    });

    // loading state
    const [loading, setLoading] = useState(false);

    // Form submit handle
    const handleSubmit = (e) => {
        e.preventDefault();
        // For user SIGNUP
        if (SignStatus.signup && IsValid.firstname && IsValid.lastname && IsValid.email && IsValid.password && IsValid.confirmpass) {
            setLoading(true);
            const theUserName = IsValid.firstname + " " + IsValid.lastname;
            axios.post('http://localhost:5000/auth/local/register', {
                username: theUserName,
                email: IsValid.email,
                password: IsValid.password,
            })
                .then(response => {
                    const Jwt = {
                        success: true,
                        jwt: response.data.jwt
                    };
                    sessionStorage.setItem('token', JSON.stringify(Jwt));
                    UserInfo.dispatch({
                        type: "USERINFO",
                        name: IsValid.firstname,
                        email: IsValid.email
                    });
                    e.target.reset();
                    setLoading(false);
                    cogoToast.success('successfully signed up', {
                        heading: 'SIGNED UP'
                    });
                })
                .catch(error => {
                    setLoading(false);
                    cogoToast.error(error.response.data.message[0].messages[0].message, {
                        heading: 'Error',
                    });
                });
        }

        // ...For the Login...
        if (!SignStatus.signup && IsValid.email && IsValid.password) {
            setLoading(true);
            axios.post('http://localhost:5000/auth/local', {
                identifier: IsValid.email,
                password: IsValid.password,
            })
                .then(response => {
                    const Jwt = {
                        success: true,
                        jwt: response.data.jwt
                    }
                    sessionStorage.setItem('token', JSON.stringify(Jwt));
                    const fullname = response.data.user.username;
                    const firstname = fullname.split(" ")[0];
                    UserInfo.dispatch({
                        type: "USERINFO",
                        name: firstname,
                        email: response.data.user.email
                    })
                    e.target.reset();
                    setLoading(false);
                    cogoToast.success('successfully logged in', {
                        heading: 'LOGGED IN'
                    });
                })
                .catch(error => {
                    setLoading(false);
                    cogoToast.error(error.response.data.message[0].messages[0].message, {
                        heading: 'Error',
                    });
                });
        }
    }

    // Input value validation
    const handleChange = (e) => {
        let isFormValid = false;
        //.....for firstname validation .....
        if (e.target.name === 'firstname') {
            isFormValid = /^[A-Za-z\s]+$/.test(e.target.value);
            if (isFormValid === false) {
                const newValidInfo = { ...IsValid };
                newValidInfo.isFirstVlid = false;
                newValidInfo.firstname = '';
                setIsValid(newValidInfo);
            }
        }
        //.....for lastname validation .....
        if (e.target.name === 'lastname') {
            isFormValid = /^[A-Za-z\s]+$/.test(e.target.value);
            if (isFormValid === false) {
                const newValidInfo = { ...IsValid };
                newValidInfo.isLastValid = false;
                newValidInfo.lastname = '';
                setIsValid(newValidInfo);
            }
        }
        //.....for email validation .....
        if (e.target.name === 'email') {
            isFormValid = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e.target.value);
            if (isFormValid === false) {
                const newValidInfo = { ...IsValid };
                newValidInfo.isEmailValid = false;
                newValidInfo.email = '';
                setIsValid(newValidInfo);
            }
        }
        //.....for password validation .....
        if (e.target.name === 'password') {
            isFormValid = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(e.target.value);
            // Sending pass to state
            if (isFormValid === false) {
                const newValidInfo = { ...IsValid };
                newValidInfo.isPassValid = false;
                newValidInfo.password = '';
                setIsValid(newValidInfo);
            }
            if (isFormValid) {
                const newValidInfo = { ...IsValid };
                newValidInfo.password = e.target.value;
                setIsValid(newValidInfo);
            }
        }
        // ...... To Confirm password.......
        if (e.target.name === 'confirmpass') {
            if (IsValid.password === e.target.value) {
                isFormValid = true;
            } else {
                isFormValid = false;
            }
            if (isFormValid === false) {
                const newValidInfo = { ...IsValid };
                newValidInfo.isConfPassValid = false;
                newValidInfo.confirmpass = '';
                setIsValid(newValidInfo);
            }

        }
        // // If Form validation is true
        if (isFormValid) {
            const newValidInfo = { ...IsValid };
            newValidInfo[e.target.name] = e.target.value;
            newValidInfo.isFirstVlid = true;
            newValidInfo.isLastValid = true;
            newValidInfo.isEmailValid = true;
            newValidInfo.isPassValid = true;
            newValidInfo.isConfPassValid = true;
            setIsValid(newValidInfo)
        }
    }
    return (
        <div>
            <Navbar></Navbar>
            {/* Login and signup form */}
            <div className="flex justify-center mt-16">
                <form data-aos="fade-up" data-aos-duration="1000" onSubmit={handleSubmit} className="flex flex-col justify-center max-w-md w-full bg-white border-2 border-cs-black px-4 py-6 mx-3 rounded-lg font-Ubuntu">
                    {SignStatus.signup ?
                        <h1 className="text-center text-2xl font-RobotoSlab font-bold mb-6">Sign Up</h1>
                        : <h1 className="text-center text-2xl font-RobotoSlab font-bold mb-6">Login</h1>
                    }
                    {SignStatus.signup &&
                        <div className="flex flex-col sm:flex-row justify-center gap-x-4 gap-y-5 mb-5">
                            {IsValid.isFirstVlid ?
                                <input onChange={handleChange} type="text" name="firstname" id="fname" placeholder="Firstname" required className="w-full p-1.5 flex-1 border border-cs-black rounded-md transition duration-200 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                : <input onChange={handleChange} type="text" name="firstname" id="fname" placeholder="Firstname" required className="w-full p-1.5 flex-1 border border-cs-black rounded-md transition duration-200 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-red-500" />
                            }
                            {IsValid.isLastValid ?
                                <input onChange={handleChange} type="text" name="lastname" id="lname" placeholder="Lastname" required className="w-full p-1.5 flex-1 border border-cs-black rounded-md transition duration-200 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                : <input onChange={handleChange} type="text" name="lastname" id="lname" placeholder="Lastname" required className="w-full p-1.5 flex-1 border border-cs-black rounded-md transition duration-200 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-red-500" />
                            }
                        </div>
                    }
                    {IsValid.isEmailValid ?
                        <input onChange={handleChange} type="email" name="email" id="email" placeholder="Email" required className="border p-1.5 border-cs-black mb-5 rounded-md transition duration-200 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        : <input onChange={handleChange} type="email" name="email" id="email" placeholder="Email" required className="border p-1.5 border-cs-black mb-5 rounded-md transition duration-200 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-red-500" />
                    }
                    <small className={IsValid.isPassValid ? "hidden" : "text-red-500"}>Minimum '6' letter with num and special cherecter</small>
                    {IsValid.isPassValid ?
                        <input onChange={handleChange} type="password" name="password" id="password" placeholder="Password" required className="border p-1.5 border-cs-black mb-5 rounded-md transition duration-200 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        : <input onChange={handleChange} type="password" name="password" id="password" placeholder="Password" required className="border p-1.5 border-cs-black mb-5 rounded-md transition duration-200 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-red-500" />
                    }
                    {SignStatus.signup &&
                        [IsValid.isConfPassValid ?
                            <input onChange={handleChange} type="password" name="confirmpass" id="cinfirmpass" placeholder="confirm Password" required className="border p-1.5 border-cs-black mb-5 rounded-md transition duration-200 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            : <input onChange={handleChange} type="password" name="confirmpass" id="cinfirmpass" placeholder="confirm Password" required className="border p-1.5 border-cs-black mb-5 rounded-md transition duration-200 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-red-500" />
                        ]
                    }
                    {SignStatus.signup ?
                        <button className="px-5 py-3 bg-cs-black text-white font-bold rounded-md hover:bg-gray-800 transition duration-200 ease-in-out" disabled={loading}>
                            {loading ?
                                <div className="flex justify-center">
                                    <Loader
                                        type="ThreeDots"
                                        color="#ffffff"
                                        height={24}
                                        width={50}
                                    />
                                </div>
                                : "Create Account"
                            }
                        </button>
                        : <button className="px-5 py-3 bg-cs-black text-white font-bold rounded-md hover:bg-gray-800 transition duration-200 ease-in-out" disabled={loading}>
                            {loading ?
                                <div className="flex justify-center">
                                    <Loader
                                        type="ThreeDots"
                                        color="#ffffff"
                                        height={24}
                                        width={50}
                                    />
                                </div>
                                : "Login"
                            }
                        </button>
                    }
                    <div className="mt-3">
                        {SignStatus.signup ?
                            <small>Already have an account? <span onClick={() => setSignStatus({ signup: false })} className="text-blue-700 hover:underline cursor-pointer">Login</span></small>
                            : <small>New here? <span onClick={() => setSignStatus({ signup: true })} className="text-blue-700 hover:underline cursor-pointer">Signup</span></small>
                        }
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;