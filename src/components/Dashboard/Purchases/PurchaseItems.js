import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import PurchaseCards from './PurchaseCards';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";


const PurchaseItems = () => {
    // user context
    const [user] = useContext(UserContext);

    // Loading State
    const [loading, setLoading] = useState(true);

    // Items state
    const [items, setItems] = useState([]);
    useEffect(() => {
        axios.get(`https://tech-top.herokuapp.com/purchases?email=${user.email}`, {
            headers: {
                Authorization: `Bearer ${JSON.parse(sessionStorage.getItem('token')).jwt}`,
            },
        })
            .then(res => {
                setItems(res.data);
                setLoading(false);
            })
            .then(err => {
                if (err) {
                    console.log(err);
                    setLoading(false);
                }
            })
    }, [user.email])

    return (
        <div>
            {loading ?
                <div className="flex justify-center">
                    <Loader
                        type="ThreeDots"
                        color="black"
                        height={100}
                        width={100}
                    />
                </div>
                : <div>
                    {items.length > 0 ?
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 text-center gap-10 mb-5">
                            {
                                items.map(detail => <PurchaseCards details={detail} key={detail.id}></PurchaseCards>)
                            }
                        </div>
                        : <h1 className="text-lg sm:text-2xl font-RobotoSlab font-bold text-center mt-16 md:mt-20 text-red-500">You haven't purchased any services :(</h1>
                    }
                </div>
            }
        </div>
    );
};

export default PurchaseItems;